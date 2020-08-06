import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormFieldComponent } from './components/common/form-field/form-field.component';
import { PublishingIndicatorComponent } from './components/common/publishing-indicator/publishing-indicator.component';
import { VideoStatisticsComponent } from './components/common/video-statistics/video-statistics.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchAreaComponent } from './components/header/search-area/search-area.component';
import { SearchOptionsComponent } from './components/header/search-options/search-options.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { SearchItemComponent } from './components/search-list/components/search-item/search-item.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { VideoDescriptionComponent } from './components/video-description/video-description.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchItemComponent,
    SearchListComponent,
    VideoDescriptionComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    VideoStatisticsComponent,
    FormFieldComponent,
    SearchAreaComponent,
    SearchOptionsComponent,
    PublishingIndicatorComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
