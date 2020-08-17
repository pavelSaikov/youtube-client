import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { IVideoInfo } from './models/search-response.models';
import { searchResultsSelector } from './store/youtube.selectors';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export class YoutubeComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  private searchResults: IVideoInfo[];

  private searchResults$: Observable<IVideoInfo[]> = this.store.select(searchResultsSelector).pipe(
    map(searchResults => {
      this.searchResults = searchResults;
      return searchResults;
    }),
  );

  private paramMap$: Observable<ParamMap> = this.activatedRoute.paramMap.pipe(
    map(params => {
      if (!this.router.url.includes('description')) {
        return;
      }

      if (!this.searchResults.length) {
        this.router.navigateByUrl('');
        return;
      }

      return params;
    }),
  );

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private store: Store) {}

  public ngOnInit(): void {
    this.subscriptions.add(this.searchResults$.subscribe());
    this.subscriptions.add(this.paramMap$.subscribe());
    console.log('hello');
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    console.log('bey');
  }
}
