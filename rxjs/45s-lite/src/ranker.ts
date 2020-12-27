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
  private _rankValue: number = 0;

  /*
  protected init(ord: Ordinal, suit: Suit, value: number) {
    let id: number = new Card(ord, suit).id;
    this._map[id] = value;
  }
  */

  protected setCard(ord: Ordinal, suit: Suit) {
    let id: number = new Card(ord, suit).id;
    this._map[id] = this._rankValue;
  }

  protected setCards(initRankValue: number, cards: any[]) {
    this._rankValue = initRankValue;

    cards.forEach((cardObj) => {
      if (cardObj.incRankValue === true) {
        this.incrementRankValue();
      } else {
        this.setCard(cardObj.ord, cardObj.suit);
        this.incrementRankValue();
      }
    });
  }

  private getRankValue() {
    return this._rankValue;
  }

  private setRankValue(value: number) {
    this._rankValue = value;
  }

  private incrementRankValue() {
    this._rankValue++;
  }

  public getAt(id: number): number {
    return this._map[id];
  }

  protected assertRank(value: number) {
    if (this._rankValue != value) {
      throw new TypeError(`internal error value: ${this._rankValue}`);
    }
  }
}

class OffsuitBlackMap extends BaseMap {
  constructor() {
    super();

    // off-suit CLUBS
    let cards: any = [
      { ord: Ordinal.TEN, suit: Suit.CLUBS },
      { ord: Ordinal.NINE, suit: Suit.CLUBS },
      { ord: Ordinal.EIGHT, suit: Suit.CLUBS },
      { ord: Ordinal.SEVEN, suit: Suit.CLUBS },
      { ord: Ordinal.SIX, suit: Suit.CLUBS },
      { ord: Ordinal.FIVE, suit: Suit.CLUBS },
      { ord: Ordinal.FOUR, suit: Suit.CLUBS },
      { ord: Ordinal.THREE, suit: Suit.CLUBS },
      { ord: Ordinal.TWO, suit: Suit.CLUBS },
      { ord: Ordinal.ACE, suit: Suit.CLUBS },
      { ord: Ordinal.JACK, suit: Suit.CLUBS },
      { ord: Ordinal.QUEEN, suit: Suit.CLUBS },
      { ord: Ordinal.KING, suit: Suit.CLUBS },
    ];
    this.setCards(1, cards);

    this.assertRank(cards.length + 1);

    // off-suit SPADES
    cards = [
      { ord: Ordinal.TEN, suit: Suit.SPADES },
      { ord: Ordinal.NINE, suit: Suit.SPADES },
      { ord: Ordinal.EIGHT, suit: Suit.SPADES },
      { ord: Ordinal.SEVEN, suit: Suit.SPADES },
      { ord: Ordinal.SIX, suit: Suit.SPADES },
      { ord: Ordinal.FIVE, suit: Suit.SPADES },
      { ord: Ordinal.FOUR, suit: Suit.SPADES },
      { ord: Ordinal.THREE, suit: Suit.SPADES },
      { ord: Ordinal.TWO, suit: Suit.SPADES },
      { ord: Ordinal.ACE, suit: Suit.SPADES },
      { ord: Ordinal.JACK, suit: Suit.SPADES },
      { ord: Ordinal.QUEEN, suit: Suit.SPADES },
      { ord: Ordinal.KING, suit: Suit.SPADES },
    ];
    this.setCards(1, cards);

    this.assertRank(cards.length + 1);
  }
}

class OffsuitRedMap extends BaseMap {
  constructor() {
    super();

    // off-suit DIAMONDS
    let cards: any = [
      { ord: Ordinal.ACE, suit: Suit.DIAMONDS },
      { ord: Ordinal.TWO, suit: Suit.DIAMONDS },
      { ord: Ordinal.THREE, suit: Suit.DIAMONDS },
      { ord: Ordinal.FOUR, suit: Suit.DIAMONDS },
      { ord: Ordinal.FIVE, suit: Suit.DIAMONDS },
      { ord: Ordinal.SIX, suit: Suit.DIAMONDS },
      { ord: Ordinal.SEVEN, suit: Suit.DIAMONDS },
      { ord: Ordinal.EIGHT, suit: Suit.DIAMONDS },
      { ord: Ordinal.NINE, suit: Suit.DIAMONDS },
      { ord: Ordinal.TEN, suit: Suit.DIAMONDS },
      { ord: Ordinal.JACK, suit: Suit.DIAMONDS },
      { ord: Ordinal.QUEEN, suit: Suit.DIAMONDS },
      { ord: Ordinal.KING, suit: Suit.DIAMONDS },
    ];
    this.setCards(1, cards);

    this.assertRank(cards.length + 1);

    // off-suit HEARTS
    cards = [
      { ord: Ordinal.TWO, suit: Suit.HEARTS },
      { ord: Ordinal.THREE, suit: Suit.HEARTS },
      { ord: Ordinal.FOUR, suit: Suit.HEARTS },
      { ord: Ordinal.FIVE, suit: Suit.HEARTS },
      { ord: Ordinal.SIX, suit: Suit.HEARTS },
      { ord: Ordinal.SEVEN, suit: Suit.HEARTS },
      { ord: Ordinal.EIGHT, suit: Suit.HEARTS },
      { ord: Ordinal.NINE, suit: Suit.HEARTS },
      { ord: Ordinal.TEN, suit: Suit.HEARTS },
      // { ord: Ordinal.ACE, suit: Suit.HEARTS },
      { ord: Ordinal.JACK, suit: Suit.HEARTS },
      { ord: Ordinal.QUEEN, suit: Suit.HEARTS },
      { ord: Ordinal.KING, suit: Suit.HEARTS },
    ];
    this.setCards(2, cards);

    this.assertRank(1 + cards.length + 1);
  }
}

