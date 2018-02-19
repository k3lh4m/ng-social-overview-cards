import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {FirebaseApiService} from '../../../../services/firebaseApi.service';
import {IUser} from '../../../../interfaces/social-overview-users.interface';

@Component({
  selector: 'app-edit-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'edit-form.component.html',
  styleUrls: ['edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  @Input()
  appSocialOverviewEditFormData;

  @Output()
  appSocialOverviewEditFormHideForm: EventEmitter<any> = new EventEmitter<any>();

  public editUserLabels;
  private _apiService: FirebaseApiService;

  constructor(firebaseApiService: FirebaseApiService) {
    this._apiService = firebaseApiService;
  }

  ngOnInit() {
    this.setFormLabels();
  }

  public onSubmitFb(form: IUser, id: number | string): void {
    const idToString = id.toString;
    this._apiService.updateUser(idToString, form);
    this.hideForm();
  }

  public hideForm() {
    this.appSocialOverviewEditFormHideForm.emit();
  }

  private setFormLabels(): void {
    this.editUserLabels = {
      first_name: 'First Name',
      last_name: 'Last Name',
      location: 'Location',
      followers: 'Followers',
      following: 'Following',
      checkins: 'Checkins',
      image: 'Image URL'
    };
  }

}
