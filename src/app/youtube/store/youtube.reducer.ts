// tslint:disable: typedef
import { createReducer, on, Action } from '@ngrx/store';

import { IVideoInfo } from '../models/search-response.models';
import { setSearchResults, setVideoForDetailedDescription } from './youtube.actions';

export interface IYoutubeState {
  videoForDetailedDescription: IVideoInfo;
  searchResults: IVideoInfo[];
}

const INITIAL_YOUTUBE_STATE: IYoutubeState = {
  videoForDetailedDescription: null,
  searchResults: [],
};

const reducer = createReducer(
  INITIAL_YOUTUBE_STATE,
  on(setVideoForDetailedDescription, (state, { payload: videoInfo }) => ({
    ...state,
    videoForDetailedDescription: videoInfo,
  })),
  on(setSearchResults, (state, { payload }) => ({ ...state, searchResults: payload })),
);

export function youtubeReducer(state: IYoutubeState, action: Action) {
  return reducer(state, action);
}
