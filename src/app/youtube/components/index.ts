// tslint:disable: typedef
import { SearchItemComponent } from './search-list/components/search-item/search-item.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SHARED_COMPONENTS } from './shared/index';
import { VideoDescriptionComponent } from './video-description/video-description.component';
import { VideoFormComponent } from './video-form/video-form.component';

export const YOUTUBE_COMPONENTS = [
  SearchListComponent,
  SearchItemComponent,
  VideoDescriptionComponent,
  VideoFormComponent,
  ...SHARED_COMPONENTS,
];
