from django.conf.urls.defaults import patterns
from django.conf import settings
from views import welcome
from chat.views import list_all_chats, edit_chat

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    ('^$', welcome),
    ('^welcome/$', welcome),
    (r'^static-content/(?P<path>.*)$', 'django.views.static.serve',
        {'document_root': settings.STATIC_DOC_ROOT }),
    ('^chats/$', list_all_chats),
    ('^chat/new/$', edit_chat)

    # Example:
    # (r'^translette/', include('translette.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # (r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # (r'^admin/', include(admin.site.urls)),
)
