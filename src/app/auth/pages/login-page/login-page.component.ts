import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { setAuthInfo, setUserName } from '../../../redux/actions/auth.actions';
import { setIsSearchInputAvailable } from '../../../redux/actions/header.actions';
import { ILoginInfo } from '../../components/login-form/login-form.models';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private router: Router,
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
  ) {}

  public onLoginUser(loginInfo: ILoginInfo): void {
    this.loginService.login(loginInfo);
    this.store.dispatch(setAuthInfo({ payload: JSON.parse(localStorage.getItem('authInfo')) }));
    this.store.dispatch(setUserName({ payload: JSON.parse(localStorage.getItem('userName')) }));
    this.store.dispatch(setIsSearchInputAvailable({ payload: true }));
    this.router.navigateByUrl('');
  }

  public onRedirectToRegistrationPage(): void {
    this.router.navigate(['../registration'], { relativeTo: this.activatedRoute });
  }

  public ngOnInit(): void {
    this.store.dispatch(setIsSearchInputAvailable({ payload: false }));
  }
}
