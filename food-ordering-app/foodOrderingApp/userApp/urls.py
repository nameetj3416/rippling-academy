from django.urls import path
from . import views

urlpatterns = [
    path('items/', views.list_all_items, name='home'),
]
