from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Apple


class AppleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Apple
        fields = ('id', 'genetics', 'finalCultivar', 'synonym', 'isConfirmed',
        		  'use', 'country', 'genotypes', 'tree_tag_id', 'propertyOwner',
        		  'treeSiteLocation','treeLatitude','treeLongitude','treeHeight',
        		  'treeDripLine','trunkDiameter','fireBlight','fruitHanging')


class AppleMiniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Apple
        fields = ('id', 'genetics')

   