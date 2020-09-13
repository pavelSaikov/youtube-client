import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IAuthInfo } from '../../../redux/reducers/auth.reducer';
import { authInfoSelector } from '../../../redux/selectors/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  public authInfo: IAuthInfo;

  public authInfo$: Observable<IAuthInfo> = this.store.select(authInfoSelector).pipe(
    map(authInfo => {
      this.authInfo = authInfo;
      return authInfo;
    }),
  );

  constructor(private store: Store, private router: Router) {
    this.authInfo$.subscribe();
  }

  public canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authInfo ? true : this.router.parseUrl('auth');
  }
}
