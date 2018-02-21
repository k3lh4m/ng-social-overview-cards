import {Component, ViewEncapsulation} from '@angular/core';
import {FirebaseApiService} from '../../../services/firebaseApi.service';
import * as _ from 'lodash';
import {DefaultData} from '../../../constants/defaultData.const';

@Component({
  selector: 'app-social-overview-refresh-users',
  templateUrl: './social-overview-refresh-users.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./social-overview-refresh-users.component.scss']
})

export class SocialOverviewRefreshUsersComponent {
  private _apiService: FirebaseApiService;
  private _defaultData = DefaultData.users;

  constructor(firebaseApiService: FirebaseApiService) {
    this._apiService = firebaseApiService;
  }

  public refreshUsers(): void {
    this._apiService.deleteUser();
    this._apiService.updateUser('0', this._defaultData[0]);
    this._apiService.updateUser('1', this._defaultData[1]);
    this._apiService.updateUser('2', this._defaultData[2]);
    this._apiService.updateUser('3', this._defaultData[3]);
    this._apiService.updateUser('4', this._defaultData[4]);
  }
}
