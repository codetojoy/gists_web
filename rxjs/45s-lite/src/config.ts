import { Player } from "./player";
import { Table } from "./table";

export class Config {
  private _table: Table;

  constructor() {
    let p1: Player = new Player("mozart");
    let p2: Player = new Player("beethoven");
    let p3: Player = new Player("chopin");
    let players: Player[] = [p1, p2, p3];
    this._table = new Table(players);
  }

  get table(): Table {
    return this._table;
  }
}
