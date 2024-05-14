import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';  // Importa withFetch
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, HttpClientXsrfModule, HttpClientJsonpModule } from '@angular/common/http';  // Importa módulos adicionales

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),  // Añadir withFetch() para usar fetch API
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),  // Utiliza HttpClientModule
    importProvidersFrom(HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    })),
    importProvidersFrom(HttpClientJsonpModule)  // Importa HttpClientJsonpModule
  ]
};

