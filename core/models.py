from django.db import models

class Usuario(models.Model):
    nome = models.CharField('Nome', max_length=100)
    email = models.CharField('Email', max_length=150)
    senha = models.IntegerField('Senha')

    def __str__(self):
        return self.nome