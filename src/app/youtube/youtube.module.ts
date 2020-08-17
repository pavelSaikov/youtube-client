import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { Feature } from '../store/index';
import { YOUTUBE_COMPONENTS } from './components/index';
import { YOUTUBE_PAGES } from './pages/index';
import { youtubeReducer } from './store/youtube.reducer';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { YoutubeComponent } from './youtube.component';

@NgModule({
  declarations: [...YOUTUBE_COMPONENTS, ...YOUTUBE_PAGES, YoutubeComponent],
  imports: [CommonModule, YoutubeRoutingModule, StoreModule.forFeature(Feature.Youtube, youtubeReducer)],
})
export class YoutubeModule {}
