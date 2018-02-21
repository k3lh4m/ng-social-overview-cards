import {AngularFireDatabase} from 'angularfire2/database';
import {Injectable} from '@angular/core';
import {IUser} from '../interfaces/social-overview-users.interface';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FirebaseApiService {
  constructor(private db: AngularFireDatabase) {
  }

  public getUsers(url: string): Observable<IUser[]>  {
    return this.db.list(url).valueChanges();
  }

  public deleteUser(id?: string): any {
    return this.db.list('/users').remove(id);
  }

  public updateUser(id, form: IUser): any {
    return this.db.list('/users').update(id, form);
  }
}
