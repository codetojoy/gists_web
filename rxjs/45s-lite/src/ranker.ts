import { Suit } from "./suit";
import { Ordinal } from "./ordinal";
import { Card } from "./card";
import { Mapper } from "./mapper";

export class Ranker {
  private _trump: Suit;

  // map Card.id to rank #
  private _offSuitBlack = {};

  id(oneBasedOrd: number, suit: Suit) {
    let mapper: Mapper = new Mapper();
    return mapper.getCardId(oneBasedOrd, suit);
  }

  init(map, ord, suit, value) {
    let id: number = this.id(ord, suit);
    map[id] = value;
  }

  constructor(trump: Suit) {
    this._trump = trump;

    this.init(this._offSuitBlack, Ordinal.KING, Suit.CLUBS, 12);
    this.init(this._offSuitBlack, Ordinal.QUEEN, Suit.CLUBS, 11);
    this.init(this._offSuitBlack, Ordinal.JACK, Suit.CLUBS, 10);
    this.init(this._offSuitBlack, Ordinal.ACE, Suit.CLUBS, 9);
    this.init(this._offSuitBlack, Ordinal.TWO, Suit.CLUBS, 8);
    this.init(this._offSuitBlack, Ordinal.THREE, Suit.CLUBS, 7);
    this.init(this._offSuitBlack, Ordinal.FOUR, Suit.CLUBS, 6);
    this.init(this._offSuitBlack, Ordinal.FIVE, Suit.CLUBS, 5);
    this.init(this._offSuitBlack, Ordinal.SIX, Suit.CLUBS, 4);
    this.init(this._offSuitBlack, Ordinal.SEVEN, Suit.CLUBS, 3);
    this.init(this._offSuitBlack, Ordinal.EIGHT, Suit.CLUBS, 2);
    this.init(this._offSuitBlack, Ordinal.NINE, Suit.CLUBS, 1);
    this.init(this._offSuitBlack, Ordinal.TEN, Suit.CLUBS, 0);
  }

  compare(a: number, b: number): number {
    return a == b ? 0 : a > b ? 1 : -1;
  }

  public customSortArray(cards: Card[]) {
    cards.sort((a, b) => {
      return this.customSort(a, b);
    });
  }

  public customSort(cardA: Card, cardB: Card): number {
    let valueA: number = 0;
    let valueB: number = 0;

    if (this._trump != Suit.CLUBS && cardA.suit === Suit.CLUBS) {
      let idA: number = cardA.id;
      valueA = this._offSuitBlack[idA];
    }
    if (this._trump != Suit.CLUBS && cardB.suit === Suit.CLUBS) {
      let idB: number = cardB.id;
      valueB = this._offSuitBlack[idB];
    }

    let result: number = this.compare(valueA, valueB);

    return result;
  }
}
