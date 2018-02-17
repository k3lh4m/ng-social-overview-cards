import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {ApiService} from "../../../../services/api.service";

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
  appSocialOverviewEditFormUserUpdated: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  appSocialOverviewEditFormHideForm: EventEmitter<any> = new EventEmitter<any>();

  public editUserLabels;
  private _apiService: ApiService;

  constructor(apiService: ApiService) {
    this._apiService = apiService;
  }

  ngOnInit() {
    this.setFormLabels()
  }

  public onSubmit(form: any, id): void {
    this._apiService.updateRecord(form, id).subscribe(() => {
      this.appSocialOverviewEditFormUserUpdated.emit();
      this.hideForm()
    });
  }

  public hideForm() {
    this.appSocialOverviewEditFormHideForm.emit()
  }

  private setFormLabels():void {
    this.editUserLabels = {
      first_name: "First Name",
      last_name: "Last Name",
      location: "Location",
      followers: "Followers",
      following: "Following",
      checkins: "Checkins",
      image: "Image URL"
    }
  }

}
