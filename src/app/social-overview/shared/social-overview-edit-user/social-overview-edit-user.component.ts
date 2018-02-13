import {Component, Output, Input, EventEmitter} from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {ISocialOverviewEditUser} from "./social-overview-edit-user.component.interface";

@Component({
  selector: 'app-social-overview-edit-user',
  templateUrl: 'social-overview-edit-user.component.html'
})
export class SocialOverviewEditUserComponent implements ISocialOverviewEditUser {
  @Output()
  appSocialOverviewUserEdited: EventEmitter<void> = new EventEmitter<void>();

  private _http: ApiService;

  constructor(apiService: ApiService) {
    this._http = apiService
  }

  public editUser(): void {
    this.appSocialOverviewUserEdited.emit()
  }

}
