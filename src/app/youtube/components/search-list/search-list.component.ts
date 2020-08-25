import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IVideoInfoWithStatistics } from '../../models/search-response.models';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  @Input() public searchResults: IVideoInfoWithStatistics[];

  @Output() public showDescription: EventEmitter<IVideoInfoWithStatistics> = new EventEmitter<
    IVideoInfoWithStatistics
  >();

  public trackByVideoId(_index: number, item: IVideoInfoWithStatistics): string {
    return item.id.videoId;
  }

  public onMoreClick(id: { videoId: string }): void {
    const videoDescription: IVideoInfoWithStatistics = {
      ...this.searchResults.find(el => el.id.videoId === id.videoId),
    };
    this.showDescription.emit(videoDescription);
  }
}
