import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {ApiService} from "../services/api.service";
import {ApiSettings} from "../constants/api.const";
import {IUser} from "../interfaces/social-overview-users.interface";

@Component({
  selector: 'app-social-overview-container',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './social-overview-container.component.html',
  styleUrls: ['./social-overview-container.component.scss']
})
export class SocialOverviewContainerComponent implements OnInit {
  public userData: Array<IUser>;
  public showForm = {};
  private _apiService: ApiService;

  constructor(apiService: ApiService) {
    this._apiService = apiService
  }

  public ngOnInit(): void {
    this.getUsersData();
  }

  public getUsersData(): void  {
    this._apiService.getUsers(ApiSettings.apiBasepath + 'users/').subscribe(data => {
      this.userData = data;
      return this.userData;
    })
  }

  public showEditForm(users: IUser): void {
    this.showForm[users.id] = !this.showForm[users.id]
  }
}
