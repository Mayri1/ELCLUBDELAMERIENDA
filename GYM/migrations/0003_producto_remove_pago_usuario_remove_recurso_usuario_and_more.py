# Generated by Django 4.2 on 2024-06-14 19:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('GYM', '0002_clase_reserva_recurso_pago'),
    ]

    operations = [
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('descripcion', models.TextField()),
                ('precio', models.DecimalField(decimal_places=2, max_digits=8)),
                ('imagen', models.ImageField(upload_to='productos/')),
            ],
        ),
        migrations.RemoveField(
            model_name='pago',
            name='usuario',
        ),
        migrations.RemoveField(
            model_name='recurso',
            name='usuario',
        ),
        migrations.RemoveField(
            model_name='reserva',
            name='clase',
        ),
        migrations.RemoveField(
            model_name='reserva',
            name='usuario',
        ),
        migrations.DeleteModel(
            name='Clase',
        ),
        migrations.DeleteModel(
            name='Pago',
        ),
        migrations.DeleteModel(
            name='Recurso',
        ),
        migrations.DeleteModel(
            name='Reserva',
        ),
    ]
