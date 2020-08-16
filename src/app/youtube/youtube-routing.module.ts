import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from '../shared/components/error/error.component';
import { DescriptionPageComponent } from './pages/description-page/description-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { YoutubeRoutes } from './youtube-routing.models';

const routes: Routes = [
  { path: `${YoutubeRoutes.Default}`, component: SearchPageComponent },
  { path: YoutubeRoutes.Description, component: DescriptionPageComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
  { path: '404', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {
  constructor() {}
}
