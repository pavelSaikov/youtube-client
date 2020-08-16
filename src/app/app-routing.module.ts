import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './shared/components/error/error.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule),
    pathMatch: 'full',
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
