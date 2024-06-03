from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ItemViewSet, ClaseViewSet, ReservaViewSet, PagoViewSet, RecursoViewSet, RegisterView, LoginView

router = DefaultRouter()
router.register(r'items', ItemViewSet)
router.register(r'clases', ClaseViewSet)
router.register(r'reservas', ReservaViewSet)
router.register(r'pagos', PagoViewSet)
router.register(r'recursos', RecursoViewSet)

urlpatterns = [
    path('', include(router.urls)),
     path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
]
