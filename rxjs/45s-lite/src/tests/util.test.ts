import { Card } from "../card";
import { Ordinal } from "../ordinal";
import { Suit } from "../suit";
import { Util } from "../util";

function c(ord: Ordinal, suit: Suit): Card {
  return new Card(ord, suit);
}

describe("Util", () => {
  test("removeCard", () => {
    let cards: Card[] = [c(Ordinal.ACE, Suit.SPADES), c(Ordinal.TEN, Suit.HEARTS), c(Ordinal.KING, Suit.CLUBS)];
    let numCards: number = cards.length;
    let card: Card = c(Ordinal.TEN, Suit.HEARTS);

    // test
    new Util().removeCard(cards, card);

    expect(cards.length).toBe(numCards - 1);
  });
});
