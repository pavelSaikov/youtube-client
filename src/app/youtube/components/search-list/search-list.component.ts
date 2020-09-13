import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ISearchItem } from '../../models/search-item.models';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  @Input() public searchResults: ISearchItem[];

  @Output() public showDescription: EventEmitter<string> = new EventEmitter<string>();

  public trackByVideoId(_index: number, item: ISearchItem): string {
    return item.id;
  }

  public onMoreClick(id: string): void {
    this.showDescription.emit(id);
  }
}
