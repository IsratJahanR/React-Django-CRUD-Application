# api/urls.py
from django.urls import path
from . import views 

urlpatterns = [
    path('stock-market/', views.stock_market_list, name='stock_market_list'),
    path('stock-market/create/', views.stock_market_create, name='stock_market_create'),
]
