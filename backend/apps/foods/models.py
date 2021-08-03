from django.db import models
from cloudinary.models import CloudinaryField


class Food(models.Model):
    class Meta(object):
        db_table = 'Food'

    ids = models.CharField(
        'ID', blank = False, null = False, max_length=11, db_index = True
    )
    name = models.CharField(
        'Name', blank=False, null=False, max_length=30, db_index=True
    )
    price = models.CharField(
        'Price', blank=False, null=False, max_length=4, db_index=True
    )
    status = models.CharField(
        'Status', blank=False, null = False,max_length = 15, db_index=True
    )
    image = CloudinaryField(
        'image', blank=True, null=True
    )
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )
    category = models.CharField(
        'Category', blank=False,null=False,max_length=150, db_index = True
    )

# class Review(models.Model):
#     class Meta(object):
#         db_table = 'Reviews'

#     name = models.CharField(
#         'Name', blank=False, null=False, max_length=30, db_index=True
#     )
#     id = models.CharField(
#         'ID', blank = False, null = False, max_length=11, db_index = True
#     )
#     item_id = models.CharField(
#         'ID', blank = False, null = False, max_length=11, db_index = True
#     )
#     like_count = models.CharField(
#         'Like Count', blank=False, null=False, max_length=30, db_index=True, default = 0
#     )
#     review_body = models.CharField(
#         'Review Body', blank=False, null=False, max_length=4, db_index=True
#     )
#     created_at = models.DateTimeField(
#         'Created Datetime', blank=True, auto_now_add=True
#     )
#     updated_at = models.DateTimeField(
#         'Updated Datetime', blank=True, auto_now=True
#     )
    
