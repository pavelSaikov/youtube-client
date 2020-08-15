import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DescriptionPageComponent } from './pages/description-page/description-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { YoutubeRoutes } from './youtube-routing.models';

const routes: Routes = [
  { path: `${YoutubeRoutes.Default}`, component: SearchPageComponent },
  { path: YoutubeRoutes.Description, component: DescriptionPageComponent },
  { path: '**', redirectTo: `${YoutubeRoutes.Default}`, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {
  constructor() {}
}
