from django.contrib import admin
from django.urls import path, re_path
from . import views
from .views import AngularAppView

urlpatterns = [
    path('', AngularAppView.as_view()),
    # re_path(r'^.*', views.home),     
    # re_path(r'^.*$', views.home, name='home'),    
]

# Catch-all pattern for Angular app: must be the LAST pattern

