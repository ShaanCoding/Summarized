from django.db import models

class Overview(models.Model):
    summary_id = models.IntegerField(unique=True)

class Summary(models.Model):

    # file name
    name = models.CharField(max_length=200)

    # json field of entire blob
    blob = models.TextField(default='')

    # json tags
    related_tags = models.TextField(default='')

    # json questions
    questions = models.TextField(default='')

    # json summaries
    summaries = models.TextField(default='')

