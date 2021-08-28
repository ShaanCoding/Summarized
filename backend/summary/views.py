from django.shortcuts import render
from django.core.files.storage import default_storage
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import FileUploadParser, JSONParser
from summary.models import Overview, Summary
from summary.serializers import GetSummarySerializer, SummarySerializer, BlobSerializer
from summary.encoder import mp4_to_flac
from summary import google_api
from summary import summarize
from summary import questions
from summary import keywords
import time
import json


class GenerateKeywords(APIView):
    """
    Generates some keywords from text ;)
    """

    def get(self, request, format=None):
        keys = keywords.generate_keywords()
        return Response({
            'status': 'success',
            'response': json.dumps(keys)
        })


class GenerateQuestion(APIView):
    """
    Generates a question
    """

    def post(self, request, format=None):
        serializer = BlobSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors)

        blob_data = serializer.validated_data['blob']
        question = questions.generate_question([blob_data])

        if question:
            return Response({
                'status': 'success',
                'response': question
            })
        else:
            return Response({'status': 'fail'})


class SummarizeText(APIView):
    """
    Summarize a given blob of text
    """

    def post(self, request, format=None):
        serializer = BlobSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors)

        # test
        # print(serializer.blob)
        blob_data = serializer.validated_data['blob']

        summary = summarize.summarize_text(blob_data, False)
        if summary:
            return Response({
                'status': 'success',
                'response': summary
            })
        else:
            return Response({'status': 'fail'})


class GetOverview(APIView):
    """
    Get an overview of the summaries
    """

    def get(self, request, format=None):
        all_summaries = Summary.objects.all()
        ret = []
        for i in all_summaries:
            temp = {
                'id': i.id,
                'name': i.name,
            }
            ret.append(temp)

        return Response({
            'status': 'success',
            'response': ret
        })


class GetSummary(APIView):
    """
    Gets a summary given an ID
    """

    def post(self, request, format=None):
        serializer = GetSummarySerializer(data=request.data)
        if not serializer.is_valid():
            return Response({'status': 'fail'})

        post = Summary.objects.filter(id=serializer.validated_data['id'])

        if len(post) == 0:
            return Response({
                'status': 'fail',
                'detail': 'no such index'
            })

        current_sum = post[0]

        output = {
            'name': current_sum.name,
            'blob': current_sum.blob,
            'tags': json.loads(current_sum.related_tags),
            'questions': json.loads(current_sum.questions),
            'summaries': json.loads(current_sum.summaries)
        }

        return Response({
            'status': 'success',
            'response': output
        })


class UploadVideo(APIView):
    """
    Add a summary using a video.
    """
    parser_classes = [FileUploadParser]

    def post(self, request, format=None):
        video_file = request.FILES['file']
        flac_file = 'out.flac'

        if not video_file:
            return Response({
                'status': 'fail',
            }, status=status.HTTP_400_BAD_REQUEST)

        # commit video to storage
        default_storage.delete(video_file.name)
        file_name = default_storage.save(video_file.name, video_file)
        file_h = default_storage.open(file_name)

        # convert video to flac
        if not mp4_to_flac(str(file_h), flac_file):
            default_storage.delete(video_file.name)
            return Response({
                'status': 'fail',
                'detail': 'failed to convert video to flac'
            })

        # get the flac file
        flac_h = default_storage.open(flac_file)

        google_api.upload_blob(google_api.BUCKET_NAME,
                               str(flac_h), google_api.DST_BLOB_NAME)

        time.sleep(5)
        transcription = google_api.transcribe_gcs(google_api.GCS_URI)

        blob = google_api.parse_response(transcription)
        all_blob = ' '.join(blob)

        summaries = summarize.summarize_text(all_blob, False)

        if not summaries:
            return Response({'status': 'fail',
                             'detail': 'failed to generate summaries'})

        # generate questions based on summaries
        qs = questions.generate_question(summaries)
        keys = keywords.generate_keywords()

        # cleanup
        default_storage.delete(video_file.name)
        default_storage.delete(str(flac_h))

        # store in the database
        store_data = {
            'name': video_file.name,
            'blob': all_blob,
            'related_tags': json.dumps(keys),
            'questions': json.dumps(qs),
            'summaries': json.dumps(summaries)
        }

        serializer = SummarySerializer(data=store_data)

        if serializer.is_valid():
            serializer.save()
            return Response({
                'status': 'success',
                'blob': all_blob,
                'sum': summaries,
                'questions': qs,
                'keys': keys
            }, status=status.HTTP_200_OK)
        else:
            return Response({'status': 'fail',
                             'detail': 'bad serializer'})
