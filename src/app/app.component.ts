import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ApiService} from "./services/api.service";

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  public dataUrl = 'http://localhost:3000/users';
  public userData;

  private _apiService;

  constructor(apiService: ApiService) {
    this._apiService = apiService;
  }

  public ngOnInit(): void {
    this.getUsersData();
  }

  public getUsersData() {
    this._apiService.getRecord(this.dataUrl).subscribe(data => {
      this.userData = data;
      return this.userData;
    });
  }
}
