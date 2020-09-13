// tslint:disable: typedef
import { createReducer, on, Action } from '@ngrx/store';

import { IVideoInfoWithStatistics } from '../../youtube/models/search-response.models';
import { IUserVideoInfo } from '../../youtube/models/user-video.models';
import { IVideoDescription } from '../../youtube/models/video-description.models';
import { addUserVideo, setSearchResults, setVideoForDetailedDescription } from '../actions/youtube.actions';

export interface IYoutubeState {
  videoForDetailedDescription: IVideoDescription;
  searchResults: IVideoInfoWithStatistics[];
  userVideos: IUserVideoInfo[];
}

const INITIAL_YOUTUBE_STATE: IYoutubeState = {
  videoForDetailedDescription: null,
  searchResults: [],
  userVideos: [],
};

const reducer = createReducer(
  INITIAL_YOUTUBE_STATE,
  on(setVideoForDetailedDescription, (state, { payload: videoInfo }) => ({
    ...state,
    videoForDetailedDescription: videoInfo,
  })),
  on(setSearchResults, (state, { payload }) => ({ ...state, searchResults: payload })),
  on(addUserVideo, (state, { payload }) => ({ ...state, userVideos: [...state.userVideos, payload] })),
);

export function youtubeReducer(state: IYoutubeState, action: Action) {
  return reducer(state, action);
}
