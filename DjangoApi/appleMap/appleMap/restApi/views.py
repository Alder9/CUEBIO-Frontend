
from django.contrib.auth.models import User
from rest_framework import viewsets
from .serializers import AppleSerializer, AppleMiniSerializer
from .models import Apple
from rest_framework.response import Response


class AppleViewSet(viewsets.ModelViewSet):
    queryset = Apple.objects.all()
    serializer_class = AppleSerializer

    def list(self, request, *args, **kwargs):
        apples= Apple.objects.all()
        serializer = AppleSerializer(apples, many=True)
        return Response(serializer.data)
