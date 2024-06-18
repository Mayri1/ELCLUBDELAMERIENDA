# GYM/models.py
from django.db import models
from django.contrib.auth.models import User


class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=8, decimal_places=2)
    imagen = models.ImageField(upload_to='productos/')

    def __str__(self):
        return self.nombre

class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

