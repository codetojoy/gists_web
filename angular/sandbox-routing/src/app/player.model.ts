// TODO: strategy should be an enum

export class Player {
  public id: number;
  public name: string;
  public strategy: string;

  constructor(id: number, name: string, strategy: string) {
    this.id = id;
    this.name = name;
    this.strategy = strategy;
  }
}
