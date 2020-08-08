import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import { data } from '../../../../data/mock';
import { setSearchResults } from '../../../store/app.actions';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.scss'],
})
export class SearchAreaComponent {
  private videoName: string;

  @Output() public toggleSortingOptionsMenu: EventEmitter<void> = new EventEmitter<void>();

  constructor(private store: Store) {}

  public onSortingOptionsClick(): void {
    this.toggleSortingOptionsMenu.emit();
  }

  public onSearchClick(word: string): void {
    if (!word.length || word === this.videoName) {
      return;
    }

    console.log('click');

    this.store.dispatch(setSearchResults({ payload: data }));
    this.videoName = word;
  }
}
