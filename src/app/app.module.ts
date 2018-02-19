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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SocialOverviewEditUserComponent} from './social-overview/shared/social-overview-edit-user/social-overview-edit-user.component';
import {SocialOverviewDeleteUserComponent} from './social-overview/shared/social-overview-delete-user/social-overview-delete-user.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {ValidationMessagesComponent} from './social-overview/user-forms/form-components/validation-messages/validation-messages.component';
import {EditFormComponent} from './social-overview/user-forms/form-templates/edit-form/edit-form.component';
import {FormTextInputComponent} from './social-overview/user-forms/form-components/form-text-input/form-text-input.component';
import {NoNumbersDirective} from './directives/no-numerical/no-numbers.directive';
import { ValidateUrlDirective } from './directives/validate-url/validate-url.directive';
import {FirebaseApiService} from './services/firebaseApi.service';

@NgModule({
  declarations: [
    AppComponent,
    SocialOverviewContainerComponent,
    SocialOverviewImageComponent,
    SocialOverviewSingleComponent,
    SocialOverviewBioComponent,
    SocialOverviewSocialStatsComponent,
    SocialOverviewEditUserComponent,
    SocialOverviewDeleteUserComponent,
    ValidationMessagesComponent,
    EditFormComponent,
    FormTextInputComponent,
    NoNumbersDirective,
    ValidateUrlDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [ApiService, FirebaseApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
