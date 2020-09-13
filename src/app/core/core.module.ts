import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SearchVideosEffect } from '../redux/effects/search-videos.effect';
import { headerReducer } from '../redux/reducers/header.reducer';
import { Feature } from '../redux/state.models';
import { HeaderComponent } from './components/header/header.component';
import { CORE_COMPONENTS } from './components/index';

@NgModule({
  declarations: [...CORE_COMPONENTS],
  imports: [
    CommonModule,
    StoreModule.forFeature(Feature.Header, headerReducer),
    FormsModule,
    EffectsModule.forFeature([SearchVideosEffect]),
  ],
  exports: [HeaderComponent],
})
export class CoreModule {}
