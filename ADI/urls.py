from django.conf.urls import url
from django.contrib.admin import *
from django.contrib.auth import *
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views

from app_adi.views import *
from django.conf.urls import url
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$',inicia),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
