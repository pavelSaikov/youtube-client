import { Component } from '@angular/core';

import { data } from '../../../data/mock';
import { IVideoInfo } from '../../models/search-response.models';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  public searchResults: IVideoInfo[] = data.items;
}
