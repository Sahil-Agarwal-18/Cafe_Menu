from .models import Food
from rest_framework import serializers


class FoodSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(allow_null=True)

    class Meta:
        model = Food
        fields = '__all__'
