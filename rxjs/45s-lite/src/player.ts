import { Card } from "./card";
import { Deck } from "./deck";
import { Config } from "./config";
import { Table } from "./table";
import { Hand } from "./hand";
import { Bid } from "./bid";
import { Suit } from "./suit";
import { Ranker } from "./ranker";
import { Strategies, Strategy } from "./strategy";
import { Util } from "./util";

export class Player {
  private _name: string;
  private _hand: Hand;
  private _strategy: Strategy;

  constructor(name: string) {
    this._name = name;
    this._hand = new Hand();
    this._strategy = new Strategies().getStrategy("default");
  }

  public getNumCardsInHand() {
    return this._hand.getNumCards();
  }

  public shuffleHandForTesting() {
    this._hand.shuffleForTesting();
  }

  public getBid(topCard: Card, trumpSuit: Suit, leadingSuit: Suit): Bid {
    let card: Card = this._strategy.select(this._hand, trumpSuit, leadingSuit);

    let bid: Bid = new Bid(card, this);
    return bid;
  }

  public toString() {
    let result = `${this._name} ${this._hand.toString()}`;
    return result;
  }

  public notifyGameStart(trump: Suit) {
    this._hand.sortCards(trump);
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
