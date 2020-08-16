import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthRoutes } from '../../auth-routing.models';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  public onRedirectToRegistrationPage(): void {
    this.router.navigate([`../${AuthRoutes.Registration}`], { relativeTo: this.activatedRoute });
  }
}
