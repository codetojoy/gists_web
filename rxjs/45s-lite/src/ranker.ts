import { Suit } from "./suit";
import { Ordinal } from "./ordinal";
import { Card } from "./card";

// TODO: the card ranking has been abstracted too far, yet not far enough.
// It is (sort of?) a DSL at this point, but should probably be pulled out into
// data files.

abstract class BaseMap {
  protected readonly MAX_RANK_CEILING: number = 18;

  // map Card.id to rank #
  private _map = {};

  protected setCard(cardObj: any) {
    let id: number = new Card(cardObj.ord, cardObj.suit).id;
    this._map[id] = cardObj.rank;
  }

  protected setCards(cardsObj: any[]) {
    cardsObj.forEach((cardObj) => {
      this.setCard(cardObj);
    });
  }

  public getAt(id: number): number {
    return this._map[id];
  }
}

class OffsuitBlackMap extends BaseMap {
  constructor() {
    super();

    // off-suit CLUBS
    let cards: any = [
      { ord: Ordinal.TEN, suit: Suit.CLUBS, rank: 1 },
      { ord: Ordinal.NINE, suit: Suit.CLUBS, rank: 2 },
      { ord: Ordinal.EIGHT, suit: Suit.CLUBS, rank: 3 },
      { ord: Ordinal.SEVEN, suit: Suit.CLUBS, rank: 4 },
      { ord: Ordinal.SIX, suit: Suit.CLUBS, rank: 5 },
      { ord: Ordinal.FIVE, suit: Suit.CLUBS, rank: 6 },
      { ord: Ordinal.FOUR, suit: Suit.CLUBS, rank: 7 },
      { ord: Ordinal.THREE, suit: Suit.CLUBS, rank: 8 },
      { ord: Ordinal.TWO, suit: Suit.CLUBS, rank: 9 },
      { ord: Ordinal.ACE, suit: Suit.CLUBS, rank: 10 },
      { ord: Ordinal.JACK, suit: Suit.CLUBS, rank: 11 },
      { ord: Ordinal.QUEEN, suit: Suit.CLUBS, rank: 12 },
      { ord: Ordinal.KING, suit: Suit.CLUBS, rank: 13 },
    ];
    this.setCards(cards);

    // off-suit SPADES
    cards = [
      { ord: Ordinal.TEN, suit: Suit.SPADES, rank: 1 },
      { ord: Ordinal.NINE, suit: Suit.SPADES, rank: 2 },
      { ord: Ordinal.EIGHT, suit: Suit.SPADES, rank: 3 },
      { ord: Ordinal.SEVEN, suit: Suit.SPADES, rank: 4 },
      { ord: Ordinal.SIX, suit: Suit.SPADES, rank: 5 },
      { ord: Ordinal.FIVE, suit: Suit.SPADES, rank: 6 },
      { ord: Ordinal.FOUR, suit: Suit.SPADES, rank: 7 },
      { ord: Ordinal.THREE, suit: Suit.SPADES, rank: 8 },
      { ord: Ordinal.TWO, suit: Suit.SPADES, rank: 9 },
      { ord: Ordinal.ACE, suit: Suit.SPADES, rank: 10 },
      { ord: Ordinal.JACK, suit: Suit.SPADES, rank: 11 },
      { ord: Ordinal.QUEEN, suit: Suit.SPADES, rank: 12 },
      { ord: Ordinal.KING, suit: Suit.SPADES, rank: 13 },
    ];
    this.setCards(cards);
  }
}

