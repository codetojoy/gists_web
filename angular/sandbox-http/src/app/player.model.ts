export enum Strategy {
  MaxCard = 'MaxCard',
  MinCard = 'MinCard',
  NearestCard = 'NearestCard',
  NextCard = 'NextCard',
  UserChoice = 'UserChoice',
}

export interface Player {
  id?: string;
  name: string;
  strategy: Strategy;
}
