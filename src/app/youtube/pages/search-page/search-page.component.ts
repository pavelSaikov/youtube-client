import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  sortCategoriesSortFunctionsMap,
  ISortingParams,
} from '../../../core/components/header/search-options/search-options.models';
import { setIsSearchInputAvailable } from '../../../redux/actions/header.actions';
import { setVideoForDetailedDescription } from '../../../redux/actions/youtube.actions';
import { sortingParamsSelector } from '../../../redux/selectors/header.selectors';
import { searchResultsSelector, userVideosSelector } from '../../../redux/selectors/youtube.selectors';
import { ISearchItem } from '../../models/search-item.models';
import { IVideoInfoWithStatistics } from '../../models/search-response.models';
import { IUserVideoInfo, IUserVideoInfoWithId } from '../../models/user-video.models';
import { IVideoDescription } from '../../models/video-description.models';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPageComponent implements OnInit, OnDestroy {
  private searchListItemsFromSearch: ISearchItem[] = [];
  private searchListItemsFromUserVideos: ISearchItem[] = [];
  private searchResults: IVideoInfoWithStatistics[];
  private userVideos: IUserVideoInfoWithId[];
  private subscriptions: Subscription = new Subscription();

  public searchListItems: ISearchItem[];

  public searchResults$: Observable<IVideoInfoWithStatistics[]> = this.store
    .select(searchResultsSelector)
    .pipe(
      map((searchResults: IVideoInfoWithStatistics[]) => {
        this.searchListItemsFromSearch = searchResults.map(videoInfo => ({
          title: videoInfo.snippet.title,
          description: videoInfo.snippet.description,
          image: videoInfo.snippet.thumbnails.high.url,
          statistics: videoInfo.statistics,
          publishedAt: videoInfo.snippet.publishedAt,
          id: videoInfo.id.videoId,
        }));

        this.searchListItems = [...this.searchListItemsFromSearch, ...this.searchListItemsFromUserVideos];
        this.searchResults = searchResults;
        this.changeDetectionRef.detectChanges();
        return searchResults;
      }),
    );

  public userVideos$: Observable<IUserVideoInfo[]> = this.store.select(userVideosSelector).pipe(
    map((videos: IUserVideoInfoWithId[]) => {
      this.searchListItemsFromUserVideos = videos.map(video => ({
        title: video.title,
        description: video.description,
        image: video.imageUrl,
        id: video.id,
        publishedAt: video.creationDate,
        statistics: video.statistics,
      }));

      this.searchListItems = [...this.searchListItemsFromSearch, ...this.searchListItemsFromUserVideos];
      this.userVideos = videos;
      this.changeDetectionRef.detectChanges();
      return videos;
    }),
  );

  public sortCategory$: Observable<ISortingParams> = this.store.select(sortingParamsSelector).pipe(
    map((sortParams: ISortingParams) => {
      if (!this.searchListItems) {
        return sortParams;
      }

      this.searchListItems.sort(
        sortCategoriesSortFunctionsMap.get(sortParams.sortCategory).bind({ keyWord: sortParams.keyWord }),
      );
      this.changeDetectionRef.detectChanges();
      return sortParams;
    }),
  );

  constructor(
    private store: Store,
    private changeDetectionRef: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  public onShowDescriptionClick(id: string): void {
    let infoForDetailedDescription: IVideoDescription;

    if (id.includes('user-video')) {
      const videoInfo: IUserVideoInfoWithId = this.userVideos.find(userVideo => userVideo.id === id);

      infoForDetailedDescription = {
        title: videoInfo.title,
        image: videoInfo.imageUrl,
        description: videoInfo.description,
        publishedAt: videoInfo.creationDate,
        statistics: videoInfo.statistics,
      };
    } else {
      const videoInfo: IVideoInfoWithStatistics = this.searchResults.find(
        searchItem => searchItem.id.videoId === id,
      );

      infoForDetailedDescription = {
        title: videoInfo.snippet.title,
        image: videoInfo.snippet.thumbnails.high.url,
        description: videoInfo.snippet.description,
        publishedAt: videoInfo.snippet.publishedAt,
        statistics: videoInfo.statistics,
      };
    }

    this.store.dispatch(setVideoForDetailedDescription({ payload: infoForDetailedDescription }));
    this.router.navigate(['./description', id], { relativeTo: this.activatedRoute });
  }

  public ngOnInit(): void {
    this.subscriptions.add(this.sortCategory$.subscribe());
    this.subscriptions.add(this.searchResults$.subscribe());
    this.subscriptions.add(this.userVideos$.subscribe());
    this.store.dispatch(setIsSearchInputAvailable({ payload: true }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
