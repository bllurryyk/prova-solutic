from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Cliente
from .serializers import ClienteSerializer

import pandas as pd
from django.http import HttpResponse

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

@api_view(['GET'])
def get_clientes_excel(request):
    nome = request.query_params.get('nome', None)
    
    if nome:
        clientes = Cliente.objects.filter(nome__icontains=nome)
    else:
        clientes = Cliente.objects.all()

    serializer = ClienteSerializer(clientes, many=True)
    
    df = pd.DataFrame(serializer.data)
    
    response = HttpResponse(content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    response['Content-Disposition'] = 'attachment; filename=clientes.xlsx'
    
    with pd.ExcelWriter(response, engine='openpyxl') as writer:
        df.to_excel(writer, index=False, sheet_name='Clientes')
    
    return response