from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from .serializers import ItemSerializer
from .models import Item
from rest_framework.response import Response


# Create your views here.
@api_view(['GET'])
def list_all_items(request):
    # get details about a particular restaurant
    items = Item.objects.all()
    serializer = ItemSerializer(items, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def filter_items(request, filter_params):
    pass

