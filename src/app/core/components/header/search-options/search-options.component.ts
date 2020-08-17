import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { setSortingKeyWord, setSortingParams, setSortCategory } from '../store/header.actions';
import { sortingParamsSelector } from '../store/header.selectors';
import { ISortingParams, SortCategories } from './search-options.models';

@Component({
  selector: 'app-search-options',
  templateUrl: './search-options.component.html',
  styleUrls: ['./search-options.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({ transform: 'scaleY(1)', padding: '40px 0 20px 0' })),
      state('closed', style({ transform: 'scaleY(0)', padding: '0' })),
      transition('open => closed', [animate('0.2s')]),
      transition('closed => open', [animate('0.2s')]),
    ]),
  ],
})
export class SearchOptionsComponent implements OnInit, OnDestroy {
  private keyWord: string;

  @Input() public isVisible: boolean;

  public subscriptions: Subscription = new Subscription();
  public sortCategory: SortCategories;

  public sortCategory$: Observable<SortCategories> = this.store
    .select(sortingParamsSelector)
    .pipe(map((sortingParams: ISortingParams) => (this.sortCategory = sortingParams.sortCategory)));

  constructor(private store: Store) {}

  public sortByDate(): void {
    const sortCategory: SortCategories =
      this.sortCategory === SortCategories.byDate ? SortCategories.byDateReverse : SortCategories.byDate;

    this.store.dispatch(setSortCategory({ payload: sortCategory }));
  }

  public sortByViews(): void {
    const sortCategory: SortCategories =
      this.sortCategory === SortCategories.byCountViews
        ? SortCategories.byCountViewsReverse
        : SortCategories.byCountViews;

    this.store.dispatch(setSortCategory({ payload: sortCategory }));
  }

  public onKeyUp(event: KeyboardEvent, value: string): void {
    if (value === this.keyWord) {
      return;
    }

    if (event.code === 'Backspace') {
      return;
    }

    this.sortCategory !== SortCategories.byWord
      ? this.store.dispatch(
          setSortingParams({ payload: { sortCategory: SortCategories.byWord, keyWord: value } }),
        )
      : this.store.dispatch(setSortingKeyWord({ payload: value }));
    this.keyWord = value;
  }

  public ngOnInit(): void {
    this.subscriptions.add(this.sortCategory$.subscribe());
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
