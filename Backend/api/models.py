from django.db import models

# Create your models here.
class AdminUser(models.Model):
    fullName=models.CharField( max_length=50)
    email= models.EmailField( max_length=254)
    password=models.CharField( max_length=50)

    def __str__(self):
        return AdminUser.fullName
