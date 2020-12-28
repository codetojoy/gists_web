import { Card } from "./card";
import { Player } from "./player";

// TODO: this is arguably a `Play` versus a `Bid`
export class Bid {
  private _card: Card;
  private _player: Player;

  constructor(card: Card, player: Player) {
    this._card = card;
    this._player = player;
  }

  public toString() {
    let result = `c: ${this._card.toString()} p: ${this.player.toString()}`;
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
