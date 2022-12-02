from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from .serializers import ItemSerializer
from .models import Item
from rest_framework.response import Response
from mongoengine import Q
from restaurantApp.models import Restaurant
from restaurantApp.serializers import RestaurantSerializer
import json


# Create your views here.
@api_view(['GET'])
def list_all_items(request):
    # get details about a particular restaurant

    items = Item.objects.all()
    serializer = ItemSerializer(items, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def list_all_restaurants(request):
    # get details about a particular restaurant

    restaurants = Restaurant.objects.all()
    serializer = RestaurantSerializer(restaurants, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def filter_items(request):
    converted_request = json.loads(request.body)
    if converted_request.get('category') is not None and converted_request.get('restaurant_id') is not None:
        items = Item.objects(Q(category=converted_request['category']) &
                             Q(restaurant_id=converted_request['restaurant_id']))
    elif converted_request.get('category') is not None:
        items = Item.objects(category=converted_request['category'])
    elif converted_request['restaurant_id'] is not None:
        items = Item.objects(restaurant_id=converted_request['restaurant_id'])
    else:
        items = Item.objects.all()

    serializer = ItemSerializer(items, many=True)
    return Response(serializer.data)
