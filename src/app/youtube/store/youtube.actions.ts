// tslint:disable: typedef
import { createAction, props } from '@ngrx/store';

import { IActionPayload } from '../../store/index';
import { IVideoInfo } from '../models/search-response.models';

export const setVideoForDetailedDescription = createAction(
  '[Youtube] Set Video For Detailed Description',
  props<IActionPayload<IVideoInfo>>(),
);
export const setSearchResults = createAction(
  '[Youtube] Set Search Results',
  props<IActionPayload<IVideoInfo[]>>(),
);
