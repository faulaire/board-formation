export interface BoardI {
  id?: number;
  name: string;
  columns: any[];
}

export class Board implements BoardI {
  id: number = null;
  name = '';
  columns = [];

  constructor(options: BoardI = null) {
    if (options) {
      Object.assign(this, options);
    }
  }
}
