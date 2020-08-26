import { Component, EventEmitter, Output } from '@angular/core';

import { IUserVideoInfo } from '../../models/user-video.models';

@Component({
  selector: 'app-video-form',
  templateUrl: './video-form.component.html',
  styleUrls: ['./video-form.component.scss'],
})
export class VideoFormComponent {
  private title: string;
  private description: string;
  private imageUrl: string;
  private videoUrl: string;

  private previousTitle: string;
  private previousDescription: string;
  private previousImageUrl: string;
  private previousVideoUrl: string;

  @Output() public videoInfoEmitter: EventEmitter<IUserVideoInfo> = new EventEmitter<IUserVideoInfo>();

  public onTitleInput(title: string): void {
    this.title = title;
  }

  public onDescriptionInput(description: string): void {
    this.description = description;
  }

  public onImageUrlInput(imageUrl: string): void {
    this.imageUrl = imageUrl;
  }

  public onVideoUrlInput(videoUrl: string): void {
    this.videoUrl = videoUrl;
  }

  public onCreateCardClick(): void {
    if (!this.title || !this.description || !this.imageUrl || !this.videoUrl) {
      return;
    }

    if (
      this.title === this.previousTitle ||
      this.description === this.previousDescription ||
      this.imageUrl === this.previousImageUrl ||
      this.videoUrl === this.previousVideoUrl
    ) {
      return;
    }

    this.videoInfoEmitter.emit({
      title: this.title,
      description: this.description,
      imageUrl: this.imageUrl,
      videoUrl: this.videoUrl,
      creationDate: new Date().toISOString(),
      statistics: { commentCount: '0', dislikeCount: '0', likeCount: '0', viewCount: '0' },
    });

    this.previousTitle = this.title;
    this.previousDescription = this.description;
    this.previousImageUrl = this.imageUrl;
    this.previousVideoUrl = this.videoUrl;
  }
}
