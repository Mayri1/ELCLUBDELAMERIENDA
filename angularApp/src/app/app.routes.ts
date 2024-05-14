import { Routes } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'register', component: RegisterFormComponent}
 ];
