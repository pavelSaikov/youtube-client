import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUserName } from 'src/app/redux/reducers/auth.reducer';

import { setAuthInfo, setUserName } from './redux/actions/auth.actions';
import { IAuthInfo } from './redux/reducers/auth.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title: string = 'youtube-client-app';

  constructor(private store: Store) {}

  public ngOnInit(): void {
    const authInfo: IAuthInfo = JSON.parse(localStorage.getItem('authInfo'));
    this.store.dispatch(setAuthInfo({ payload: authInfo }));
    const userName: IUserName = JSON.parse(localStorage.getItem('userName'));
    this.store.dispatch(setUserName({ payload: userName }));
  }
}
