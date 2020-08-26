import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { videoForDetailedDescriptionSelector } from '../../../redux/selectors/youtube.selectors';
import { IVideoDescription } from '../../models/video-description.models';

@Component({
  selector: 'app-description-page',
  templateUrl: './description-page.component.html',
  styleUrls: ['./description-page.component.scss'],
})
export class DescriptionPageComponent {
  public videoDescription$: Observable<IVideoDescription> = this.store
    .select(videoForDetailedDescriptionSelector)
    .pipe(
      map((video: IVideoDescription) => {
        if (!video) {
          this.onBackClick();
        }

        return video;
      }),
    );

  constructor(private store: Store, private router: Router, private activatedRoute: ActivatedRoute) {}

  public onBackClick(): void {
    this.router.navigate([''], { relativeTo: this.activatedRoute });
  }
}
