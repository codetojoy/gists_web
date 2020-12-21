import { Constants } from "./constants";
import { Suit } from "./suit";
import { Ordinal } from "./ordinal";

export class Card {
  id: number;
  suit: Suit;
  ordinal: Ordinal;

  constructor(id: number, suit: Suit, ordinal: Ordinal) {
    this.id = id;
    this.suit = suit;
    this.ordinal = ordinal;
  }

  private buildOrdinalString() {
    let result = "";
    let resultOrd = this.ordinal + 1;

    let { SUIT_MIN_INDEX, SUIT_MAX_INDEX } = Constants;

    if (resultOrd < SUIT_MIN_INDEX + 1 || resultOrd > SUIT_MAX_INDEX + 1) {
      throw new TypeError("illegal value");
    }

    switch (resultOrd) {
      case 1:
        result = "A";
        break;
      case 11:
        result = "J";
        break;
      case 12:
        result = "Q";
        break;
      case 13:
        result = "K";
        break;
      default:
        result = "" + resultOrd;
        break;
    }

    return result;
  }

  private buildSuitString() {
    let result = "";

    switch (this.suit) {
      case Suit.CLUBS:
        result = "C";
        break;
      case Suit.DIAMONDS:
        result = "D";
        break;
      case Suit.HEARTS:
        result = "H";
        break;
      case Suit.SPADES:
        result = "S";
        break;
      default:
        result = "ERROR";
        break;
    }

    return result;
  }

  public toString() {
    let ordStr = this.buildOrdinalString();
    let suitStr = this.buildSuitString();

    let result = `[${ordStr} ${suitStr}]`;

    return result;
  }
}
