import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {IDeleteUser} from "./delete-user.component.interface";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements IDeleteUser {
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
