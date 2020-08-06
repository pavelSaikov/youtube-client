import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-options',
  templateUrl: './search-options.component.html',
  styleUrls: ['./search-options.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({ transform: 'scaleY(1)', padding: '40px 0 20px 0' })),
      state('closed', style({ transform: 'scaleY(0)', padding: '0' })),
      transition('open => closed', [animate('0.2s')]),
      transition('closed => open', [animate('0.2s')]),
    ]),
  ],
})
export class SearchOptionsComponent {
  @Input() public isVisible: boolean;
}
