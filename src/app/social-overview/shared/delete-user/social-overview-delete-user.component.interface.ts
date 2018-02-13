import {EventEmitter} from "@angular/core";
export interface ISocialOverviewDeleteUser {
  appSocialOverviewUserId: number;
  appSocialOverviewUserDeletedUser: EventEmitter;
}
