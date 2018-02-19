import {EventEmitter} from '@angular/core';

export interface ISocialOverviewSingle {
  appSocialOverviewSingleData: any;
  appSocialOverviewSingleTriggerEditForm: EventEmitter<void>;
}

export interface ISocialStats {
  following: string;
  followers: string;
  checkIns: string;
}

export interface IUserBio {
  firstName: string;
  lastName: string;
  location: string;
}

export interface IImageConfig {
  src: string;
  width: number;
}
