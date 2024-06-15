from django.contrib import admin
from .models import Item, Producto

# Registra cada uno de tus modelos aquí
admin.site.register(Item)

admin.site.register(Producto)
