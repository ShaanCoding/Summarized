from django.shortcuts import render
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import FileUploadParser
from summary.models import Overview, Summary
from summary.serializers import OverviewSerializer, SummarySerializer


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
        pass


class UploadFlac(APIView):
    """
    Add a summary using a flac.
    """
    parser_classes = [FileUploadParser]
    
    def post(self, request, format=None):
        up_file1 = request.FILES['file']
        up_file2 = request.data['file']

        print(up_file1)
        print(up_file2)
        
        return Response({
            'status': 'success',
        }, status=status.HTTP_200_OK)
