from django.shortcuts import render
from django.http import HttpResponse, JsonResponse


# Create your views here.
def home(request):
    return HttpResponse("This is the User's Homepage")

def apiOverview(request):
    return JsonResponse("API BASE POINT", safe=False)

