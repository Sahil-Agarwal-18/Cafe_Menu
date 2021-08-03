from rest_framework import generics
from .serializers import FoodSerializer
from django.http import JsonResponse
from .models import Food
# from .models import Reviews


class FoodList(generics.ListAPIView):
    # Get all foods, limit = 20
    queryset = Food.objects.order_by('created_at').reverse().all()[:20]
    serializer_class = FoodSerializer


class FoodAdd(generics.CreateAPIView):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer


class FoodDetail(generics.RetrieveAPIView, generics.UpdateAPIView):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer


class FoodDelete(generics.DestroyAPIView):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer
