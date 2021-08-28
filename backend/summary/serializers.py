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
        fields = ['name', 'duration', 'video_summary_link',
                  'related_tags', 'questions']
