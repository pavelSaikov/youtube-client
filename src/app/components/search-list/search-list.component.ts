import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { IVideoInfo } from '../../models/search-response.models';
import { searchResultsSelector, sortingParamsSelector } from '../../store/app.selectors';
import { sortCategoriesSortFunctionsMap, ISortingParams } from '../header/search-options/search-options.models';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent implements OnInit, OnDestroy {
  public searchResults: IVideoInfo[];
  public subscriptions: Subscription = new Subscription();

  public searchResults$: Observable<IVideoInfo[]> = this.store
    .select(searchResultsSelector)
    .pipe(map(searchResults => (this.searchResults = searchResults)));

  public sortCategory$: Observable<ISortingParams> = this.store.select(sortingParamsSelector).pipe(
    map((sortParams: ISortingParams) => {
      if (!this.searchResults) {
        return sortParams;
      }

      this.searchResults.sort(
        sortCategoriesSortFunctionsMap.get(sortParams.sortCategory).bind({ keyWord: sortParams.keyWord }),
      );
      return sortParams;
    }),
  );

  constructor(private store: Store) {}

  public trackByVideoId(_index: number, item: IVideoInfo): string {
    return item.id;
  }

  public ngOnInit(): void {
    this.subscriptions.add(this.sortCategory$.subscribe());
    this.subscriptions.add(this.searchResults$.subscribe());
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
