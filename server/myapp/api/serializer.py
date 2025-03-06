from rest_framework import serializers
from .models import StockMarket

class StockMarketSerializer(serializers.ModelSerializer):
    class Meta:
        model = StockMarket
        fields = '__all__'