from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Restaurant
from rest_framework.decorators import api_view
from .serializers import RestaurantSerializer
from rest_framework.response import Response


# Create your views here.

@api_view(['GET'])
def home(request, restaurant_id: int):
    # get all items of a restaurant with a given restaurant_id
    restaurant = Restaurant.objects.get()
    serializer = RestaurantSerializer(restaurant, many=False)
    return Response(serializer.data)
