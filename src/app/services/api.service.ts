import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {ApiSettings} from '../constants/api.const';
import {IUser} from '../interfaces/social-overview-users.interface';
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class ApiService {
  private _http: Http;

  constructor(http: Http) {
    this._http = http;
  }

  public getRecord(url: string) {
    return this._http.get(url)
      .map((response) => {
        return response.json();
      });
  }

  public getRecordById(id: string): Observable<IUser> {
    return this._http.get(ApiSettings.apiBasepath + 'users/' + id)
      .map(this.extractData)
  }

  public updateRecord(body: IUser, id: number): Observable<IUser> {
    let bodyObject = JSON.stringify(body);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.put(ApiSettings.apiBasepath + 'users/' + id, bodyObject, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  public deleteRecord(id: number): Observable<IUser> {
    return this._http.delete(ApiSettings.apiBasepath + 'users/' + id).map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public addRecord(body: IUser): Observable<IUser> {
    let bodyObject = JSON.stringify(body);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.post(ApiSettings.apiBasepath + 'users/', bodyObject, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  private extractData(res: Response) {
    let responseBody = res.json();
    return responseBody;
  }
}
