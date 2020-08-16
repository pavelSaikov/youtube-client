import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  private firstName: string;
  private lastName: string;
  private mail: string;
  private password: string;

  @Output() public redirectToLogin: EventEmitter<void> = new EventEmitter<void>();

  public isFirstNameValid: boolean;
  public isLastNameValid: boolean;
  public isMailValid: boolean;
  public isPasswordValid: boolean;

  constructor() {}

  public validateFirstName(firstName: string): void {
    this.firstName = firstName;
    this.isFirstNameValid = true;
  }

  public validateLastName(lastName: string): void {
    this.lastName = lastName;
    this.isLastNameValid = true;
  }

  public validateMail(mail: string): void {
    this.mail = mail;
    this.isMailValid = true;
  }

  public validatePassword(password: string): void {
    this.password = password;
    this.isPasswordValid = true;
  }

  public onRegistrationClick(): void {}

  public onRedirectToLoginClick(): void {
    this.redirectToLogin.emit();
  }
}
