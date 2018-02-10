import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ApiService} from "../../../services/api.service";

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  @Input()
  appSocialOverviewEditFormData;
  //
  // @Input()
  // set appSocialOverviewEditFormShowForm(showForm) {
  //  this.showEditForm = showForm;
  //  console.log('am I showing the form', showForm)
  // };

  @Output()
  appSocialOverviewEditFormUserUpdated: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  appSocialOverviewEditFormHideForm: EventEmitter<any> = new EventEmitter<any>();

  public showEditForm;
  private _apiService: ApiService;

  constructor(apiService: ApiService) {
    this._apiService = apiService;
  }

  ngOnInit() {
  }

  public onSubmit(form: any, id): void {
    this._apiService.updateRecord(form, id).subscribe( data => {
      this.appSocialOverviewEditFormUserUpdated.emit();
      this.hideForm()
    });
  }

  public hideForm() {
    this.appSocialOverviewEditFormHideForm.emit()
  }

}
