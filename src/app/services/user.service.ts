import { Injectable } from '@angular/core';
import {LocalStorage} from 'ngx-store';
import {Observable} from 'rxjs';
import {User} from '../interfaces/user';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  get userConnected(): User {
    return this._userConnected;
  }

  set userConnected(value: User) {
    this._userConnected = value;
  }

  @LocalStorage() private _userConnected : User = null;

  public login(): Observable<User> {

    return this.httpClient.get(environment.api + 'users').pipe( map((res: User) => {
      return this._userConnected = res[0];
    }));
  }

  constructor(private httpClient: HttpClient, private router: Router) { }
}
