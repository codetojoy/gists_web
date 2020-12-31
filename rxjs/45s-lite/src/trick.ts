import { Bid } from "./bid";
import { Suit } from "./suit";

export enum TrickState {
  UNKNOWN = 0,
  NEW = 1,
  LEADING_NO_TRUMP = 2,
  TRUMP_PLAYED = 3,
}

export class Trick {
  _trumpSuit: Suit;
  _leadingSuit: Suit;
  _hasTrumpBeenPlayed: boolean;
  _winningBid: Bid;
  _pointValue: number = 5;
  _bids: Bid[];

  constructor(trumpSuit: Suit, leadingSuit?: Suit, hasTrumpBeenPlayed?: boolean) {
    this._trumpSuit = trumpSuit;
    this._leadingSuit = leadingSuit;
    this.hasTrumpBeenPlayed = hasTrumpBeenPlayed;
  }

  get trickState(): TrickState {
    let result: TrickState = TrickState.UNKNOWN;

    if (this._trumpSuit != null && this._leadingSuit == null && !this._hasTrumpBeenPlayed) {
      result = TrickState.NEW;
    } else if (
      this._trumpSuit != null &&
      this._leadingSuit != null &&
      this._trumpSuit !== this._leadingSuit &&
      !this._hasTrumpBeenPlayed
    ) {
      result = TrickState.LEADING_NO_TRUMP;
    } else if (this._trumpSuit != null && this._leadingSuit != null && this._hasTrumpBeenPlayed) {
      result = TrickState.TRUMP_PLAYED;
    }

    if (result === TrickState.UNKNOWN) {
      throw new TypeError(`illegal trick state (unknown)`);
    }

    return result;
  }

  doAwardBonus() {
    this._pointValue += 5;
  }

  toString(): string {
    let result: string = `t: ${this._trumpSuit} l: ${this._leadingSuit} t?: ${this._hasTrumpBeenPlayed}\n`;
    result += `wb: ${this._winningBid.toString()} p: ${this._pointValue}\n`;
    this._bids.forEach((bid) => (result += `b: ${bid.toString()}\n`));

    return result;
  }

  // ------------- getters / setters

  get trumpSuit() {
    return this._trumpSuit;
  }

  /*
  set trumpSuit(suit: Suit) {
    this._trumpSuit = suit;
  }
    */

  get leadingSuit() {
    return this._leadingSuit;
  }

  set leadingSuit(suit: Suit) {
    this._leadingSuit = suit;
  }

  get hasTrumpBeenPlayed() {
    return this._hasTrumpBeenPlayed;
  }

  set hasTrumpBeenPlayed(value: boolean) {
    this._hasTrumpBeenPlayed = value;
  }

  set winningBid(bid: Bid) {
    this._winningBid = bid;
  }

  set bids(bids: Bid[]) {
    this._bids = bids;
  }

  get winningBid(): Bid {
    return this._winningBid;
  }

  get bids(): Bid[] {
    return this._bids;
  }
}
