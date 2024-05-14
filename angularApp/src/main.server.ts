import { bootstrapApplication } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; // Ruta ajustada

if (process.env['NODE_ENV'] === 'production') { // Cambio a notación de corchetes
  enableProdMode();
}

const bootstrap = () => bootstrapApplication(AppComponent, appConfig);

export function renderModule() {
  return bootstrap();
}

export default bootstrap;
