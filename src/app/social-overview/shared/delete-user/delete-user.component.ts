import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ApiService} from "../../../services/api.service";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
  @Input()
  appSocialOverviewUserId;

  @Output()
  appSocialOverviewUserDeletedUser: EventEmitter<any> = new EventEmitter<any>();

  private _apiService: ApiService;

  constructor(apiService: ApiService) {
    this._apiService = apiService
  }

  ngOnInit() {
  }

  public deleteRecord(id) {
    this._apiService.deleteRecord(id).subscribe( success => {
      this.appSocialOverviewUserDeletedUser.emit();
    })
  }

}
