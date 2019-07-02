import {Task} from './task';

export interface Column {
  id?: number;
  name: string;
  boardId: number;
  tasks ?: Task[];
}
