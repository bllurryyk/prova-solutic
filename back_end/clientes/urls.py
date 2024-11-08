from django.urls import path
from . import views

urlpatterns = [
    path('clientes/post', views.post_cliente, name='registrar_cliente'),
    path('clientes/get', views.get_clientes, name='recuperar_clientes'),
    path('clientes/excel', views.get_clientes_excel, name='gerar_excel_clientes')
]