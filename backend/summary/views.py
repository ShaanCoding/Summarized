from django.shortcuts import render
from django.core.files.storage import default_storage
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import FileUploadParser, JSONParser
from summary.models import Overview, Summary
from summary.serializers import OverviewSerializer, SummarySerializer, BlobSerializer
from summary.encoder import mp4_to_flac
from summary import google_api
from summary import summarize
from summary import questions
import time
import json


class GetOverview(APIView):
    """
    View all summaries
    """

    def get(self, request, format=None):
        all_summaries = Overview.objects.all()
        serializer = OverviewSerializer(all_summaries, many=True)

        return Response({
            'status': 'success',
            'overview': serializer.data
        }, status=status.HTTP_200_OK)

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
                'status':'success',
                'response': question
            })
        else:
            return Response({'status':'fail'})

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
                'status':'success',
                'response': summary
            })
        else:
            return Response({'status':'fail'})


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
            }, status=status.HTTP_400_BAD_REQUEST)

        # get the flac file
        flac_h = default_storage.open(flac_file)

        google_api.upload_blob(google_api.BUCKET_NAME,
                               str(flac_h), google_api.DST_BLOB_NAME)

        time.sleep(5)
        transcription = google_api.transcribe_gcs(google_api.GCS_URI)

        parsed_response = google_api.parse_response(transcription)
        summaries = summarize.summarize_text(' '.join(parsed_response))

        # generate questions based on summaries

        

        # cleanup
        default_storage.delete(video_file.name)
        default_storage.delete(str(flac_h))

        return Response({
            'status': 'success',
        }, status=status.HTTP_200_OK)


class UploadFlac(APIView):
    """
    Add a summary using a flac.
    """
    parser_classes = [FileUploadParser]

    def post(self, request, format=None):
        up_file1 = request.data['file']

        # up_file2 = request.data['file']
        # save to default storage

        default_storage.delete(up_file1.name)
        file_name = default_storage.save(up_file1.name, up_file1)
        file_h = default_storage.open(file_name)

        google_api.upload_blob(google_api.BUCKET_NAME,
                               str(file_h), google_api.DST_BLOB_NAME)

        time.sleep(5)

        transcription = google_api.transcribe_gcs(google_api.GCS_URI)

        parsed_json = google_api.parse_response(transcription)
        print(parsed_json)

        # cleanup
        default_storage.delete(up_file1.name)

        return Response({
            'status': 'success',
        }, status=status.HTTP_200_OK)
