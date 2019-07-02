import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BoardsService} from '../../services/boards.service';
import {BoardI} from '../../interfaces/boardI';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public scrollbarConfig = {
    supressScrollX: true,
    supressScrollY: true
  };

  get boardId(): number {
    return this._boardId;
  }

  set boardId(value: number) {
    this._boardId = value;
    this.boardService.getById(value).subscribe((res: BoardI) => {
      this.board = res;
    });
  }

  constructor(private activatedRouter: ActivatedRoute, private boardService: BoardsService) { }

  public board: BoardI = null;
  private _boardId: number = null;

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      if (+params['boardId']) {
        this.boardId = +params['boardId'];
      }}
    );
  }

  public addColumn() {

  }

  public editBoard() {

  }
}
