// tslint:disable: typedef
import { createReducer, on, Action } from '@ngrx/store';

import { IVideoInfo } from '../models/search-response.models';
import { setVideoForDetailedDescription } from './youtube.actions';

export interface IYoutubeState {
  videoForDetailedDescription: IVideoInfo;
}

const INITIAL_YOUTUBE_STATE: IYoutubeState = {
  videoForDetailedDescription: null,
};

const reducer = createReducer(
  INITIAL_YOUTUBE_STATE,
  on(setVideoForDetailedDescription, (state, { payload: videoInfo }) => ({
    ...state,
    videoForDetailedDescription: videoInfo,
  })),
);

export function youtubeReducer(state: IYoutubeState, action: Action) {
  return reducer(state, action);
}
