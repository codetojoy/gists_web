import { Card } from "./card";
import { Player } from "./player";

import { of } from "rxjs";
import { tap } from "rxjs/operators";
import { Suit } from "./suit";

export class Table {
  private _players: Player[];
  private _topCard: Card;
  private _trumpSuit: Suit;
  private _leadingCard: Card;
  private _roundNum: number = 0;

  constructor(players: Player[]) {
    this._players = players;
  }

  public bumpRoundNum() {
    this._roundNum++;
  }

  public toString() {
    let result = `\n[${this._roundNum}] f: ${this._topCard} t: ${this._trumpSuit} l: ${this._leadingCard}\n`;

    this._players.map((p) => (result += `p: ${p.toString()}\n`));

    return result;
  }

  // ---------- getters / setters

  get roundNum(): number {
    return this._roundNum;
  }

  get topCard(): Card {
    return this._topCard;
  }

  get trumpSuit(): Suit {
    return this._trumpSuit;
  }

  set leadingCard(value: Card) {
    this._leadingCard = value;
  }

  set topCard(value: Card) {
    this._topCard = value;
    this._trumpSuit = value.suit;
  }

  get players(): Player[] {
    return this._players;
  }

  /*
  set players(value: Player[]) {
    this._players = value;
  }
  */
}
