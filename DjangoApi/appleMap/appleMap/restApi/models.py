from django.db import models

class Apple(models.Model):
    id = models.AutoField(primary_key=True)
    genetics = models.CharField(max_length=32)
    species = models.CharField(max_length=32)
    finalCultivar = models.CharField(max_length=32)
    synonym = models.CharField(max_length=32)
    isConfirmed = models.CharField(max_length=32)
    use = models.CharField(max_length=32)
    country = models.CharField(max_length=32)
    genotypes = models.IntegerField()
    tree_tag_id = models.IntegerField()
    propertyOwner = models.CharField(max_length=32)
    treeSiteLocation = models.CharField(max_length=32)
    treeLatitude = models.FloatField()
    treeLongitude = models.FloatField()
    treeHeight = models.IntegerField()
    treeDripLine = models.IntegerField()
    trunkDiameter = models.FloatField()
    fireBlight = models.IntegerField()
    fruitHanging = models.CharField(max_length=32)

   