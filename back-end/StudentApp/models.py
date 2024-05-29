from django.db import models
# from django.utils import timezone
class Student(models.Model):
    name = models.CharField(max_length = 255)
    address = models.CharField(max_length = 255)
    fee = models.IntegerField()
    # date_posted = models.DateTimeField(defualt=timezone.now)
    # date_posted = models.DateTimeField(default=timezone.now,blank=True, null=True)