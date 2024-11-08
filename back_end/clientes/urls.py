from django.urls import path
from . import views

urlpatterns = [
    path('clientes/post', views.post_cliente, name='registrar_cliente'),
    path('clientes/get', views.get_clientes, name='recuperar_clientes')
]