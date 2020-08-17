import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { ILoginInfo } from '../../components/login-form/login-form.models';
import { LoginService } from '../../services/login/login.service';
import { setAuthInfo, setUserName } from '../../store/auth.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
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
    setTimeout(() => this.router.navigateByUrl(''), 0);
  }

  public onRedirectToRegistrationPage(): void {
    this.router.navigate(['../registration'], { relativeTo: this.activatedRoute });
  }
}
