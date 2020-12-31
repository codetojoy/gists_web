import { Bid } from "./bid";
import { Card } from "./card";
import { Hand } from "./hand";
import { Strategies, Strategy } from "./strategy";
import { Suit } from "./suit";
import { Trick } from "./trick";

export class Player {
  private _name: string;
  private _hand: Hand;
  private _strategy: Strategy;

  constructor(name: string, hand?: Hand) {
    this._name = name;
    this._hand = hand == null ? new Hand() : hand;
    this._strategy = new Strategies().getStrategy("default");
  }

  public getNumCardsInHand() {
    return this._hand.getNumCards();
  }

  public handContainsCardOfSuit(suit: Suit) {
    return this._hand.containsCardOfSuit(suit);
  }

  public shuffleHandForTesting() {
    this._hand.shuffleForTesting();
  }

  public getBid(trick: Trick): Bid {
    let card: Card = this._strategy.select(this._hand, trick);

    let bid: Bid = new Bid(card, this);
    return bid;
  }

  public toString() {
    let result = `${this._name} ${this._hand.toString()}`;
    return result;
  }

  public notifyTrumpSuit(trump: Suit) {
    this._hand.sortCards(trump);
  }

  public notifyLeadingSuitForRound(trumpSuit: Suit, leadingSuit: Suit) {
    this._hand.sortCards(trumpSuit, leadingSuit);
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
