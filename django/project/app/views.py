from django.shortcuts import render,redirect
from django.urls import reverse
from urllib.parse import urlencode

# Create your views here.

def home(request):
    url=reverse('redirect3')
    data=urlencode({'name':'ajay','age':24})
    return redirect(f'{url}?{data}')

def redirect3(request):
    print("hello")
    print(request.GET)
    print(request.POST)
    print(request.FILES)
    print(request.COOKIES)
    print(request.method)
    n=request.GET.get('name')
    a=request.GET['age']
    print(n,a,sep=',')


