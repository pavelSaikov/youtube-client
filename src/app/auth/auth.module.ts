import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AUTH_COMPONENTS } from './components/index';

@NgModule({
  declarations: [AuthComponent, ...AUTH_COMPONENTS],
  imports: [CommonModule, AuthRoutingModule],
  exports: [AuthComponent],
})
export class AuthModule {}
