import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BoardsService} from '../../services/boards.service';
import {Board} from '../../interfaces/board';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  public _boards : Board[];
  ngOnInit() {
    this.boardsService.load().subscribe((res: Board[]) => {
      this._boards = res;
    });
  }

  constructor(private boardsService: BoardsService, private router: Router) { }
}
