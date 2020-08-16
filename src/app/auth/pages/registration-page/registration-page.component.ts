import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthRoutes } from '../../auth-routing.models';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  public redirectToLoginPage(): void {
    this.router.navigate([`../${AuthRoutes.Login}`], { relativeTo: this.activatedRoute });
  }
}
