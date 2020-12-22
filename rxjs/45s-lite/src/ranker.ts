import { Suit } from "./suit";
import { Ordinal } from "./ordinal";
import { Card } from "./card";
import { Mapper } from "./mapper";

abstract class BaseMap {
  // map Card.id to rank #
  protected _map = {};

  init(ord: Ordinal, suit: Suit, value: number) {
    let id: number = new Card(ord, suit).id;
    this._map[id] = value;
  }

  getAt(id: number): number {
    return this._map[id];
  }

  setAt(id: number, value: number) {
    this._map[id] = value;
  }
}

class OffsuitBlackMap extends BaseMap {
  constructor() {
    super();
    let value: number = 0;

    // off-suit CLUBS
    value = 1;
    this.init(Ordinal.TEN, Suit.CLUBS, value++);
    this.init(Ordinal.NINE, Suit.CLUBS, value++);
    this.init(Ordinal.EIGHT, Suit.CLUBS, value++);
    this.init(Ordinal.SEVEN, Suit.CLUBS, value++);
    this.init(Ordinal.SIX, Suit.CLUBS, value++);
    this.init(Ordinal.FIVE, Suit.CLUBS, value++);
    this.init(Ordinal.FOUR, Suit.CLUBS, value++);
    this.init(Ordinal.THREE, Suit.CLUBS, value++);
    this.init(Ordinal.TWO, Suit.CLUBS, value++);
    this.init(Ordinal.ACE, Suit.CLUBS, value++);
    this.init(Ordinal.JACK, Suit.CLUBS, value++);
    this.init(Ordinal.QUEEN, Suit.CLUBS, value++);
    this.init(Ordinal.KING, Suit.CLUBS, value++);

    if (value != 14) {
      throw new TypeError(`internal error value: ${value}`);
    }

    // off-suit SPADES
    value = 1;
    this.init(Ordinal.TEN, Suit.SPADES, value++);
    this.init(Ordinal.NINE, Suit.SPADES, value++);
    this.init(Ordinal.EIGHT, Suit.SPADES, value++);
    this.init(Ordinal.SEVEN, Suit.SPADES, value++);
    this.init(Ordinal.SIX, Suit.SPADES, value++);
    this.init(Ordinal.FIVE, Suit.SPADES, value++);
    this.init(Ordinal.FOUR, Suit.SPADES, value++);
    this.init(Ordinal.THREE, Suit.SPADES, value++);
    this.init(Ordinal.TWO, Suit.SPADES, value++);
    this.init(Ordinal.ACE, Suit.SPADES, value++);
    this.init(Ordinal.JACK, Suit.SPADES, value++);
    this.init(Ordinal.QUEEN, Suit.SPADES, value++);
    this.init(Ordinal.KING, Suit.SPADES, value++);

    if (value != 14) {
      throw new TypeError(`internal error value: ${value}`);
    }
  }
}

