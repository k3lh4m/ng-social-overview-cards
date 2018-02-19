import {Component, Input, ViewEncapsulation} from '@angular/core';
import {ISocialOverviewBio} from './social-overview-bio.component.interface';
import {IUserBio} from '../social-overview-single.component.interface';

@Component({
  selector: 'app-social-overview-bio',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './social-overview-bio.component.html',
  styleUrls: ['./social-overview-bio.component.scss']
})
export class SocialOverviewBioComponent implements ISocialOverviewBio {
  @Input()
  appSocialOverviewBioData: IUserBio;
}
