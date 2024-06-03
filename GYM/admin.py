from django.contrib import admin
from .models import Clase, Reserva, Pago, Recurso, Item

# Registra cada uno de tus modelos aquí
admin.site.register(Clase)
admin.site.register(Reserva)
admin.site.register(Pago)
admin.site.register(Recurso)
admin.site.register(Item)