class OffsuitRedMap extends BaseMap {
  constructor() {
    super();
    let value: number = 0;

    // off-suit DIAMONDS
    value = 1;
    this.init(Ordinal.ACE, Suit.DIAMONDS, value++);
    this.init(Ordinal.TWO, Suit.DIAMONDS, value++);
    this.init(Ordinal.THREE, Suit.DIAMONDS, value++);
    this.init(Ordinal.FOUR, Suit.DIAMONDS, value++);
    this.init(Ordinal.FIVE, Suit.DIAMONDS, value++);
    this.init(Ordinal.SIX, Suit.DIAMONDS, value++);
    this.init(Ordinal.SEVEN, Suit.DIAMONDS, value++);
    this.init(Ordinal.EIGHT, Suit.DIAMONDS, value++);
    this.init(Ordinal.NINE, Suit.DIAMONDS, value++);
    this.init(Ordinal.TEN, Suit.DIAMONDS, value++);
    this.init(Ordinal.JACK, Suit.DIAMONDS, value++);
    this.init(Ordinal.QUEEN, Suit.DIAMONDS, value++);
    this.init(Ordinal.KING, Suit.DIAMONDS, value++);

    if (value != 14) {
      throw new TypeError(`internal error value: ${value}`);
    }

    // off-suit HEARTS
    value = 2;
    this.init(Ordinal.TWO, Suit.HEARTS, value++);
    this.init(Ordinal.THREE, Suit.HEARTS, value++);
    this.init(Ordinal.FOUR, Suit.HEARTS, value++);
    this.init(Ordinal.FIVE, Suit.HEARTS, value++);
    this.init(Ordinal.SIX, Suit.HEARTS, value++);
    this.init(Ordinal.SEVEN, Suit.HEARTS, value++);
    this.init(Ordinal.EIGHT, Suit.HEARTS, value++);
    this.init(Ordinal.NINE, Suit.HEARTS, value++);
    this.init(Ordinal.TEN, Suit.HEARTS, value++);
    // this.init(Ordinal.ACE, Suit.HEARTS, value++);
    this.init(Ordinal.JACK, Suit.HEARTS, value++);
    this.init(Ordinal.QUEEN, Suit.HEARTS, value++);
    this.init(Ordinal.KING, Suit.HEARTS, value++);

    if (value != 14) {
      throw new TypeError(`internal error value: ${value}`);
    }
  }
}

export class Ranker {
  private readonly unknownValue: number = -1;
  private _trump: Suit;

  // map Card.id to rank #
  private _offSuitBlack = new OffsuitBlackMap();
  private _offSuitRed = new OffsuitRedMap();

  private _trumpClubs = {};
  private _trumpSpades = {};

  private _trumpDiamonds = {};
  private _trumpHearts = {};

  init(map: any, ord: Ordinal, suit: Suit, value: number) {
    let id: number = new Card(ord, suit).id;

    if (map instanceof BaseMap) {
      map.setAt(id, value);
    } else {
      map[id] = value;
    }
  }

