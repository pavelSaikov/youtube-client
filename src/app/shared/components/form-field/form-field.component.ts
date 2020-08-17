import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent {
  @Input() public isCorrectInput: boolean;

  @Output() public validateValue: EventEmitter<string> = new EventEmitter<string>();

  public isInputAnything: boolean;

  public onKeyUp(value: string): void {
    this.isInputAnything = value.length !== 0;
    this.validateValue.emit(value);
  }
}
