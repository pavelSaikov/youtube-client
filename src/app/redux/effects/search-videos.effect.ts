import { setSearchResults } from './../actions/youtube.actions';
// tslint:disable: typedef
import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';

import { IVideoInfoWithStatistics } from '../../youtube/models/search-response.models';
import { YoutubeService } from '../../youtube/services/youtube-service/youtube.service';
import { searchVideos } from '../actions/header.actions';

@Injectable()
export class SearchVideosEffect {
  public searchVideos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchVideos),
      switchMap(action =>
        this.youtubeService
          .searchVideos(action.payload)
          .pipe(map((videosInfo: IVideoInfoWithStatistics[]) => setSearchResults({ payload: videosInfo }))),
      ),
    ),
  );

  constructor(private actions$: Actions, private store: Store, private youtubeService: YoutubeService) {}
}
