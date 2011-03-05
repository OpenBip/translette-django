from django.http import HttpResponse
from django import template

def welcome(request):
    welcome_template = template.loader.get_template('welcome.html')
    response_html = welcome_template.render(template.Context())
    return HttpResponse(response_html)