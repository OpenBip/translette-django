from django.db import models

# Create your models here.

class Chat(models.Model):
    title = models.CharField(max_length=40)
    description = models.CharField(max_length=300)
    passphrase = models.CharField(max_length=20)

class Account(models.Model):
    username = models.CharField(max_length=40)
    password = models.CharField(max_length=20)
    language = models.CharField(max_length=5)

class ChatParticipant(models.Model):
    chat = models.ForeignKey(Chat)
    account = models.ForeignKey(Account)