import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isSearchOptionsVisible: boolean = false;

  public toggleSortingOptionsVisibility(): void {
    this.isSearchOptionsVisible = !this.isSearchOptionsVisible;
  }
}
