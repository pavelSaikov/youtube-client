import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IVideoInfo } from '../../models/search-response.models';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  @Input() public searchResults: IVideoInfo[];

  @Output() public showDescription: EventEmitter<IVideoInfo> = new EventEmitter<IVideoInfo>();

  public trackByVideoId(_index: number, item: IVideoInfo): string {
    return item.id;
  }

  public onMoreClick(id: string): void {
    const videoDescription: IVideoInfo = { ...this.searchResults.find(el => el.id === id) };
    this.showDescription.emit(videoDescription);
  }
}
