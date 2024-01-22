from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from . import forms

# Create your views here.


def main(request):
    return render(request, 'GenomeTag/main.html')
    #return HttpResponse("bruh")


def authenticate(request):
    return HttpResponse("Here you will be able to authenticate")


def annotations(request):
    return HttpResponse("Here you will be able to make see annotations")


def create(request):
    #return HttpResponse("Here you will be able to create new annotations")
    if request.method == 'POST':
        form = forms.AnnotationForm(request.POST)
    if form.is_valid():
    #     # Traitement des données du formulaire
        selected_genome = form.cleaned_data['genome']
    #     # ...
    else:
        form = forms.AnnotationForm()

    return render(request, 'GenomeTag/create_annotation_form.html', {'form': form})


def search(request):
    return render(request, 'GenomeTag/search.html')
    #return HttpResponse("Here you will be able to create new annotations")

