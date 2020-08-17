import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import { IVideoStatistics } from '../../../../models/search-response.models';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnChanges {
  @Input() public imageUrl: string;
  @Input() public statistics: IVideoStatistics;
  @Input() public title: string;
  @Input() public publishingDate: string;
  @Input() public id: string;

  @Output() public showDescription: EventEmitter<string> = new EventEmitter<string>();

  public preparedStatistics: IVideoStatistics;

  private convertStringNumber(stringNumber: string): string {
    const num: number = +stringNumber;

    if (num >= 1e9) {
      return (num / 1e9).toFixed(1).toString() + ' bln';
    }

    if (num >= 1e6) {
      return (num / 1e6).toFixed(1).toString() + ' mln';
    }

    if (num >= 1e3) {
      return (num / 1e3).toFixed(1).toString() + ' K';
    }

    return stringNumber;
  }

  public onMoreClick(): void {
    this.showDescription.emit(this.id);
  }

  public ngOnChanges(): void {
    const likeCount: string = this.convertStringNumber(this.statistics.likeCount);
    const dislikeCount: string = this.convertStringNumber(this.statistics.dislikeCount);
    const viewCount: string = this.convertStringNumber(this.statistics.viewCount);
    const commentCount: string = this.convertStringNumber(this.statistics.commentCount);

    const preparedStatistics: IVideoStatistics = { likeCount, dislikeCount, viewCount, commentCount };
    this.preparedStatistics = preparedStatistics;
  }
}
