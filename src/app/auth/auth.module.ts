import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { Feature } from '../store/index';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AUTH_COMPONENTS } from './components/index';
import { AUTH_PAGES } from './pages/index';
import { authReducer } from './store/auth.reducer';

@NgModule({
  declarations: [AuthComponent, ...AUTH_COMPONENTS, ...AUTH_PAGES],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    StoreModule.forFeature(Feature.Authorization, authReducer),
  ],
  exports: [AuthComponent],
})
export class AuthModule {}
