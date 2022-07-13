from django.db import models
from mongoengine import *


# Create your models here.

class Item(Document):
    item_id = IntField(required=True, primary_key=True)
    restaurant_id = IntField(required=True)
    name = StringField(max_length=50, required=True)
    description = StringField(max_length=50, required=True)
    image = StringField(max_length=50, required=True)
    category = StringField(max_length=50, required=True)
    availability = BooleanField(default=True)
    availability_times = ListField(StringField(max_length=50))

    meta={
        "indexes": ["restaurant_id"]
    }




