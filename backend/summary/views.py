from django.shortcuts import render
from django.core.files.storage import default_storage
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import FileUploadParser, JSONParser
from summary.models import Overview, Summary
from summary.serializers import OverviewSerializer, SummarySerializer
from summary import google_api


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


class AddSummary(APIView):
    """
    Add a summary using a video.
    """
    parser_classes = [FileUploadParser]

    def post(self, request, format=None):
        video_file = request.FILES['file']

        if not video_file:
            return Response({
                'status': 'fail',
            }, status=status.HTTP_400_BAD_REQUEST)

        return Response({
            'status': 'success',
        }, status=status.HTTP_200_OK)


class UploadFlac(APIView):
    """
    Add a summary using a flac.
    """
    parser_classes = [FileUploadParser]

    def post(self, request, format=None):
        up_file1 = request.FILES['file']

        # up_file2 = request.data['file']
        # save to default storage

        default_storage.delete(up_file1.name)
        file_name = default_storage.save(up_file1.name, up_file1)
        file = default_storage.open(file_name)
        google_api.upload_blob(google_api.BUCKET_NAME,
                               str(file), google_api.DST_BLOB_NAME)

        transcription = google_api.transcribe_gcs(google_api.GCS_URI)
        
        print(google_api.parse_response(transcription))
        
        # cleanup
        default_storage.delete(up_file1.name)

        return Response({
            'status': 'success',
        }, status=status.HTTP_200_OK)
