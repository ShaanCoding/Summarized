from django.db import models

class Overview(models.Model):
    summary_id = models.IntegerField(unique=True)

class Summary(models.Model):
    # file name
    name = models.CharField(max_length=200)

    # json field of entire blob
    blob = models.TextField()
    related_tags = models.TextField()
    questions = models.TextField()
    summaries = models.TextField()

