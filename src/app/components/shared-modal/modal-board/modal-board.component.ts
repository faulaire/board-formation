import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {BoardI} from '../../../interfaces/boardI';

@Component({
  selector: 'app-modal-board',
  templateUrl: './modal-board.component.html',
  styleUrls: ['./modal-board.component.scss']
})
export class ModalBoardComponent implements OnInit {

  public editionMode = false;
  public title = `Ajout d'un nouveau board`;

  public nameCtrl: FormControl = new FormControl(
    '',
    [Validators.required]
  )

  constructor(public dialogRef: MatDialogRef<ModalBoardComponent>, @Inject(MAT_DIALOG_DATA) public board: BoardI) {
    const {id, name} = this.board;
    if (id && name) {
      this.editionMode = true;
      this.title = `Edition du board ${name}`;
    }
    this.nameCtrl.patchValue(name);
  }

  public save() {
    this.board.name = this.nameCtrl.value;
    this.dialogRef.close(this.board);
  }

  ngOnInit() {
  }

}
