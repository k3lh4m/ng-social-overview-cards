import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ApiSettings} from '../constants/api.const';
import {IUser} from '../interfaces/social-overview-users.interface';
import {FirebaseApiService} from '../services/firebaseApi.service';
import * as _ from 'lodash';
import {DefaultData} from '../constants/defaultData.const';

@Component({
  selector: 'app-social-overview-container',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './social-overview-container.component.html',
  styleUrls: ['./social-overview-container.component.scss']
})
export class SocialOverviewContainerComponent implements OnInit {
  public userData: Array<IUser>;
  public showForm = {};
  public showButton: boolean;
  private _apiService: FirebaseApiService;
  private _defaultData = DefaultData.users;

  constructor(firebaseApiService: FirebaseApiService) {
    this._apiService = firebaseApiService;
  }

  public ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    this._apiService.getUsers(ApiSettings.firebaseApiBasepath).subscribe( users => {
      this.userData = users;
      this.showButton = this.compareModels(users);
      console.log('d', this._defaultData);
      console.log('d', this.showButton);

    });
  }

  public showEditForm(users: IUser): void {
    this.showForm[users.id] = !this.showForm[users.id];
  }

  private compareModels(modifiedModel): boolean {
    return _.isEqual(modifiedModel, this._defaultData);
  }
}
