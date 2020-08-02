import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormFieldComponent } from './components/common/form-field/form-field.component';
import { VideoStatisticsComponent } from './components/common/video-statistics/video-statistics.component';
import { SearchAreaComponent } from './components/header/search-area/search-area.component';
import { SearchOptionsComponent } from './components/header/search-options/search-options.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { SearchItemComponent } from './components/search-list/components/search-item/search-item.component';
import { VideoDescriptionComponent } from './components/video-description/video-description.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchItemComponent,
    VideoDescriptionComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    VideoStatisticsComponent,
    FormFieldComponent,
    SearchAreaComponent,
    SearchOptionsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
