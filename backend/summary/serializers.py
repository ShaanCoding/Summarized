from requests.api import request
from rest_framework import serializers
from summary import models


class OverviewSerializer(serializers.ModelSerializer):
    """
    Serializer for Overview
    """
    class Meta:
        model = models.Overview
        fields = ['summary_id']


class SummarySerializer(serializers.ModelSerializer):
    """
    Serializer for the Summary model
    """
    class Meta:
        model = models.Summary
        fields = ['name', 'blob', 'related_tags',
                  'questions', 'summaries']


class BlobSerializer(serializers.Serializer):
    """
    Serializer for a blob of text
    """
    blob = serializers.CharField(required=True)

class GetSummarySerializer(serializers.Serializer):
    id = serializers.IntegerField(required=True)