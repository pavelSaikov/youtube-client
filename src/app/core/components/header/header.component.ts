import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { isSearchInputAvailableSelector } from '../../../redux/selectors/header.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();

  private isSearchInputAvailable$: Observable<boolean> = this.store
    .select(isSearchInputAvailableSelector)
    .pipe(
      map(isAvailable => {
        if (!isAvailable) {
          this.isSearchOptionsVisible = false;
        }

        return isAvailable;
      }),
    );

  public isSearchOptionsVisible: boolean = false;

  constructor(private store: Store) {}

  public toggleSortingOptionsVisibility(): void {
    this.isSearchOptionsVisible = !this.isSearchOptionsVisible;
  }

  public ngOnInit(): void {
    this.subscriptions.add(this.isSearchInputAvailable$.subscribe());
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
