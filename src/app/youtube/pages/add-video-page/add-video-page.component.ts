import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { setIsSearchInputAvailable } from '../../../redux/actions/header.actions';
import { addUserVideo } from '../../../redux/actions/youtube.actions';
import { userVideosSelector } from '../../../redux/selectors/youtube.selectors';
import { IUserVideoInfo, IUserVideoInfoWithId } from '../../models/user-video.models';

@Component({
  selector: 'app-add-video-page',
  templateUrl: './add-video-page.component.html',
  styleUrls: ['./add-video-page.component.scss'],
})
export class AddVideoPageComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  private userVideos: IUserVideoInfoWithId[];

  private userVideos$: Observable<IUserVideoInfoWithId[]> = this.store.select(userVideosSelector).pipe(
    map(videos => {
      this.userVideos = videos;
      return videos;
    }),
  );

  constructor(private store: Store, private router: Router) {}

  public onAddNewVideo(videoInfo: IUserVideoInfo): void {
    this.store.dispatch(
      addUserVideo({ payload: { ...videoInfo, id: 'user-video' + this.userVideos.length } }),
    );
    this.store.dispatch(setIsSearchInputAvailable({ payload: true }));
    this.router.navigateByUrl('/search');
  }

  public ngOnInit(): void {
    this.subscriptions.add(this.userVideos$.subscribe());
    this.store.dispatch(setIsSearchInputAvailable({ payload: false }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
