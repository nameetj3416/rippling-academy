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
    if converted_request['restaurant_id'] != restaurant_id:
        return Response({
            "message": "You can't add item for this restaurant."
        })
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


@api_view(['POST'])
def update_restaurant_items(request, restaurant_id: int, item_id: int):
    item = Item.objects.get(item_id=item_id)
    converted_request = json.loads(request.body)
    if item.restaurant_id != restaurant_id:
        return Response({
            "message": "You can't update this particular item."
        })
    if converted_request.get('name') is not None:
        item.name = converted_request['name']

    if converted_request.get('description') is not None:
        item.description = converted_request['description']

    if converted_request.get('image') is not None:
        item.image = converted_request['image']

    if converted_request.get('category') is not None:
        item.category = converted_request['category']

    if converted_request.get('availability') is not None:
        item.availability = converted_request['availability']

    if converted_request.get('availability_times') is not None:
        item.availability_times = converted_request['availability_times']

    item.save()
    serializer = ItemSerializer(item, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
def delete_restaurant_item(request, restaurant_id, item_id):
    item = Item.objects.get(item_id=item_id)
    serializer = ItemSerializer(item, many=False)
    item.delete()
    return Response(serializer.data)

