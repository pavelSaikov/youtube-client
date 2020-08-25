import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { Feature } from '../store/index';
import { HeaderComponent } from './components/header/header.component';
import { HEADER_EFFECTS } from './components/header/store/effects/index';
import { headerReducer } from './components/header/store/header.reducer';
import { CORE_COMPONENTS } from './components/index';

@NgModule({
  declarations: [...CORE_COMPONENTS],
  imports: [
    CommonModule,
    StoreModule.forFeature(Feature.Header, headerReducer),
    FormsModule,
    EffectsModule.forFeature(HEADER_EFFECTS),
  ],
  exports: [HeaderComponent],
})
export class CoreModule {}
