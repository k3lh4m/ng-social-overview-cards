import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ApiService} from './services/api.service';
import {HttpClientModule} from '@angular/common/http';

import {SocialOverviewContainerComponent} from './social-overview/social-overview-container.component';
import {SocialOverviewImageComponent} from './social-overview/social-overview-single/social-overview-image/social-overview-image.component';
import {SocialOverviewSingleComponent} from './social-overview/social-overview-single/social-overview-single.component';
import {SocialOverviewBioComponent} from './social-overview/social-overview-single/social-overview-bio/social-overview-bio.component';
import {SocialOverviewSocialStatsComponent} from './social-overview/social-overview-single/social-overview-social-stats/social-overview-social-stats.component';
import {CreateFormComponent} from './social-overview/user-forms/create-form/create-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SocialOverviewEditUserComponent} from './social-overview/shared/social-overview-edit-user/social-overview-edit-user.component';
import {EditFormComponent} from './social-overview/user-forms/edit-form/edit-form.component';
import {SocialOverviewDeleteUserComponent} from "./social-overview/shared/social-overview-delete-user/social-overview-delete-user.component";

@NgModule({
  declarations: [
    AppComponent,
    SocialOverviewContainerComponent,
    SocialOverviewImageComponent,
    SocialOverviewSingleComponent,
    SocialOverviewBioComponent,
    SocialOverviewSocialStatsComponent,
    CreateFormComponent,
    SocialOverviewEditUserComponent,
    SocialOverviewDeleteUserComponent,
    EditFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
