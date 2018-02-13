import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {ISocialOverviewDeleteUser} from "./social-overview-delete-user.component.interface";

@Component({
  selector: 'app-delete-user',
  templateUrl: 'social-overview-delete-user.component.html',
  styleUrls: ['social-overview-delete-user.component.scss']
})
export class SocialOverviewDeleteUserComponent implements ISocialOverviewDeleteUser {
  @Input()
  appSocialOverviewUserId;

  @Output()
  appSocialOverviewUserDeletedUser: EventEmitter<void> = new EventEmitter<void>();

  private _apiService: ApiService;

  constructor(apiService: ApiService) {
    this._apiService = apiService
  }

  public deleteRecord(id: number) {
    this._apiService.deleteRecord(id).subscribe(() => {
      this.appSocialOverviewUserDeletedUser.emit();
    })
  }

}
