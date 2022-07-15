from django.db import models
from mongoengine import *


# Create your models here.

class Restaurant(Document):
    restaurant_id = IntField(required=True)
    name = StringField(max_length=50, required=True)
    address = StringField(max_length=50, required=True)
    logo = StringField(max_length=50, required=True)
    cuisine = ListField(StringField(max_length=50))

