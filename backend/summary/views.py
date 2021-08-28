from django.shortcuts import render
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
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
    Add a summary
    """

    def post(self, request, format=None):
        pass