class OffsuitRedMap extends BaseMap {
  constructor() {
    super();

    // off-suit DIAMONDS
    let cards: any = [
      { ord: Ordinal.ACE, suit: Suit.DIAMONDS, rank: 1 },
      { ord: Ordinal.TWO, suit: Suit.DIAMONDS, rank: 2 },
      { ord: Ordinal.THREE, suit: Suit.DIAMONDS, rank: 3 },
      { ord: Ordinal.FOUR, suit: Suit.DIAMONDS, rank: 4 },
      { ord: Ordinal.FIVE, suit: Suit.DIAMONDS, rank: 5 },
      { ord: Ordinal.SIX, suit: Suit.DIAMONDS, rank: 6 },
      { ord: Ordinal.SEVEN, suit: Suit.DIAMONDS, rank: 7 },
      { ord: Ordinal.EIGHT, suit: Suit.DIAMONDS, rank: 8 },
      { ord: Ordinal.NINE, suit: Suit.DIAMONDS, rank: 9 },
      { ord: Ordinal.TEN, suit: Suit.DIAMONDS, rank: 10 },
      { ord: Ordinal.JACK, suit: Suit.DIAMONDS, rank: 11 },
      { ord: Ordinal.QUEEN, suit: Suit.DIAMONDS, rank: 12 },
      { ord: Ordinal.KING, suit: Suit.DIAMONDS, rank: 13 },
    ];
    this.setCards(cards);

    // off-suit HEARTS
    cards = [
      { ord: Ordinal.TWO, suit: Suit.HEARTS, rank: 2 },
      { ord: Ordinal.THREE, suit: Suit.HEARTS, rank: 3 },
      { ord: Ordinal.FOUR, suit: Suit.HEARTS, rank: 4 },
      { ord: Ordinal.FIVE, suit: Suit.HEARTS, rank: 5 },
      { ord: Ordinal.SIX, suit: Suit.HEARTS, rank: 6 },
      { ord: Ordinal.SEVEN, suit: Suit.HEARTS, rank: 7 },
      { ord: Ordinal.EIGHT, suit: Suit.HEARTS, rank: 8 },
      { ord: Ordinal.NINE, suit: Suit.HEARTS, rank: 9 },
      { ord: Ordinal.TEN, suit: Suit.HEARTS, rank: 10 },
      { ord: Ordinal.JACK, suit: Suit.HEARTS, rank: 11 },
      { ord: Ordinal.QUEEN, suit: Suit.HEARTS, rank: 12 },
      { ord: Ordinal.KING, suit: Suit.HEARTS, rank: 13 },
    ];
    this.setCards(cards);
  }
}

class TrumpClubsMap extends BaseMap {
  constructor() {
    super();

    // trump CLUBS
    let suit: Suit = Suit.CLUBS;
    let cards: any = [
      { ord: Ordinal.TEN, suit: suit, rank: 1 },
      { ord: Ordinal.NINE, suit: suit, rank: 2 },
      { ord: Ordinal.EIGHT, suit: suit, rank: 3 },
      { ord: Ordinal.SEVEN, suit: suit, rank: 4 },
      { ord: Ordinal.SIX, suit: suit, rank: 5 },
      // { rank: 6 }
      { ord: Ordinal.FOUR, suit: suit, rank: 7 },
      { ord: Ordinal.THREE, suit: suit, rank: 8 },
      { ord: Ordinal.TWO, suit: suit, rank: 9 },
      // { rank: 10 }
      // { rank: 11 }
      { ord: Ordinal.QUEEN, suit: suit, rank: 12 },
      { ord: Ordinal.KING, suit: suit, rank: 13 },
      { ord: Ordinal.ACE, suit: suit, rank: 14 },
      { ord: Ordinal.ACE, suit: Suit.HEARTS, rank: 15 },
      { ord: Ordinal.JACK, suit: suit, rank: 16 },
      { ord: Ordinal.FIVE, suit: suit, rank: 17 },
    ];
    this.setCards(cards);
  }
}

class TrumpSpadesMap extends BaseMap {
  constructor() {
    super();

    // trump SPADES
    let suit = Suit.SPADES;
    let cards: any = [
      { ord: Ordinal.TEN, suit: suit, rank: 1 },
      { ord: Ordinal.NINE, suit: suit, rank: 2 },
      { ord: Ordinal.EIGHT, suit: suit, rank: 3 },
      { ord: Ordinal.SEVEN, suit: suit, rank: 4 },
      { ord: Ordinal.SIX, suit: suit, rank: 5 },
      // { rank: 6 }
      { ord: Ordinal.FOUR, suit: suit, rank: 7 },
      { ord: Ordinal.THREE, suit: suit, rank: 8 },
      { ord: Ordinal.TWO, suit: suit, rank: 9 },
      // { rank: 10 }
      // { rank: 11 }
      { ord: Ordinal.QUEEN, suit: suit, rank: 12 },
      { ord: Ordinal.KING, suit: suit, rank: 13 },
      { ord: Ordinal.ACE, suit: suit, rank: 14 },
      { ord: Ordinal.ACE, suit: Suit.HEARTS, rank: 15 },
      { ord: Ordinal.JACK, suit: suit, rank: 16 },
      { ord: Ordinal.FIVE, suit: suit, rank: 17 },
    ];

    this.setCards(cards);
  }
}

