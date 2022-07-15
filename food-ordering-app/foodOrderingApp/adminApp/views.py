from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from restaurantApp.models import Restaurant
from userApp.models import Item
from rest_framework.decorators import api_view
from restaurantApp.serializers import RestaurantSerializer
from rest_framework.response import Response
import json


# Create your views here.


@api_view(['DELETE'])
def delete_restaurant(request, restaurant_id):
    restaurant = Restaurant.objects.get(restaurant_id=restaurant_id)
    serializer = RestaurantSerializer(restaurant, many=False)
    restaurant.delete()
    items = Item.objects(restaurant_id=restaurant_id)
    for item in items:
        item.delete()

    return Response(serializer.data)


@api_view(['POST'])
def add_restaurant(request):
    converted_request = json.loads(request.body)
    restaurant = Restaurant()
    restaurant.restaurant_id = converted_request['restaurant_id']
    restaurant.name = converted_request['name']
    restaurant.logo = converted_request['logo']
    restaurant.address = converted_request['address']
    restaurant.cuisine = converted_request['cuisine']
    restaurant.save()
    serializer = RestaurantSerializer(restaurant, many=False)
    return Response(serializer.data)
