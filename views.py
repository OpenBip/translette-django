from django.http import HttpResponse
import datetime

def hello(request):
    return HttpResponse("Hello world")
  
def time(request):
    return HttpResponse("<html><head><title>Hello!</title></head><body>It is now %s.</body></html>"
    % datetime.datetime.now())