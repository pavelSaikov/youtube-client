import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import { ISearchItem } from '../../../../models/search-item.models';
import { IVideoStatistics } from '../../../../models/search-response.models';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnChanges {
  @Input() public videoInfo: ISearchItem;

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
    this.showDescription.emit(this.videoInfo.id);
  }

  public ngOnChanges(): void {
    if (!this.videoInfo.statistics) {
      return;
    }

    const likeCount: string = this.convertStringNumber(this.videoInfo.statistics.likeCount);
    const dislikeCount: string = this.convertStringNumber(this.videoInfo.statistics.dislikeCount);
    const viewCount: string = this.convertStringNumber(this.videoInfo.statistics.viewCount);
    const commentCount: string = this.convertStringNumber(this.videoInfo.statistics.commentCount);

    const preparedStatistics: IVideoStatistics = { likeCount, dislikeCount, viewCount, commentCount };
    this.preparedStatistics = preparedStatistics;
  }
}
