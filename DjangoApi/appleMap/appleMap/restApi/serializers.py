from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Apple


class AppleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Apple
        fields = '__all__'


class AppleMiniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Apple
        fields = ('id', 'genetics')

   