import {Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter} from '@angular/core';
import {
  ISocialOverviewSingle, ISocialStats, IImageConfig,
  IUserBio
} from "./social-overview-single.component.interface";
import {IUser} from "../../interfaces/social-overview-users.interface";

@Component({
  selector: 'app-social-overview-single',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './social-overview-single.component.html',
  styleUrls: ['./social-overview-single.component.scss']
})
export class SocialOverviewSingleComponent implements OnInit, ISocialOverviewSingle {
  @Input()
  appSocialOverviewSingleData: IUser;

  @Output()
  appSocialOverviewSingleDeletedUser: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  appSocialOverviewSingleTriggerEditForm: EventEmitter<void> = new EventEmitter<void>();

  public userBio: IUserBio;
  public imageConfig: IImageConfig;
  public socialStats: ISocialStats;

  constructor() {
  }

  ngOnInit() {
    this.setBio();
    this.setImageConfig();
    this.setSocialStats();
  }

  public refreshUsers() {
    this.appSocialOverviewSingleDeletedUser.emit();
  }

  public triggerEditForm() {
    this.appSocialOverviewSingleTriggerEditForm.emit()
  }

  private setBio() {
    this.userBio = {
      firstName: this.appSocialOverviewSingleData.first_name,
      lastName: this.appSocialOverviewSingleData.last_name,
      location: this.appSocialOverviewSingleData.location
    }
  }

  private setImageConfig() {
    this.imageConfig = {
      src: this.appSocialOverviewSingleData.image,
      width: 140
    }
  }

  private setSocialStats() {
    this.socialStats = {
      following: this.appSocialOverviewSingleData.following,
      followers: this.appSocialOverviewSingleData.followers,
      checkIns: this.appSocialOverviewSingleData.checkins
    }
  }
}
