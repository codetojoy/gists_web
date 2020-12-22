import { Suit } from "./suit";
import { Ordinal } from "./ordinal";
import { Card } from "./card";
import { Mapper } from "./mapper";

abstract class BaseMap {
  // map Card.id to rank #
  private _map = {};

  protected init(ord: Ordinal, suit: Suit, value: number) {
    let id: number = new Card(ord, suit).id;
    this._map[id] = value;
  }

  getAt(id: number): number {
    return this._map[id];
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

class TrumpClubsMap extends BaseMap {
  constructor() {
    super();

    // trump CLUBS
    let value: number = 1;
    let suit: Suit = Suit.CLUBS;
    this.init(Ordinal.TEN, suit, value++);
    this.init(Ordinal.NINE, suit, value++);
    this.init(Ordinal.EIGHT, suit, value++);
    this.init(Ordinal.SEVEN, suit, value++);
    this.init(Ordinal.SIX, suit, value++);
    this.init(Ordinal.FOUR, suit, value++);
    value++;
    this.init(Ordinal.THREE, suit, value++);
    this.init(Ordinal.TWO, suit, value++);
    value++;
    value++;
    this.init(Ordinal.QUEEN, suit, value++);
    this.init(Ordinal.KING, suit, value++);
    this.init(Ordinal.ACE, suit, value++);
    this.init(Ordinal.ACE, Suit.HEARTS, value++);
    this.init(Ordinal.JACK, suit, value++);
    this.init(Ordinal.FIVE, suit, value++);

    if (value != 18) {
      throw new TypeError(`internal error value: ${value}`);
    }
  }
}

class TrumpSpadesMap extends BaseMap {
  constructor() {
    super();

    // trump SPADES
    let suit = Suit.SPADES;
    let value: number = 1;
    this.init(Ordinal.TEN, suit, value++);
    this.init(Ordinal.NINE, suit, value++);
    this.init(Ordinal.EIGHT, suit, value++);
    this.init(Ordinal.SEVEN, suit, value++);
    this.init(Ordinal.SIX, suit, value++);
    value++;
    this.init(Ordinal.FOUR, suit, value++);
    this.init(Ordinal.THREE, suit, value++);
    this.init(Ordinal.TWO, suit, value++);
    value++;
    value++;
    this.init(Ordinal.QUEEN, suit, value++);
    this.init(Ordinal.KING, suit, value++);
    this.init(Ordinal.ACE, suit, value++);
    this.init(Ordinal.ACE, Suit.HEARTS, value++);
    this.init(Ordinal.JACK, suit, value++);
    this.init(Ordinal.FIVE, suit, value++);

    if (value != 18) {
      throw new TypeError(`internal error value: ${value}`);
    }
  }
}

class TrumpDiamondsMap extends BaseMap {
  constructor() {
    super();

    // trump DIAMONDS
    let suit: Suit = Suit.DIAMONDS;
    let value: number = 2;
    this.init(Ordinal.TWO, suit, value++);
    this.init(Ordinal.THREE, suit, value++);
    this.init(Ordinal.FOUR, suit, value++);
    value++;
    this.init(Ordinal.SIX, suit, value++);
    this.init(Ordinal.SEVEN, suit, value++);
    this.init(Ordinal.EIGHT, suit, value++);
    this.init(Ordinal.NINE, suit, value++);
    this.init(Ordinal.TEN, suit, value++);
    value++;
    this.init(Ordinal.QUEEN, suit, value++);
    this.init(Ordinal.KING, suit, value++);
    this.init(Ordinal.ACE, suit, value++);
    this.init(Ordinal.ACE, Suit.HEARTS, value++);
    this.init(Ordinal.JACK, suit, value++);
    this.init(Ordinal.FIVE, suit, value++);

    if (value != 18) {
      throw new TypeError(`internal error value: ${value}`);
    }
  }
}

class TrumpHeartsMap extends BaseMap {
  constructor() {
    super();

    // trump HEARTS
    let suit: Suit = Suit.HEARTS;
    let value: number = 2;
    this.init(Ordinal.TWO, suit, value++);
    this.init(Ordinal.THREE, suit, value++);
    this.init(Ordinal.FOUR, suit, value++);
    value++;
    this.init(Ordinal.SIX, suit, value++);
    this.init(Ordinal.SEVEN, suit, value++);
    this.init(Ordinal.EIGHT, suit, value++);
    this.init(Ordinal.NINE, suit, value++);
    this.init(Ordinal.TEN, suit, value++);
    value++;
    this.init(Ordinal.QUEEN, suit, value++);
    this.init(Ordinal.KING, suit, value++);
    value++;
    this.init(Ordinal.ACE, suit, value++);
    this.init(Ordinal.JACK, suit, value++);
    this.init(Ordinal.FIVE, suit, value++);

    if (value != 18) {
      throw new TypeError(`internal error value: ${value}`);
    }
  }
}

export class Ranker {
  private readonly unknownValue: number = -1;
  private _trump: Suit;

  private _offSuitBlack: BaseMap = new OffsuitBlackMap();
  private _offSuitRed: BaseMap = new OffsuitRedMap();

  private _trumpClubs: BaseMap = new TrumpClubsMap();
  private _trumpSpades: BaseMap = new TrumpSpadesMap();

  private _trumpDiamonds: BaseMap = new TrumpDiamondsMap();
  private _trumpHearts: BaseMap = new TrumpHeartsMap();

  constructor(trump: Suit) {
    this._trump = trump;

    let value: number = 0;
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
        value = this._trumpClubs.getAt(id);
      } else if (card.suit === Suit.SPADES || card.isAceOfHearts()) {
        value = this._trumpSpades.getAt(id);
      } else if (card.suit === Suit.DIAMONDS || card.isAceOfHearts()) {
        value = this._trumpDiamonds.getAt(id);
      } else if (card.suit === Suit.HEARTS) {
        value = this._trumpHearts.getAt(id);
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
