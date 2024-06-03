# GYM/models.py
from django.db import models
from django.contrib.auth.models import User

class Clase(models.Model):
    nombre = models.CharField(max_length=30)
    descripcion = models.TextField()
    horario = models.DateTimeField()
    capacidad_maxima = models.IntegerField()

    def __str__(self):
        return self.nombre

# Reserva Model
class Reserva(models.Model):
    ESTADO_CHOICES = [
        ('pendiente', 'Pendiente'),
        ('confirmada', 'Confirmada'),
        ('cancelada', 'Cancelada'),
    ]
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    clase = models.ForeignKey(Clase, on_delete=models.CASCADE)
    fecha = models.DateTimeField(auto_now_add=True)
    estado = models.CharField(max_length=10, choices=ESTADO_CHOICES, default='pendiente')

# Pago Model
class Pago(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    monto = models.DecimalField(max_digits=10, decimal_places=2)
    fecha = models.DateTimeField(auto_now_add=True)
    metodo_pago = models.CharField(max_length=35)

# Recurso Model
class Recurso(models.Model):
    titulo = models.CharField(max_length=50)
    descripcion = models.TextField()
    url = models.CharField(max_length=100)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)

class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name

