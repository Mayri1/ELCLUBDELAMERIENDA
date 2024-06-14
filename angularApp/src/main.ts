import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RegisterFormComponent } from './app/components/register-form/register-form.component';
import { HttpClientModule } from '@angular/common/http';

enableProdMode();
bootstrapApplication(RegisterFormComponent, {
  providers: [
    importProvidersFrom(HttpClientModule)
  ]
}).catch(err => console.error(err));
