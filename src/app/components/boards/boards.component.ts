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

  ngOnInit() {
    this.boardsService.load().subscribe((res: Board[]) => {
      console.log(res);
    });
  }

  constructor(private boardsService: BoardsService, private router: Router) { }
}
