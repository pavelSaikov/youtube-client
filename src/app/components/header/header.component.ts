import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({ transform: 'scaleY(1)', padding: '40px 0 20px 0' })),
      state('closed', style({ transform: 'scaleY(0)', padding: '0' })),
      transition('open => closed', [animate('0.2s')]),
      transition('closed => open', [animate('0.2s')]),
    ]),
  ],
})
export class HeaderComponent {
  public isSearchOptionsVisible: boolean = false;

  public toggleSortingOptionsVisibility(): void {
    this.isSearchOptionsVisible = !this.isSearchOptionsVisible;
  }
}
