import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { NgxSvgModule } from 'ngx-svg';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),
    provideHttpClient() , // Provide HTTP client for making API calls
    importProvidersFrom(NgxSvgModule)// Initialize NgxSvgModule
  ]
})
  .catch(err => console.error(err));

/*
ootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));*/
// Define your routes here
