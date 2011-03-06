# Create your views here.
from django.http import HttpResponse, HttpResponseRedirect
from chat.models import Chat
from django import forms
from django import template
from django.core import serializers

def list_all_chats(request):
    chats = Chat.objects.all()

    if request.method != 'GET':
        # TODO raise exception
        return HttpResponse("Error")
    
    format = request.GET.get('format', 'html')
    if format == 'html':
        list_template = template.loader.get_template('chat_list.html')
        return HttpResponse(list_template.render(template.Context({ 'chats': chats })))
    elif format == 'json':
        return HttpResponse(serializers.serialize('json', chats, fields=('title', 'description')))
    elif format == 'xml':
        return HttpResponse(serializers.serialize('xml', chats, fields=('title', 'description')))


class ChatForm(forms.Form):
    title = forms.CharField(40, 1)
    description = forms.CharField(300, 1,
                                  widget=forms.Textarea(attrs = {
                                                                'rows': '3',
                                                                'cols': '20'
                                                                 }))

def edit_chat(request):
    if request.method == 'POST':
        chat_form = ChatForm(request.POST)
        
        if chat_form.is_valid():
            data = chat_form.cleaned_data
            
            new_chat = Chat()
            new_chat.title = data.get('title')
            new_chat.description = data.get('description')
            
            new_chat.save()
            
            return HttpResponseRedirect('/chats/')

    elif request.method == 'GET':
        chat_template = template.loader.get_template('chat_edit.html')
        response_html = chat_template.render(template.RequestContext(request, {'chat_form':ChatForm()}))
        return HttpResponse(response_html)