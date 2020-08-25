import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import {
    sortCategoriesSortFunctionsMap, ISortingParams
} from '../../../core/components/header/search-options/search-options.models';
import { sortingParamsSelector } from '../../../core/components/header/store/header.selectors';
import { IVideoInfoWithStatistics } from '../../models/search-response.models';
import { setVideoForDetailedDescription } from '../../store/youtube.actions';
import { searchResultsSelector } from '../../store/youtube.selectors';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPageComponent implements OnInit, OnDestroy {
  public searchResults: IVideoInfoWithStatistics[];
  public subscriptions: Subscription = new Subscription();

  public searchResults$: Observable<IVideoInfoWithStatistics[]> = this.store
    .select(searchResultsSelector)
    .pipe(
      map(searchResults => {
        this.searchResults = searchResults;
        this.changeDetectionRef.detectChanges();
        return searchResults;
      }),
    );

  public sortCategory$: Observable<ISortingParams> = this.store.select(sortingParamsSelector).pipe(
    map((sortParams: ISortingParams) => {
      if (!this.searchResults) {
        return sortParams;
      }

      this.searchResults.sort(
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

  public onShowDescriptionClick(videoInfo: IVideoInfoWithStatistics): void {
    this.store.dispatch(setVideoForDetailedDescription({ payload: videoInfo }));
    this.router.navigate(['./description', videoInfo.id.videoId], { relativeTo: this.activatedRoute });
  }

  public ngOnInit(): void {
    this.subscriptions.add(this.sortCategory$.subscribe());
    this.subscriptions.add(this.searchResults$.subscribe());
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
