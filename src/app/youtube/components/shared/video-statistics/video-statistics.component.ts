import { Component, Input } from '@angular/core';

import { IVideoStatistics } from '../../../models/search-response.models';

@Component({
  selector: 'app-video-statistics',
  templateUrl: './video-statistics.component.html',
  styleUrls: ['./video-statistics.component.scss'],
})
export class VideoStatisticsComponent {
  @Input() public statistics: IVideoStatistics;
}
