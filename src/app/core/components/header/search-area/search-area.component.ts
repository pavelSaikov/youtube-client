import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';

import { LoginService } from '../../../../auth/services/login/login.service';
import { setAuthInfo, setUserName } from '../../../../auth/store/auth.actions';
import { IUserName } from '../../../../auth/store/auth.reducer';
import { userNameSelector } from '../../../../auth/store/auth.selectors';
import { setSearchResults } from '../../../../youtube/store/youtube.actions';
import { searchVideos } from '../store/header.actions';
import { isSearchInputAvailableSelector } from '../store/header.selectors';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchAreaComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  private searchTerms: Subject<string> = new Subject<string>();
  private isSearchInputAvailable: boolean;

  private isSearchInputAvailable$: Observable<boolean> = this.store
    .select(isSearchInputAvailableSelector)
    .pipe(
      map((isSearchInputAvailable: boolean) => {
        this.isSearchInputAvailable = isSearchInputAvailable;
        return isSearchInputAvailable;
      }),
    );

  private searchTerms$: Observable<string> = this.searchTerms.pipe(
    filter((videoName: string) => videoName.length >= 3),
    distinctUntilChanged(),
    debounceTime(500),
    switchMap((videoName: string) => {
      this.store.dispatch(searchVideos({ payload: videoName }));
      console.log(videoName);
      return videoName;
    }),
  );

  @Output() public toggleSortingOptionsMenu: EventEmitter<void> = new EventEmitter<void>();

  public userName: IUserName;
  public videoName: string;

  public userName$: Observable<IUserName> = this.store.select(userNameSelector).pipe(
    map(userName => {
      this.userName = userName;
      this.videoName = '';
      this.changeDetectorRef.detectChanges();
      return userName;
    }),
  );

  constructor(
    private store: Store,
    private router: Router,
    private loginService: LoginService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  public onSortingOptionsClick(): void {
    if (!this.isSearchInputAvailable) {
      return;
    }

    this.toggleSortingOptionsMenu.emit();
  }

  public onSearchInput(): void {
    if (!this.isSearchInputAvailable) {
      return;
    }

    this.searchTerms.next(this.videoName);
  }

  public onLogoutClick(): void {
    this.loginService.logout();
    this.store.dispatch(setAuthInfo({ payload: null }));
    this.store.dispatch(setUserName({ payload: null }));
    this.store.dispatch(setSearchResults({ payload: [] }));
    this.videoName = '';
    this.router.navigateByUrl('/auth/login');
    this.changeDetectorRef.detectChanges();
  }

  public ngOnInit(): void {
    this.subscriptions.add(this.searchTerms$.subscribe());
    this.subscriptions.add(this.userName$.subscribe());
    this.subscriptions.add(this.isSearchInputAvailable$.subscribe());
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
