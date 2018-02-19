import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ApiSettings} from '../constants/api.const';
import {IUser} from '../interfaces/social-overview-users.interface';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService {
  private _http: HttpClient;
  private _httpHeaders = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(httpClient: HttpClient) {
    this._http = httpClient;
  }

  public getUsers(url: string): Observable<IUser[]>  {
    return this._http.get<IUser[]>(url);
  }

  public getRecordById(id: string): Observable<IUser> {
    return this._http.get(ApiSettings.apiBasepath + 'users/' + id);
  }

  public updateRecord(body: IUser, id: number): Observable<any> {
    return this._http.put(ApiSettings.apiBasepath + 'users/' + id, body, this._httpHeaders);
  }

  public deleteRecord(id: number): Observable<any> {
    return this._http.delete(ApiSettings.apiBasepath + 'users/' + id);
  }

  public addRecord(body: IUser): Observable<any> {
    const bodyObject = JSON.stringify(body);

    return this._http.post(ApiSettings.apiBasepath + 'users/', bodyObject, this._httpHeaders);
  }
}
