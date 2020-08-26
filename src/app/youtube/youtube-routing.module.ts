import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from '../shared/components/error/error.component';
import { AddVideoPageComponent } from './pages/add-video-page/add-video-page.component';
import { DescriptionPageComponent } from './pages/description-page/description-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: 'description/:id', component: DescriptionPageComponent },
  { path: 'add-video', component: AddVideoPageComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
  { path: '404', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
