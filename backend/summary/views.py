from django.shortcuts import render
from rest_framework import generics, status, permissions
from rest_framework.views import APIView
from summary.models import Overview, Summary
from summary import serializers

class GetOverview(APIView):
    """
    View all summaries
    """

    def get(self, request, format=None):
        pass


