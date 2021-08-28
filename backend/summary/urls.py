from django.urls import path
from django.urls.resolvers import URLPattern
from summary import views

urlpatterns = [
    path('get-overview', views.GetOverview.as_view())
]