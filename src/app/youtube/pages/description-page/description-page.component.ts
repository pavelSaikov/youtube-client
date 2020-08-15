import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IVideoInfo } from '../../models/search-response.models';
import { videoForDetailedDescriptionSelector } from '../../store/youtube.selectors';
import { YoutubeRoutes } from '../../youtube-routing.models';

@Component({
  selector: 'app-description-page',
  templateUrl: './description-page.component.html',
  styleUrls: ['./description-page.component.scss'],
})
export class DescriptionPageComponent {
  public videoDescription$: Observable<IVideoInfo> = this.store.select(videoForDetailedDescriptionSelector);

  constructor(private store: Store, private router: Router, private activatedRoute: ActivatedRoute) {}

  public onBackClick(): void {
    this.router.navigate([`${YoutubeRoutes.Default}`], { relativeTo: this.activatedRoute });
  }
}
