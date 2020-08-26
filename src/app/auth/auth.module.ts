import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { authReducer } from '../redux/reducers/auth.reducer';
import { Feature } from '../redux/state.models';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AUTH_COMPONENTS } from './components/index';
import { AUTH_PAGES } from './pages/index';

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
