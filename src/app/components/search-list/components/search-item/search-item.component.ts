import { Component, Input } from '@angular/core';

import { IVideoStatistics } from '../../../../models/search-response.models';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() public imageUrl: string;
  @Input() public statistics: IVideoStatistics;
  @Input() public title: string;
  @Input() public publishingDate: string;
}
