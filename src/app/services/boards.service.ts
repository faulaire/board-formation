import { Injectable } from '@angular/core';
import {LocalStorage} from 'ngx-store';
import {User} from '../interfaces/user';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Board} from '../interfaces/board';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  @LocalStorage() private _boards : Board[] = null;

  public load(): Observable<Board[]> {

    return this.httpClient.get(environment.api + 'boards').pipe( map((res: Board[]) => {
      return this._boards = res;
    }));
  }

  constructor(private httpClient: HttpClient, private router: Router) { }
}
