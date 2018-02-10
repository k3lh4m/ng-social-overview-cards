import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../services/api.service";

@Component({
  selector: 'app-create-form',
  templateUrl: 'create-form.component.html',
  styleUrls: ['create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  private _apiService: ApiService;

  constructor(apiService: ApiService) {
    this._apiService = apiService
  }

  ngOnInit() {
  }

  public onSubmit(form: any): void {
    this._apiService.addRecord(form).subscribe();
  }

}
