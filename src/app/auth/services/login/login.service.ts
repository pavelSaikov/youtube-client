import { Injectable } from '@angular/core';

import { ILoginInfo } from '../../components/login-form/login-form.models';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  public login(loginInfo: ILoginInfo): void {
    localStorage.setItem(
      'authInfo',
      JSON.stringify({
        login: loginInfo.login,
        password: loginInfo.password,
        token: 'token',
      }),
    );
    localStorage.setItem('userName', JSON.stringify({ firstName: 'Pavel', lastName: 'Saikov' }));
  }

  public logout(): void {
    localStorage.removeItem('authInfo');
    localStorage.removeItem('userName');
  }
}
