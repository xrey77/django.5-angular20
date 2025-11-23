from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from home.views import AngularAppView # Angular App view
from home import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    # path('', include('home.urls')),
    path('api/', include('register.urls')), #signup
    path('api/', include('login.urls')),    # signin
    path('api/', include('users.urls')),   
    path('api/', include('mfa.urls')),
    path('api/', include('products.urls')),    
    path('api/', include('uploaduserpic.urls')),   
    re_path(r'^(?P<route>.*)$', AngularAppView.as_view(), name='AngularAppView'),                             
]


# In browser: http://127.0.0.1:8000/media/users/001.jpeg
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)    
else:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    
