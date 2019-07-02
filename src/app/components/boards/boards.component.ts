import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BoardsService} from '../../services/boards.service';
import {Board, BoardI} from '../../interfaces/boardI';
import {ModalBoardComponent} from '../shared-modal/modal-board/modal-board.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  public boards: BoardI[];
  public columns = 3;
  public rowHeight = '4:2';

  ngOnInit() {
    this.boardsService.load().subscribe((res: BoardI[]) => {
      this.boards = res;
    });
  }

  public delete(board: BoardI, index = null) {
    this.boardsService.delete(board.id).subscribe(() => {
      this.boards = this.boards.filter(item => +item.id !== +board.id);
    });
  }

  constructor(private boardsService: BoardsService, private dialog: MatDialog, private router: Router) { }

  public addOrEdit(board: BoardI = null) {
    if (!board) {
      board = new Board();
    }

    const dialog = this.dialog.open(ModalBoardComponent,
      {width: '500px',
             data: board});

    dialog.afterClosed().subscribe((editedItem: BoardI) => {
      if (editedItem) {
        board.name = editedItem.name;
        this.boardsService.post(board).subscribe( (item: BoardI) => {
          if (board.id) {
            board = item;
          } else {
            this.boards.push(item);
          }
        });
      }
    });

  }

}
