import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {ISocialOverviewSocialStats} from "./social-overview-social-stats.component.interface";
import {ISocialStats} from "../social-overview-single.component.interface";

@Component({
  selector: 'app-social-overview-social-stats',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './social-overview-social-stats.component.html',
  styleUrls: ['./social-overview-social-stats.component.scss']
})
export class SocialOverviewSocialStatsComponent implements ISocialOverviewSocialStats {
  @Input()
  public appSocialOverviewSocialStatsData: ISocialStats;
}
