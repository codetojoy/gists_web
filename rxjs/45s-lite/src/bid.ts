import { Card } from "./card";
import { Player } from "./player";

export class Bid {
  private _card: Card;
  private _player: Player;

  constructor(card: Card, player: Player) {
    this._card = card;
    this._player = player;
  }

  public toString() {
    let result = ``;
    return result;
  }

  // ------------ getters / setters

  get card(): Card {
    return this._card;
  }

  get player(): Player {
    return this._player;
  }

  set player(value: Player) {
    this._player = value;
  }
}
