from django.shortcuts import render

from .models import Usuario

def index (request):
    return render(request, 'index.html')