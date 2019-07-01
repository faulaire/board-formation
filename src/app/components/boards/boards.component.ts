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

  public boards: Board[];
  public columns = 3;
  public rowHeight = '4:2';

  ngOnInit() {
    this.boardsService.load().subscribe((res: Board[]) => {
      this.boards = res;
    });
  }

  public add() {}
  public edit(board: Board) {}
  public delete(board: Board, index) {}

  constructor(private boardsService: BoardsService, private router: Router) { }
}
