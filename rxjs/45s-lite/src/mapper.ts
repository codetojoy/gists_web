import { throwError } from "rxjs";
import { Card } from "./card";
import { Ordinal } from "./ordinal";
import { Suit } from "./suit";
import { Constants } from "./constants";

export class Mapper {
  mapOrdinal(index: number) {
    const { SUIT_MIN_INDEX, SUIT_MAX_INDEX } = Constants;

    // guard
    if (index < SUIT_MIN_INDEX || index > SUIT_MAX_INDEX) {
      throw new RangeError(`illegal value for index: ${index}`);
    }

    let resultStr: string = Ordinal[index];
    let result: Ordinal = Ordinal[resultStr];

    return result;
  }

  getCardId(ord: Ordinal, suit: Suit): number {
    let suitIndex: number = Suit[Suit[suit]];
    let id = ord + suitIndex * Constants.NUM_CARDS_IN_SUIT;
    let card: Card = new Card(id, suit, ord);
    return card.id;
  }

  mapSimple(oneBasedOrd: number, suit: Suit) {
    let zeroBasedOrd: number = oneBasedOrd - 1;
    let ord: number = this.mapOrdinal(zeroBasedOrd);
    let suitIndex: number = Suit[Suit[suit]];
    let id = zeroBasedOrd + suitIndex * Constants.NUM_CARDS_IN_SUIT;
    let card: Card = new Card(id, suit, ord);
    return card;
  }

  mapInt(n: number) {
    const { DECK_MIN_INDEX, DECK_MAX_INDEX, NUM_CARDS_IN_SUIT } = Constants;

    // guard
    if (n < DECK_MIN_INDEX || n > DECK_MAX_INDEX) {
      throw new RangeError(`illegal value for n: ${n}`);
    }

    let remainder: number = n % NUM_CARDS_IN_SUIT;
    let ordinal: Ordinal = this.mapOrdinal(remainder);
    let index: number = Math.trunc(n / NUM_CARDS_IN_SUIT);
    let suit: Suit = Suit[Suit[index]];

    let result = new Card(n, suit, ordinal);

    return result;
  }
}
