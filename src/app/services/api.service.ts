import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {ApiSettings} from '../constants/api.const';
import {IUser} from '../interfaces/social-overview-users.interface';
import {Observable} from "rxjs";
import 'rxjs/Rx';

const httpHeaders = {
  header: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ApiService {
  private _http: HttpClient;

  constructor(httpClient: HttpClient) {
    this._http = httpClient;
  }

  public getRecord(url: string) {
    return this._http.get(url);
  }

  public getRecordById(id: string): Observable<IUser> {
    return this._http.get(ApiSettings.apiBasepath + 'users/' + id);
  }

  public updateRecord(body: IUser, id: number): Observable<IUser> {
    let bodyObject = JSON.stringify(body);

    return this._http.put(ApiSettings.apiBasepath + 'users/' + id, bodyObject, httpHeaders)
  }

  public deleteRecord(id: number): Observable<IUser> {
    return this._http.delete(ApiSettings.apiBasepath + 'users/' + id);
  }

  public addRecord(body: IUser): Observable<IUser> {
    let bodyObject = JSON.stringify(body);

    return this._http.post(ApiSettings.apiBasepath + 'users/', bodyObject, httpHeaders);
  }
}
