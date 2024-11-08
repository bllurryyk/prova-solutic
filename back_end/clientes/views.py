from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Cliente
from .serializers import ClienteSerializer

@api_view(['POST'])
def post_cliente(request):
    serializer = ClienteSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'erro': False}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_clientes(request):
    clientes = Cliente.objects.all()
    serializer = ClienteSerializer(clientes, many=True)
    return Response(serializer.data)