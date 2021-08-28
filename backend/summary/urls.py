from django.urls import path
from django.urls.resolvers import URLPattern
from summary import views

urlpatterns = [
    path('overview/', views.GetOverview.as_view()),
    path('upload-video/', views.UploadVideo.as_view()),
    path('summarize/', views.SummarizeText.as_view()),
    path('question/', views.GenerateQuestion.as_view()),
    path('keywords/', views.GenerateKeywords.as_view()),
    path('summary/', views.GetSummary.as_view()),



    # Paths to-add:
    # path('add-summary', views.GetOverview.as_view())
]
