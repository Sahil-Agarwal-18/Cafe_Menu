from django.urls import path
from . import views

urlpatterns = [
    path('', views.FoodList.as_view(), name='food_list'),
    path('add/', views.FoodAdd.as_view(), name='food_add'),
]
