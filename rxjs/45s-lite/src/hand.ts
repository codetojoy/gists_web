import { Card } from "./card";
import { Deck } from "./deck";
import { Config } from "./config";
import { Table } from "./table";
import { of } from "rxjs";
import { tap } from "rxjs/operators";

export class Hand {
  private _cards: Card[] = [];

  dealCard(card: Card) {
    this._cards.push(card);
  }

  public toString() {
    let result = ``;
    this._cards.map((card) => (result += ` ${card.toString()}`));

    return result;
  }

  // ------------ getters / setters

  get cards(): Card[] {
    return this._cards;
  }

  set cards(value: Card[]) {
    this._cards = value;
  }
}
