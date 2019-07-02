import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Column} from '../interfaces/column';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {BoardI} from '../interfaces/boardI';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ColumnService {
  public getById(id: number, tasks = true): Observable<Column> {
    let url = environment.api + 'columns/' + id;
    if (tasks) {
      url = url + '?_embed=tasks';
    }
    return this.httpClient.get(url).pipe( map((res: Column) => {
      return res;
    }));
  }

  constructor(private httpClient: HttpClient, private router: Router) { }
}
