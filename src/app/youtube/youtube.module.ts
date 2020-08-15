import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { Feature } from '../store/index';
import { YOUTUBE_COMPONENTS } from './components/index';
import { DescriptionPageComponent } from './pages/description-page/description-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { youtubeReducer } from './store/youtube.reducer';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { YoutubeComponent } from './youtube.component';

@NgModule({
  declarations: [...YOUTUBE_COMPONENTS, YoutubeComponent, DescriptionPageComponent, SearchPageComponent],
  imports: [CommonModule, YoutubeRoutingModule, StoreModule.forFeature(Feature.Youtube, youtubeReducer)],
})
export class YoutubeModule {}
