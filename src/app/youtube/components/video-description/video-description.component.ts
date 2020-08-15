import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IVideoInfo } from '../../models/search-response.models';

@Component({
  selector: 'app-video-description',
  templateUrl: './video-description.component.html',
  styleUrls: ['./video-description.component.scss'],
})
export class VideoDescriptionComponent {
  @Input() public videoInfo: IVideoInfo;

  @Output() public back: EventEmitter<void> = new EventEmitter<void>();

  public onBackClick(): void {
    this.back.emit();
  }
}
