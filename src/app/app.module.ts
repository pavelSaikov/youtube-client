import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment.prod';
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
import { appReducer } from './store/app.reducer';
import { StoreCategories } from './store/index';

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
    StoreModule.forRoot(
      { [StoreCategories.sorting]: appReducer },
      {
        runtimeChecks: {
          strictStateImmutability: !environment.production,
          strictActionImmutability: !environment.production,
        },
      },
    ),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          maxAge: 50,
        }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
