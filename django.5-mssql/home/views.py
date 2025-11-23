import os
from django.conf import settings
from django.http import HttpResponse
from django.views.generic import View
from django.shortcuts import render
from django.views.generic import TemplateView
from django.shortcuts import render #for loading html file

class AngularAppView(TemplateView):
    def get(self, request, route=None):
        return render(request, 'browser/index.html')        
        # Determine the path of the requested static HTML file
        # if route is None or route == '':
        #     filename = 'index.html'
        # else:
        #     # Ensure we look for the specific route's index.html file
        #     filename = os.path.join(route, 'index.html')
        # # filepath = os.path.join(settings.TEMPLATES, filename)

        # # Serve the file if it exists, otherwise potentially handle as a 404 or fallback
        # if os.path.exists(filepath):
        #     with open(filepath, 'rb') as f:
        #         return HttpResponse(f.read(), content_type='text/html')
        # else:
        #     # Fallback to the main index.html for client-side routing if not pre-rendered
        #     # index_filepath = os.path.join(settings.ANGULAR_DIST_DIR, 'index.html')
        #     if os.path.exists(index_filepath):
        #        with open(index_filepath, 'rb') as f:
        #         return HttpResponse(f.read(), content_type='text/html')
        #     else:
        #         return HttpResponse("Angular build not found or route not prerendered", status=404)
