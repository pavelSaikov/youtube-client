import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutes } from './auth-routing.models';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';

const routes: Routes = [
  { path: AuthRoutes.Login, component: LoginPageComponent },
  { path: AuthRoutes.Registration, component: RegistrationPageComponent },
  { path: '**', redirectTo: AuthRoutes.Login, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
