from django.shortcuts import render

def inicia(request):
    return render(request, 'home/index.html')

