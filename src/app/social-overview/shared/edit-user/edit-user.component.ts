import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {ApiService} from "../../../services/api.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  @Input()
  appSocialOverviewEditUserId: number;

  @Output()
  appSocialOverviewUserEdited: EventEmitter<any> = new EventEmitter<any>();

  private _http: ApiService;

  constructor(apiService: ApiService ) {
    this._http = apiService
  }

  ngOnInit() {
  }

  public editUser(id: string) {
    this.appSocialOverviewUserEdited.emit()
  }

}
