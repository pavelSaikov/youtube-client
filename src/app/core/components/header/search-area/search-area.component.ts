import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUserName } from 'src/app/auth/store/auth.reducer';

import { data } from '../../../../../data/mock';
import { LoginService } from '../../../../auth/services/login/login.service';
import { setAuthInfo, setUserName } from '../../../../auth/store/auth.actions';
import { userNameSelector } from '../../../../auth/store/auth.selectors';
import { setSearchResults } from '../../../../youtube/store/youtube.actions';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchAreaComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  private previousVideoName: string;

  @Output() public toggleSortingOptionsMenu: EventEmitter<void> = new EventEmitter<void>();

  public userName: IUserName;
  public videoName: string;

  public userName$: Observable<IUserName> = this.store.select(userNameSelector).pipe(
    map(userName => {
      this.userName = userName;
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
    this.toggleSortingOptionsMenu.emit();
  }

  public onSearchClick(): void {
    if (!this.videoName.length || this.videoName === this.previousVideoName) {
      return;
    }

    this.store.dispatch(setSearchResults({ payload: data }));
    this.previousVideoName = this.videoName;
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
    this.subscriptions.add(this.userName$.subscribe());
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
