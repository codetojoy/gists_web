export enum Strategy {
  MaxCard = 'MaxCard',
  MinCard = 'MinCard',
  NearestCard = 'NearestCard',
  NextCard = 'NextCard',
  UserChoice = 'UserChoice',
}

export class Player {
  public id: number;
  public name: string;
  public strategy: Strategy;

  constructor(id: number, name: string, strategy: Strategy) {
    this.id = id;
    this.name = name;
    this.strategy = strategy;
  }
}
