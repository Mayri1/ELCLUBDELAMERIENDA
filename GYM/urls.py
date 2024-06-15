# myapp/urls.py
from django.urls import path
from .views import RegisterView, LoginView, ProductoListCreateAPIView, ProductoRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
     path('productos/', ProductoListCreateAPIView.as_view(), name='producto-list-create'),
    path('productos/<int:pk>/', ProductoRetrieveUpdateDestroyAPIView.as_view(), name='producto-detail'),
]