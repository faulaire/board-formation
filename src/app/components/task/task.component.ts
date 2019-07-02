import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../interfaces/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  get task(): Task {
    return this._task;
  }

  @Input('task') set task(value: Task) {
    this._task = value;
  }

  constructor() { }

  private _task: Task = null;

  ngOnInit() {
  }

}
