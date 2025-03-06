from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import StockMarket 
from .serializer import StockMarketSerializer

# Create your views here.
@api_view(['GET'])
def stock_market_list(request):
    stock_market = StockMarket.objects.all()
    serializer = StockMarketSerializer(stock_market, many=True).data
    return Response(serializer)


@api_view(['POST'])
def stock_market_create(request):
    data = request.data
    print("Received Data:", request.data)
    serializer = StockMarketSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    print("Validation Errors:", serializer.errors)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
