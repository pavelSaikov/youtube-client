import { Component, OnInit } from '@angular/core';

import { data } from '../../data/mock';
import { IVideoInfo } from './models/search-response.models';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export class YoutubeComponent implements OnInit {
  public data: IVideoInfo[] = data;
  constructor() {}

  public ngOnInit(): void {}
}
