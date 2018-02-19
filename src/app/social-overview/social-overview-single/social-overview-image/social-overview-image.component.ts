import {Component, Input, ViewEncapsulation} from '@angular/core';
import {ISocialOverviewImage} from './social-overview-image.component.interface';
import {IImageConfig} from '../social-overview-single.component.interface';

@Component({
  selector: 'app-social-overview-image',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'social-overview-image.component.html',
  styleUrls: ['social-overview-image.component.scss']
})
export class SocialOverviewImageComponent implements ISocialOverviewImage {
  @Input()
  appSocialOverviewImageConfig: IImageConfig;
}
