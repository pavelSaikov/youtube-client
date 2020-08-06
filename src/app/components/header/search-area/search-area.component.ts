import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.scss'],
})
export class SearchAreaComponent {
  @Output() public toggleSortingOptionsMenu: EventEmitter<void> = new EventEmitter<void>();

  public onSortingOptionsClick(): void {
    this.toggleSortingOptionsMenu.emit();
  }
}
