from django.db import models

class Cliente(models.Model):
    id_cliente = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=80)
    email = models.EmailField(max_length=50, null=True, blank=True)
    telefone = models.CharField(max_length=11)
    endereco = models.CharField(max_length=44)
    numero = models.IntegerField(null=True, blank=True)
    complemento = models.CharField(max_length=44, null=True, blank=True)
    bairro = models.CharField(max_length=50)
    cidade = models.CharField(max_length=35)

    class Meta:
        db_table = 'tb_clientes'