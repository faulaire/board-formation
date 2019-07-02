import {Component, Input, OnInit} from '@angular/core';
import {Column} from '../../interfaces/column';
import {Task} from '../../interfaces/task';
import {BoardsService} from '../../services/boards.service';
import {ColumnService} from '../../services/column.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  get column(): Column {
    return this._column;
  }

  @Input('column') set column(value: Column) {
    if (value != null && this._column === null) {
      this.columnService.getById(value.id).subscribe((res: Column) => {
        console.log(res);
        this._column = res;
        this.tasks = this._column.tasks;
      });
    } else if ( this._column != null ) {
      this._column = value;
    }
  }

  public tasks: Task[] = [];
  private _column: Column = null;

  constructor(private columnService: ColumnService) { }

  ngOnInit() {
  }

  public editColumn(column: Column) {
    
  }
}
