
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from .restApi import views


router = routers.DefaultRouter()
# router = 'https://kl4auc0304.execute-api.us-east-2.amazonaws.com/beta/query1'
router.register(r'apples', views.AppleViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', views.home, name='home')
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))

]

