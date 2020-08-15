import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { Feature } from '../store/index';
import { HeaderComponent } from './components/header/header.component';
import { headerReducer } from './components/header/store/header.reducer';
import { CORE_COMPONENTS } from './components/index';

@NgModule({
  declarations: [...CORE_COMPONENTS],
  imports: [StoreModule.forFeature(Feature.Header, headerReducer)],
  exports: [HeaderComponent],
})
export class CoreModule {}
