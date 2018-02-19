import {Component, Input} from '@angular/core';
import {ISocialOverviewDeleteUser} from "./social-overview-delete-user.component.interface";
import {FirebaseApiService} from "../../../services/firebaseApi.service";

@Component({
  selector: 'app-delete-user',
  templateUrl: 'social-overview-delete-user.component.html',
  styleUrls: ['social-overview-delete-user.component.scss']
})
export class SocialOverviewDeleteUserComponent implements ISocialOverviewDeleteUser {
  @Input()
  appSocialOverviewUserId: number;

  private _apiService: FirebaseApiService;

  constructor(firebaseApiService: FirebaseApiService,) {
    this._apiService = firebaseApiService;
  }

  public deleteRecord(id: number) {
    const idToString = id.toString();

    this._apiService.deleteUser(idToString);
  }

}
