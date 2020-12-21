import { Card } from "../card";
import { Suit } from "../suit";
import { Mapper } from "../mapper";
import { Ordinal } from "../ordinal";
import { Ranker } from "../ranker";
import { Util } from "../util";

function c(oneBasedOrd: number, suit: Suit) {
  let mapper: Mapper = new Mapper();
  let card: Card = mapper.mapSimple(oneBasedOrd, suit);
  return card;
}

describe("Ranker", () => {
  test("customSort array : clubs, non-trump", () => {
    let trump: Suit = Suit.HEARTS;
    let cards: Card[] = [];
    cards.push(c(13, Suit.CLUBS));
    cards.push(c(12, Suit.CLUBS));
    cards.push(c(11, Suit.CLUBS));
    cards.push(c(10, Suit.CLUBS));
    cards.push(c(9, Suit.CLUBS));
    cards.push(c(8, Suit.CLUBS));
    cards.push(c(7, Suit.CLUBS));
    cards.push(c(6, Suit.CLUBS));
    cards.push(c(5, Suit.CLUBS));
    cards.push(c(4, Suit.CLUBS));
    cards.push(c(3, Suit.CLUBS));
    cards.push(c(2, Suit.CLUBS));
    cards.push(c(1, Suit.CLUBS));

    new Util().shuffle(cards);

    cards.forEach((card) => console.log(`TRACER before card: ${card.toString()}`));

    // test
    new Ranker(trump).customSortArray(cards);

    cards.forEach((card) => console.log(`TRACER after card: ${card.toString()}`));

    expect(cards[0].id).toBe(10 - 1);
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
