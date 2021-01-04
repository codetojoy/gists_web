import { Card } from "./card";
import { Player } from "./player";
import { Suit } from "./suit";
import { Trick } from "./trick";

export class Table {
  private _players: Player[];
  private _topCard: Card;
  private _roundNum: number = 0;
  private _tricks: Trick[] = [];

  // maybe these move into Trick?
  private _trumpSuit: Suit;
  private _leadingCard: Card;

  constructor(players: Player[]) {
    this._players = players;
  }

  public addTrick(trick: Trick) {
    this._tricks.push(trick);
  }

  public bumpRoundNum() {
    this._roundNum++;
  }

  public notifyGameStart() {
    let trump: Suit = this.topCard.suit;
    this.players.forEach((player) => player.notifyTrumpSuit(trump));
  }

  public toString() {
    let result = `\n[${this._roundNum}] f: ${this._topCard} t: ${this._trumpSuit} l: ${this._leadingCard}\n`;

    this._players.map((p) => (result += `p: ${p.toString()}\n`));

    this._tricks.map((t) => (result += `t: ${t.toString()}`));

    return result;
  }

  // ---------- getters / setters

  get tricks(): Trick[] {
    return this._tricks;
  }

  get roundNum(): number {
    return this._roundNum;
  }

  get topCard(): Card {
    return this._topCard;
  }

  get trumpSuit(): Suit {
    return this._trumpSuit;
  }

  get leadingCard() {
    return this._leadingCard;
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
}
