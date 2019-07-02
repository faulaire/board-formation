import { Injectable } from '@angular/core';
import {LocalStorage} from 'ngx-store';
import {User} from '../interfaces/user';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {BoardI} from '../interfaces/boardI';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  @LocalStorage() private _boards : BoardI[] = null;

  public load(): Observable<BoardI[]> {

    return this.httpClient.get(environment.api + 'boards').pipe( map((res: BoardI[]) => {
      return this._boards = res;
    }));
  }

  public post(board: BoardI): Observable<BoardI> {
    if (+board.id) {
      return this.httpClient.patch(environment.api + `boards/${board.id}`, board)
        .pipe(map((res: BoardI) => {
          return res;
      }));
    } else {
      return this.httpClient.post(environment.api + `boards`, board)
        .pipe(map((res: BoardI) => {
          return res;
        }));
    }
  }

  public delete(boardId: number): Observable<BoardI> {
    return this.httpClient.delete(environment.api + `boards/${boardId}`)
      .pipe(map((res: BoardI) => {
        return res;
      }));
  }

  constructor(private httpClient: HttpClient, private router: Router) { }
}
