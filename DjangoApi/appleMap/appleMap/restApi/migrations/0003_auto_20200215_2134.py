# Generated by Django 3.0 on 2020-02-15 21:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restApi', '0002_auto_20200215_1859'),
    ]

    operations = [
        migrations.AlterField(
            model_name='apple',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]