  constructor(trump: Suit) {
    this._trump = trump;

    let value: number = 0;

    // trump CLUBS
    value = 1;
    let suit: Suit = Suit.CLUBS;
    this.init(this._trumpClubs, Ordinal.TEN, suit, value++);
    this.init(this._trumpClubs, Ordinal.NINE, suit, value++);
    this.init(this._trumpClubs, Ordinal.EIGHT, suit, value++);
    this.init(this._trumpClubs, Ordinal.SEVEN, suit, value++);
    this.init(this._trumpClubs, Ordinal.SIX, suit, value++);
    this.init(this._trumpClubs, Ordinal.FOUR, suit, value++);
    value++;
    this.init(this._trumpClubs, Ordinal.THREE, suit, value++);
    this.init(this._trumpClubs, Ordinal.TWO, suit, value++);
    value++;
    value++;
    this.init(this._trumpClubs, Ordinal.QUEEN, suit, value++);
    this.init(this._trumpClubs, Ordinal.KING, suit, value++);
    this.init(this._trumpClubs, Ordinal.ACE, suit, value++);
    this.init(this._trumpClubs, Ordinal.ACE, Suit.HEARTS, value++);
    this.init(this._trumpClubs, Ordinal.JACK, suit, value++);
    this.init(this._trumpClubs, Ordinal.FIVE, suit, value++);

    if (value != 18) {
      throw new TypeError(`internal error value: ${value}`);
    }

    // trump SPADES
    suit = Suit.SPADES;
    value = 1;
    this.init(this._trumpSpades, Ordinal.TEN, suit, value++);
    this.init(this._trumpSpades, Ordinal.NINE, suit, value++);
    this.init(this._trumpSpades, Ordinal.EIGHT, suit, value++);
    this.init(this._trumpSpades, Ordinal.SEVEN, suit, value++);
    this.init(this._trumpSpades, Ordinal.SIX, suit, value++);
    value++;
    this.init(this._trumpSpades, Ordinal.FOUR, suit, value++);
    this.init(this._trumpSpades, Ordinal.THREE, suit, value++);
    this.init(this._trumpSpades, Ordinal.TWO, suit, value++);
    value++;
    value++;
    this.init(this._trumpSpades, Ordinal.QUEEN, suit, value++);
    this.init(this._trumpSpades, Ordinal.KING, suit, value++);
    this.init(this._trumpSpades, Ordinal.ACE, suit, value++);
    this.init(this._trumpSpades, Ordinal.ACE, Suit.HEARTS, value++);
    this.init(this._trumpSpades, Ordinal.JACK, suit, value++);
    this.init(this._trumpSpades, Ordinal.FIVE, suit, value++);

    if (value != 18) {
      throw new TypeError(`internal error value: ${value}`);
    }

    // trump DIAMONDS
    suit = Suit.DIAMONDS;
    value = 2;
    this.init(this._trumpDiamonds, Ordinal.TWO, suit, value++);
    this.init(this._trumpDiamonds, Ordinal.THREE, suit, value++);
    this.init(this._trumpDiamonds, Ordinal.FOUR, suit, value++);
    value++;
    this.init(this._trumpDiamonds, Ordinal.SIX, suit, value++);
    this.init(this._trumpDiamonds, Ordinal.SEVEN, suit, value++);
    this.init(this._trumpDiamonds, Ordinal.EIGHT, suit, value++);
    this.init(this._trumpDiamonds, Ordinal.NINE, suit, value++);
    this.init(this._trumpDiamonds, Ordinal.TEN, suit, value++);
    value++;
    this.init(this._trumpDiamonds, Ordinal.QUEEN, suit, value++);
    this.init(this._trumpDiamonds, Ordinal.KING, suit, value++);
    this.init(this._trumpDiamonds, Ordinal.ACE, suit, value++);
    this.init(this._trumpDiamonds, Ordinal.ACE, Suit.HEARTS, value++);
    this.init(this._trumpDiamonds, Ordinal.JACK, suit, value++);
    this.init(this._trumpDiamonds, Ordinal.FIVE, suit, value++);

    if (value != 18) {
      throw new TypeError(`internal error value: ${value}`);
    }

    // trump HEARTS
    suit = Suit.HEARTS;
    value = 2;
    this.init(this._trumpHearts, Ordinal.TWO, suit, value++);
    this.init(this._trumpHearts, Ordinal.THREE, suit, value++);
    this.init(this._trumpHearts, Ordinal.FOUR, suit, value++);
    value++;
    this.init(this._trumpHearts, Ordinal.SIX, suit, value++);
    this.init(this._trumpHearts, Ordinal.SEVEN, suit, value++);
    this.init(this._trumpHearts, Ordinal.EIGHT, suit, value++);
    this.init(this._trumpHearts, Ordinal.NINE, suit, value++);
    this.init(this._trumpHearts, Ordinal.TEN, suit, value++);
    value++;
    this.init(this._trumpHearts, Ordinal.QUEEN, suit, value++);
    this.init(this._trumpHearts, Ordinal.KING, suit, value++);
    value++;
    this.init(this._trumpHearts, Ordinal.ACE, suit, value++);
    this.init(this._trumpHearts, Ordinal.JACK, suit, value++);
    this.init(this._trumpHearts, Ordinal.FIVE, suit, value++);

    if (value != 18) {
      throw new TypeError(`internal error value: ${value}`);
    }
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
        value = this._offSuitBlack.getAt(id);
      } else if (card.isRed()) {
        value = this._offSuitRed.getAt(id);
      }
    } else {
      if (card.suit === Suit.CLUBS || card.isAceOfHearts()) {
        value = this._trumpClubs[id];
      } else if (card.suit === Suit.SPADES || card.isAceOfHearts()) {
        value = this._trumpSpades[id];
      } else if (card.suit === Suit.DIAMONDS || card.isAceOfHearts()) {
        value = this._trumpDiamonds[id];
      } else if (card.suit === Suit.HEARTS) {
        value = this._trumpHearts[id];
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
