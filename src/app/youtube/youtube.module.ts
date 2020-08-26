import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { youtubeReducer } from '../redux/reducers/youtube.reducer';
import { Feature } from '../redux/state.models';
import { SharedModule } from '../shared/shared.module';
import { YOUTUBE_COMPONENTS } from './components/index';
import { YOUTUBE_PAGES } from './pages/index';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { YoutubeComponent } from './youtube.component';

@NgModule({
  declarations: [...YOUTUBE_COMPONENTS, ...YOUTUBE_PAGES, YoutubeComponent],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    SharedModule,
    StoreModule.forFeature(Feature.Youtube, youtubeReducer),
  ],
})
export class YoutubeModule {}
