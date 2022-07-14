from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Restaurant
from rest_framework.decorators import api_view
from .serializers import RestaurantSerializer
from userApp.serializers import ItemSerializer
from userApp.models import Item
from rest_framework.response import Response
import json


# Create your views here.
@api_view(['GET'])
def restaurant_info(request, restaurant_id: int):
    # get details about a particular restaurant
    restaurant = Restaurant.objects.get(restaurant_id=restaurant_id)
    serializer = RestaurantSerializer(restaurant, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def list_restaurant_items(request, restaurant_id: int):
    # get all the items in a particular restaurant
    item = Item.objects(restaurant_id=restaurant_id)
    serializer = ItemSerializer(item, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def add_restaurant_items(request, restaurant_id: int):
    converted_request = json.loads(request.body)
    item = Item()
    item.item_id = converted_request['item_id']
    item.restaurant_id = converted_request['restaurant_id']
    item.name = converted_request['name']
    item.description = converted_request['description']
    item.image = converted_request['image']
    item.category = converted_request['category']
    item.availability = converted_request['availability']
    item.availability_times = converted_request['availability_times']
    item.save()
    serializer = ItemSerializer(item, many=False)
    return Response(serializer.data)

    #
    #
    # serializer = ItemSerializer(data=request.data)
    # if serializer.is_valid():
    #     serializer.save()
    # return Response(serializer.data)


@api_view(['POST'])
def update_restaurant_items(request, restaurant_id: int, item_id: int):
    item = Item.objects(item_id=item_id)
    serializer = ItemSerializer(instance=item, data=request.body)
    if serializer.is_valid():
        for obj in serializer:
            obj.save()
    return Response(serializer.data)
