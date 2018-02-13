import {EventEmitter} from "@angular/core";
export interface IDeleteUser {
  appSocialOverviewUserId: number;
  appSocialOverviewUserDeletedUser: EventEmitter;
}
