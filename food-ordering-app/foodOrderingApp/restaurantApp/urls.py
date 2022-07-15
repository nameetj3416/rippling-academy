from django.urls import path
from . import views

urlpatterns = [
    path('', views.restaurant_info, name='home'),
    path('add-item/', views.add_restaurant_items, name='add-item'),
    path('update-item/<int:item_id>', views.update_restaurant_items, name='update-item'),
    path('items/', views.list_restaurant_items, name='items'),
    path('delete-item/<int:item_id>', views.delete_restaurant_item, name='delete-restaurant-item')

]