class TrumpClubsMap extends BaseMap {
  constructor() {
    super();

    // trump CLUBS
    let suit: Suit = Suit.CLUBS;
    let cards: any = [
      { ord: Ordinal.TEN, suit: suit },
      { ord: Ordinal.NINE, suit: suit },
      { ord: Ordinal.EIGHT, suit: suit },
      { ord: Ordinal.SEVEN, suit: suit },
      { ord: Ordinal.SIX, suit: suit },
      { ord: Ordinal.FOUR, suit: suit },
      { incRankValue: true },
      { ord: Ordinal.THREE, suit: suit },
      { ord: Ordinal.TWO, suit: suit },
      { incRankValue: true },
      { incRankValue: true },
      { ord: Ordinal.QUEEN, suit: suit },
      { ord: Ordinal.KING, suit: suit },
      { ord: Ordinal.ACE, suit: suit },
      { ord: Ordinal.ACE, suit: Suit.HEARTS },
      { ord: Ordinal.JACK, suit: suit },
      { ord: Ordinal.FIVE, suit: suit },
    ];

    this.setCards(1, cards);

    this.assertRank(this.MAX_RANK_CEILING);
  }
}

class TrumpSpadesMap extends BaseMap {
  constructor() {
    super();

    // trump SPADES
    let suit = Suit.SPADES;
    let cards: any = [
      { ord: Ordinal.TEN, suit: suit },
      { ord: Ordinal.NINE, suit: suit },
      { ord: Ordinal.EIGHT, suit: suit },
      { ord: Ordinal.SEVEN, suit: suit },
      { ord: Ordinal.SIX, suit: suit },
      { incRankValue: true },
      { ord: Ordinal.FOUR, suit: suit },
      { ord: Ordinal.THREE, suit: suit },
      { ord: Ordinal.TWO, suit: suit },
      { incRankValue: true },
      { incRankValue: true },
      { ord: Ordinal.QUEEN, suit: suit },
      { ord: Ordinal.KING, suit: suit },
      { ord: Ordinal.ACE, suit: suit },
      { ord: Ordinal.ACE, suit: Suit.HEARTS },
      { ord: Ordinal.JACK, suit: suit },
      { ord: Ordinal.FIVE, suit: suit },
    ];

    this.setCards(1, cards);

    this.assertRank(this.MAX_RANK_CEILING);
  }
}

class TrumpDiamondsMap extends BaseMap {
  constructor() {
    super();

    // trump DIAMONDS
    let suit: Suit = Suit.DIAMONDS;
    let cards: any = [
      { ord: Ordinal.TWO, suit: suit },
      { ord: Ordinal.THREE, suit: suit },
      { ord: Ordinal.FOUR, suit: suit },
      { incRankValue: true },
      { ord: Ordinal.SIX, suit: suit },
      { ord: Ordinal.SEVEN, suit: suit },
      { ord: Ordinal.EIGHT, suit: suit },
      { ord: Ordinal.NINE, suit: suit },
      { ord: Ordinal.TEN, suit: suit },
      { incRankValue: true },
      { ord: Ordinal.QUEEN, suit: suit },
      { ord: Ordinal.KING, suit: suit },
      { ord: Ordinal.ACE, suit: suit },
      { ord: Ordinal.ACE, suit: Suit.HEARTS },
      { ord: Ordinal.JACK, suit: suit },
      { ord: Ordinal.FIVE, suit: suit },
    ];

    this.setCards(2, cards);

    this.assertRank(this.MAX_RANK_CEILING);
  }
}

class TrumpHeartsMap extends BaseMap {
  constructor() {
    super();

    // trump HEARTS
    let suit: Suit = Suit.HEARTS;
    let cards: any = [
      { ord: Ordinal.TWO, suit: suit },
      { ord: Ordinal.THREE, suit: suit },
      { ord: Ordinal.FOUR, suit: suit },
      { incRankValue: true },
      { ord: Ordinal.SIX, suit: suit },
      { ord: Ordinal.SEVEN, suit: suit },
      { ord: Ordinal.EIGHT, suit: suit },
      { ord: Ordinal.NINE, suit: suit },
      { ord: Ordinal.TEN, suit: suit },
      { incRankValue: true },
      { ord: Ordinal.QUEEN, suit: suit },
      { ord: Ordinal.KING, suit: suit },
      { incRankValue: true },
      { ord: Ordinal.ACE, suit: suit },
      { ord: Ordinal.JACK, suit: suit },
      { ord: Ordinal.FIVE, suit: suit },
    ];

    this.setCards(2, cards);

    this.assertRank(this.MAX_RANK_CEILING);
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
