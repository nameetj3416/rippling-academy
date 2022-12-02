from django.urls import path
from . import views

urlpatterns = [
    path('items/', views.list_all_items, name='home'),
    path('items/filter', views.filter_items, name='filtered_items'),
    path('restaurants/', views.list_all_restaurants, name='all_restaurants')

]
