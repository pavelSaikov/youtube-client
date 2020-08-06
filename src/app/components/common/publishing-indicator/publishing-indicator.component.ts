import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-publishing-indicator',
  templateUrl: './publishing-indicator.component.html',
  styleUrls: ['./publishing-indicator.component.scss'],
})
export class PublishingIndicatorComponent implements OnChanges {
  private week: number = 7 * 24 * 60 * 60 * 1000;
  private month: number = 4 * this.week;

  @Input() public publishingDate: string;

  public backgroundColor: string;

  private calculateBackgroundColor(): void {
    const timeDifference: number = Date.now() - new Date(this.publishingDate).getTime();

    if (timeDifference < this.week) {
      this.backgroundColor = '#2F80ED';
      return;
    }

    if (timeDifference < this.month) {
      this.backgroundColor = '#27AE60';
      return;
    }

    this.backgroundColor = '#EB5757';
  }

  public ngOnChanges(): void {
    this.calculateBackgroundColor();
  }
}