class TrumpDiamondsMap extends BaseMap {
  constructor() {
    super();

    // trump DIAMONDS
    let suit: Suit = Suit.DIAMONDS;
    let cards: any = [
      { ord: Ordinal.TWO, suit: suit, rank: 2 },
      { ord: Ordinal.THREE, suit: suit, rank: 3 },
      { ord: Ordinal.FOUR, suit: suit, rank: 4 },
      // { rank: 5 }
      { ord: Ordinal.SIX, suit: suit, rank: 6 },
      { ord: Ordinal.SEVEN, suit: suit, rank: 7 },
      { ord: Ordinal.EIGHT, suit: suit, rank: 8 },
      { ord: Ordinal.NINE, suit: suit, rank: 9 },
      { ord: Ordinal.TEN, suit: suit, rank: 10 },
      // { rank: 11 }
      { ord: Ordinal.QUEEN, suit: suit, rank: 12 },
      { ord: Ordinal.KING, suit: suit, rank: 13 },
      { ord: Ordinal.ACE, suit: suit, rank: 14 },
      { ord: Ordinal.ACE, suit: Suit.HEARTS, rank: 15 },
      { ord: Ordinal.JACK, suit: suit, rank: 16 },
      { ord: Ordinal.FIVE, suit: suit, rank: 17 },
    ];

    this.setCards(cards);
  }
}

class TrumpHeartsMap extends BaseMap {
  constructor() {
    super();

    // trump HEARTS
    let suit: Suit = Suit.HEARTS;
    let cards: any = [
      { ord: Ordinal.TWO, suit: suit, rank: 2 },
      { ord: Ordinal.THREE, suit: suit, rank: 3 },
      { ord: Ordinal.FOUR, suit: suit, rank: 4 },
      // { rank: 5 }
      { ord: Ordinal.SIX, suit: suit, rank: 6 },
      { ord: Ordinal.SEVEN, suit: suit, rank: 7 },
      { ord: Ordinal.EIGHT, suit: suit, rank: 8 },
      { ord: Ordinal.NINE, suit: suit, rank: 9 },
      { ord: Ordinal.TEN, suit: suit, rank: 10 },
      // { rank: 11 }
      { ord: Ordinal.QUEEN, suit: suit, rank: 12 },
      { ord: Ordinal.KING, suit: suit, rank: 13 },
      // { rank: 14 }
      { ord: Ordinal.ACE, suit: suit, rank: 15 },
      { ord: Ordinal.JACK, suit: suit, rank: 16 },
      { ord: Ordinal.FIVE, suit: suit, rank: 17 },
    ];

    this.setCards(cards);
  }
}

export class Ranker {
  private readonly unknownValue: number = -1;
  private readonly trumpSuitFactor: number = 1000;
  private readonly leadingSuitFactor: number = 100;
  private _trumpSuit: Suit;
  private _leadingSuit: Suit;

  private _offSuitBlack: BaseMap = new OffsuitBlackMap();
  private _offSuitRed: BaseMap = new OffsuitRedMap();

  private _trumpClubs: BaseMap = new TrumpClubsMap();
  private _trumpSpades: BaseMap = new TrumpSpadesMap();

  private _trumpDiamonds: BaseMap = new TrumpDiamondsMap();
  private _trumpHearts: BaseMap = new TrumpHeartsMap();

  constructor(trumpSuit: Suit, leadingSuit?: Suit) {
    this._trumpSuit = trumpSuit;
    this._leadingSuit = leadingSuit;

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

    if (card.isTrump(this._trumpSuit)) {
      if (card.suit === Suit.CLUBS || card.isAceOfHearts()) {
        value = this._trumpClubs.getAt(id);
      } else if (card.suit === Suit.SPADES || card.isAceOfHearts()) {
        value = this._trumpSpades.getAt(id);
      } else if (card.suit === Suit.DIAMONDS || card.isAceOfHearts()) {
        value = this._trumpDiamonds.getAt(id);
      } else if (card.suit === Suit.HEARTS) {
        value = this._trumpHearts.getAt(id);
      }
    } else {
      if (card.isBlack()) {
        value = this._offSuitBlack.getAt(id);
      } else if (card.isRed()) {
        value = this._offSuitRed.getAt(id);
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

    let isCardATrump: boolean = cardA.isTrump(this._trumpSuit);
    let isCardBTrump: boolean = cardB.isTrump(this._trumpSuit);

    let isCardALeadingSuit: boolean = cardA.isLeadingSuit(this._leadingSuit);
    let isCardBLeadingSuit: boolean = cardB.isLeadingSuit(this._leadingSuit);

    if (isCardATrump) {
      valueA += this.trumpSuitFactor;
    }
    if (isCardBTrump) {
      valueB += this.trumpSuitFactor;
    }
    if (isCardALeadingSuit) {
      valueA += this.leadingSuitFactor;
    }
    if (isCardBLeadingSuit) {
      valueB += this.leadingSuitFactor;
    }

    let result: number = this.compare(valueA, valueB);

    return result;
  }
}
