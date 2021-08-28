from django.db import models

class Overview(models.Model):
    summary_id = models.IntegerField(unique=True)

class Summary(models.Model):
    name = models.CharField(max_length=200)
    duration = models.IntegerField(default=0)
    video_summary_link = models.CharField(max_length=2100)
    related_tags = models.TextField()
    questions = models.TextField()
