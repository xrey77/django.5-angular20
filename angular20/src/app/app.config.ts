import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    // {provide: LocationStrategy, useClass: HashLocationStrategy},
    provideHttpClient(withFetch()),
    provideBrowserGlobalErrorListeners(),
    NgbModule,
    NgbModalConfig, NgbModal,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(withEventReplay())
  ]
};
