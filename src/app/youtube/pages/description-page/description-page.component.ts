import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { IVideoInfo } from '../../models/search-response.models';
import { searchResultsSelector, videoForDetailedDescriptionSelector } from '../../store/youtube.selectors';

@Component({
  selector: 'app-description-page',
  templateUrl: './description-page.component.html',
  styleUrls: ['./description-page.component.scss'],
})
export class DescriptionPageComponent implements OnInit, OnDestroy {
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
      if (!this.searchResults.length) {
        this.router.navigateByUrl('');
      }

      return params;
    }),
  );

  public videoDescription$: Observable<IVideoInfo> = this.store.select(videoForDetailedDescriptionSelector);

  constructor(private store: Store, private router: Router, private activatedRoute: ActivatedRoute) {}

  public onBackClick(): void {
    this.router.navigate([''], { relativeTo: this.activatedRoute });
  }

  public ngOnInit(): void {
    this.subscriptions.add(this.searchResults$.subscribe());
    this.subscriptions.add(this.paramMap$.subscribe());
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
