import {Component, Output, Input, EventEmitter} from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {IEditUser} from "./edit-user.component.interface";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements IEditUser {
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
