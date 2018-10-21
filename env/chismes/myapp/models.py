from django.db import models

# Create your models here.

# Chisme model
class Chisme(models.Model):
    title = models.CharField(max_length=50)
    content = models.CharField(max_length=300)
    date = models.DateTimeField(auto_now_add=True)