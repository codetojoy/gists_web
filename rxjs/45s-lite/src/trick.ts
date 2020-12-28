import { Constants } from "./constants";
import { Suit } from "./suit";
import { Ordinal } from "./ordinal";
import { Card } from "./card";
import { Bid } from "./bid";
import { Player } from "./player";

export class Trick {
  _winningBid: Bid;
  _pointValue: number = 5;
  _bids: Bid[];

  constructor(winningBid: Bid, bids: Bid[]) {
    this._winningBid = winningBid;
    this._bids = bids;
  }

  public get winningBid(): Bid {
    return this._winningBid;
  }

  public get bids(): Bid[] {
    return this._bids;
  }

  awardBonus() {
    this._pointValue += 5;
  }

  public toString(): string {
    let result: string = `wb: ${this._winningBid.toString()} p: ${this._pointValue}\n`;
    this._bids.forEach((bid) => (result += `b: ${bid.toString()}\n`));

    return result;
  }
}
