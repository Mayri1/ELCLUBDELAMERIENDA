import { Routes } from '@angular/router';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { LoginFormComponent } from './components/login/login.component';
import { TiendaComponent } from './components/tienda/tienda.component';

export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'register', component: RegisterFormComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'store', component: TiendaComponent},
  {path: 'faq', component: QuienesSomosComponent}
 ];
