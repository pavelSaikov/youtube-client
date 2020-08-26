// tslint:disable: typedef
import { createAction, props } from '@ngrx/store';

import { IVideoInfoWithStatistics } from '../../youtube/models/search-response.models';
import { IUserVideoInfoWithId } from '../../youtube/models/user-video.models';
import { IVideoDescription } from '../../youtube/models/video-description.models';
import { IActionPayload } from '../state.models';

export const setVideoForDetailedDescription = createAction(
  '[Youtube] Set Video For Detailed Description',
  props<IActionPayload<IVideoDescription>>(),
);
export const setSearchResults = createAction(
  '[Youtube] Set Search Results',
  props<IActionPayload<IVideoInfoWithStatistics[]>>(),
);
export const addUserVideo = createAction(
  '[Youtube] Add User Video',
  props<IActionPayload<IUserVideoInfoWithId>>(),
);
