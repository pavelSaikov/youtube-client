import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  private login: string;
  private password: string;

  @Output() public redirectToRegistration: EventEmitter<void> = new EventEmitter<void>();

  public isLoginCorrect: boolean;
  public isPasswordCorrect: boolean;

  public validateLogin(value: string): void {
    this.isLoginCorrect = true;
    this.login = value;
  }
  public validatePassword(value: string): void {
    this.isPasswordCorrect = true;
    this.password = value;
  }

  public onLoginClick(): void {
    if (!this.isLoginCorrect || !this.isPasswordCorrect) {
      return;
    }

    console.log(this.login);
    console.log(this.password);
  }

  public onRegistrationClick(): void {
    this.redirectToRegistration.emit();
  }
}
