from django.urls import path
from . import views

urlpatterns = [
    path('delete-restaurant/', views.delete_restaurant, name='delete-restaurant'),
    path('add-restaurant/', views.add_restaurant, name='add-restaurant'),
]
