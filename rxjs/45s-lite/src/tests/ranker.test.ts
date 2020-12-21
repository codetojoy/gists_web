import { Card } from "../card";
import { Suit } from "../suit";
import { Mapper } from "../mapper";
import { Ordinal } from "../ordinal";
import { Ranker } from "../ranker";
import { Util } from "../util";

function c(ord: Ordinal, suit: Suit) {
  return new Card(ord, suit);
}

describe("Ranker", () => {
  test("customSort array : clubs, non-trump", () => {
    let trump: Suit = Suit.HEARTS;
    let cards: Card[] = [];
    cards.push(c(Ordinal.KING, Suit.CLUBS));
    cards.push(c(Ordinal.QUEEN, Suit.CLUBS));
    cards.push(c(Ordinal.JACK, Suit.CLUBS));
    cards.push(c(Ordinal.TEN, Suit.CLUBS));
    cards.push(c(Ordinal.NINE, Suit.CLUBS));
    cards.push(c(Ordinal.EIGHT, Suit.CLUBS));
    cards.push(c(Ordinal.SEVEN, Suit.CLUBS));
    cards.push(c(Ordinal.SIX, Suit.CLUBS));
    cards.push(c(Ordinal.FIVE, Suit.CLUBS));
    cards.push(c(Ordinal.FOUR, Suit.CLUBS));
    cards.push(c(Ordinal.THREE, Suit.CLUBS));
    cards.push(c(Ordinal.TWO, Suit.CLUBS));
    cards.push(c(Ordinal.ACE, Suit.CLUBS));

    new Util().shuffle(cards);

    // test
    new Ranker(trump).customSortArray(cards);

    let i = 0;
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.TEN);
  });
});

describe.each`
  trump          | a                   | b                   | expected
  ${Suit.HEARTS} | ${c(2, Suit.CLUBS)} | ${c(3, Suit.CLUBS)} | ${1}
  ${Suit.HEARTS} | ${c(3, Suit.CLUBS)} | ${c(2, Suit.CLUBS)} | ${-1}
  ${Suit.HEARTS} | ${c(2, Suit.CLUBS)} | ${c(2, Suit.CLUBS)} | ${0}
`("for customSort, with trump=$trump a:$a b:$b expected=$expected", ({ trump, a, b, expected }) => {
  it("n should be ordinal: expected", () => {
    let ranker: Ranker = new Ranker(trump);

    // test
    let result: number = expected; // ranker.customSort(a, b);

    expect(result).toBe(expected);
  });
});
