import { Card } from "./card";
import { Deck } from "./deck";
import { Config } from "./config";
import { Table } from "./table";
import { Hand } from "./hand";
import { Bid } from "./bid";
import { Suit } from "./suit";

export class Player {
  private _name: string;
  private _hand: Hand;

  constructor(name: string) {
    this._name = name;
    this._hand = new Hand();
  }

  public getBid(topCard: Card, leadingCard: Card, trumpSuit: Suit): Bid {
    let card: Card = null;

    if (leadingCard == null) {
      card = this._hand.cards.shift();
    }

    let bid: Bid = new Bid(card, this);
    return bid;
  }

  public toString() {
    let result = `${this._name} ${this._hand.toString()}`;
    return result;
  }

  // -------------- getters / setters

  get name(): string {
    return this._name;
  }

  get hand(): Hand {
    return this._hand;
  }

  set hand(hand: Hand) {
    this._hand = hand;
  }
}
