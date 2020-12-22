import { Suit } from "./suit";
import { Ordinal } from "./ordinal";
import { Card } from "./card";
import { Mapper } from "./mapper";

export class Ranker {
  private readonly unknownValue: number = -1;
  private _trump: Suit;

  // map Card.id to rank #
  private _offSuitBlack = {};
  private _offSuitRed = {};
  private _trumpClubs = {};

  init(map: any, ord: Ordinal, suit: Suit, value: number) {
    let id: number = new Card(ord, suit).id;
    map[id] = value;
  }

  constructor(trump: Suit) {
    this._trump = trump;

    let value: number = 0;

    // off-suit CLUBS
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

    // off-suit SPADES
    this.init(this._offSuitBlack, Ordinal.KING, Suit.SPADES, 12);
    this.init(this._offSuitBlack, Ordinal.QUEEN, Suit.SPADES, 11);
    this.init(this._offSuitBlack, Ordinal.JACK, Suit.SPADES, 10);
    this.init(this._offSuitBlack, Ordinal.ACE, Suit.SPADES, 9);
    this.init(this._offSuitBlack, Ordinal.TWO, Suit.SPADES, 8);
    this.init(this._offSuitBlack, Ordinal.THREE, Suit.SPADES, 7);
    this.init(this._offSuitBlack, Ordinal.FOUR, Suit.SPADES, 6);
    this.init(this._offSuitBlack, Ordinal.FIVE, Suit.SPADES, 5);
    this.init(this._offSuitBlack, Ordinal.SIX, Suit.SPADES, 4);
    this.init(this._offSuitBlack, Ordinal.SEVEN, Suit.SPADES, 3);
    this.init(this._offSuitBlack, Ordinal.EIGHT, Suit.SPADES, 2);
    this.init(this._offSuitBlack, Ordinal.NINE, Suit.SPADES, 1);
    this.init(this._offSuitBlack, Ordinal.TEN, Suit.SPADES, 0);

    // off-suit DIAMONDS
    this.init(this._offSuitRed, Ordinal.KING, Suit.DIAMONDS, 12);
    this.init(this._offSuitRed, Ordinal.QUEEN, Suit.DIAMONDS, 11);
    this.init(this._offSuitRed, Ordinal.JACK, Suit.DIAMONDS, 10);
    this.init(this._offSuitRed, Ordinal.TEN, Suit.DIAMONDS, 9);
    this.init(this._offSuitRed, Ordinal.NINE, Suit.DIAMONDS, 8);
    this.init(this._offSuitRed, Ordinal.EIGHT, Suit.DIAMONDS, 7);
    this.init(this._offSuitRed, Ordinal.SEVEN, Suit.DIAMONDS, 6);
    this.init(this._offSuitRed, Ordinal.SIX, Suit.DIAMONDS, 5);
    this.init(this._offSuitRed, Ordinal.FIVE, Suit.DIAMONDS, 4);
    this.init(this._offSuitRed, Ordinal.FOUR, Suit.DIAMONDS, 3);
    this.init(this._offSuitRed, Ordinal.THREE, Suit.DIAMONDS, 2);
    this.init(this._offSuitRed, Ordinal.TWO, Suit.DIAMONDS, 1);
    this.init(this._offSuitRed, Ordinal.ACE, Suit.DIAMONDS, 0);

    // off-suit HEARTS
    this.init(this._offSuitRed, Ordinal.KING, Suit.HEARTS, 12);
    this.init(this._offSuitRed, Ordinal.QUEEN, Suit.HEARTS, 11);
    this.init(this._offSuitRed, Ordinal.JACK, Suit.HEARTS, 10);
    this.init(this._offSuitRed, Ordinal.TEN, Suit.HEARTS, 9);
    this.init(this._offSuitRed, Ordinal.NINE, Suit.HEARTS, 8);
    this.init(this._offSuitRed, Ordinal.EIGHT, Suit.HEARTS, 7);
    this.init(this._offSuitRed, Ordinal.SEVEN, Suit.HEARTS, 6);
    this.init(this._offSuitRed, Ordinal.SIX, Suit.HEARTS, 5);
    this.init(this._offSuitRed, Ordinal.FIVE, Suit.HEARTS, 4);
    this.init(this._offSuitRed, Ordinal.FOUR, Suit.HEARTS, 3);
    this.init(this._offSuitRed, Ordinal.THREE, Suit.HEARTS, 2);
    this.init(this._offSuitRed, Ordinal.TWO, Suit.HEARTS, 1);

    // trump CLUBS
    this.init(this._trumpClubs, Ordinal.FIVE, Suit.CLUBS, 14);
    this.init(this._trumpClubs, Ordinal.JACK, Suit.CLUBS, 13);
    this.init(this._trumpClubs, Ordinal.ACE, Suit.HEARTS, 12);
    this.init(this._trumpClubs, Ordinal.ACE, Suit.CLUBS, 11);
    this.init(this._trumpClubs, Ordinal.KING, Suit.CLUBS, 10);
    this.init(this._trumpClubs, Ordinal.QUEEN, Suit.CLUBS, 9);
    this.init(this._trumpClubs, Ordinal.TWO, Suit.CLUBS, 8);
    this.init(this._trumpClubs, Ordinal.THREE, Suit.CLUBS, 7);
    this.init(this._trumpClubs, Ordinal.FOUR, Suit.CLUBS, 6);
    this.init(this._trumpClubs, Ordinal.SIX, Suit.CLUBS, 5);
    this.init(this._trumpClubs, Ordinal.SEVEN, Suit.CLUBS, 4);
    this.init(this._trumpClubs, Ordinal.EIGHT, Suit.CLUBS, 3);
    this.init(this._trumpClubs, Ordinal.NINE, Suit.CLUBS, 2);
    this.init(this._trumpClubs, Ordinal.TEN, Suit.CLUBS, 1);
  }

  compare(a: number, b: number): number {
    return a == b ? 0 : a > b ? 1 : -1;
  }

  public customSortArray(cards: Card[]) {
    cards.sort((a, b) => {
      return this.customSort(a, b);
    });
  }

  getValueFromId(card: Card): number {
    let value: number = this.unknownValue;
    let id: number = card.id;

    if (!card.isTrump(this._trump)) {
      if (card.isBlack()) {
        value = this._offSuitBlack[id];
      } else if (card.isRed()) {
        value = this._offSuitRed[id];
      }
    } else {
      if (card.suit === Suit.CLUBS || card.isAceOfHearts()) {
        value = this._trumpClubs[id];
      }
    }

    return value;
  }

  public customSort(cardA: Card, cardB: Card): number {
    let valueA: number = this.getValueFromId(cardA);
    let valueB: number = this.getValueFromId(cardB);

    if (valueA == this.unknownValue || valueB == this.unknownValue) {
      throw new TypeError(`internal error ${cardA.toString()} ${cardB.toString()}`);
    }

    let result: number = this.compare(valueA, valueB);

    return result;
  }
}
