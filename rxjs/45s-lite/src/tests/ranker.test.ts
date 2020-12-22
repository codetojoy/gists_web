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
    let cards: Card[] = [
      c(Ordinal.KING, Suit.CLUBS),
      c(Ordinal.QUEEN, Suit.CLUBS),
      c(Ordinal.JACK, Suit.CLUBS),
      c(Ordinal.TEN, Suit.CLUBS),
      c(Ordinal.NINE, Suit.CLUBS),
      c(Ordinal.EIGHT, Suit.CLUBS),
      c(Ordinal.SEVEN, Suit.CLUBS),
      c(Ordinal.SIX, Suit.CLUBS),
      c(Ordinal.FIVE, Suit.CLUBS),
      c(Ordinal.FOUR, Suit.CLUBS),
      c(Ordinal.THREE, Suit.CLUBS),
      c(Ordinal.TWO, Suit.CLUBS),
      c(Ordinal.ACE, Suit.CLUBS),
    ];

    new Util().shuffle(cards);

    // test
    new Ranker(trump).customSortArray(cards);

    let i = 0;
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.TEN);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.NINE);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.EIGHT);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.SEVEN);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.SIX);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.FIVE);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.FOUR);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.THREE);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.TWO);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.ACE);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.JACK);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.QUEEN);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.KING);
  });
});

describe("Ranker", () => {
  test("customSort array : spades, non-trump", () => {
    let trump: Suit = Suit.HEARTS;
    let cards: Card[] = [
      c(Ordinal.KING, Suit.SPADES),
      c(Ordinal.QUEEN, Suit.SPADES),
      c(Ordinal.JACK, Suit.SPADES),
      c(Ordinal.TEN, Suit.SPADES),
      c(Ordinal.NINE, Suit.SPADES),
      c(Ordinal.EIGHT, Suit.SPADES),
      c(Ordinal.SEVEN, Suit.SPADES),
      c(Ordinal.SIX, Suit.SPADES),
      c(Ordinal.FIVE, Suit.SPADES),
      c(Ordinal.FOUR, Suit.SPADES),
      c(Ordinal.THREE, Suit.SPADES),
      c(Ordinal.TWO, Suit.SPADES),
      c(Ordinal.ACE, Suit.SPADES),
    ];

    new Util().shuffle(cards);

    // test
    new Ranker(trump).customSortArray(cards);

    let i = 0;
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.TEN);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.NINE);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.EIGHT);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.SEVEN);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.SIX);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.FIVE);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.FOUR);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.THREE);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.TWO);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.ACE);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.JACK);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.QUEEN);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.KING);
  });
});

describe("Ranker", () => {
  test("customSort array : diamonds, non-trump", () => {
    let trump: Suit = Suit.HEARTS;
    let cards: Card[] = [
      c(Ordinal.KING, Suit.DIAMONDS),
      c(Ordinal.QUEEN, Suit.DIAMONDS),
      c(Ordinal.JACK, Suit.DIAMONDS),
      c(Ordinal.TEN, Suit.DIAMONDS),
      c(Ordinal.NINE, Suit.DIAMONDS),
      c(Ordinal.EIGHT, Suit.DIAMONDS),
      c(Ordinal.SEVEN, Suit.DIAMONDS),
      c(Ordinal.SIX, Suit.DIAMONDS),
      c(Ordinal.FIVE, Suit.DIAMONDS),
      c(Ordinal.FOUR, Suit.DIAMONDS),
      c(Ordinal.THREE, Suit.DIAMONDS),
      c(Ordinal.TWO, Suit.DIAMONDS),
      c(Ordinal.ACE, Suit.DIAMONDS),
    ];

    new Util().shuffle(cards);

    // test
    new Ranker(trump).customSortArray(cards);

    let i = 0;
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.ACE);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.TWO);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.THREE);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.FOUR);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.FIVE);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.SIX);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.SEVEN);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.EIGHT);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.NINE);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.TEN);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.JACK);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.QUEEN);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.KING);
  });
});

describe("Ranker", () => {
  test("customSort array : hearts, non-trump", () => {
    let trump: Suit = Suit.CLUBS;
    let cards: Card[] = [
      c(Ordinal.KING, Suit.HEARTS),
      c(Ordinal.QUEEN, Suit.HEARTS),
      c(Ordinal.JACK, Suit.HEARTS),
      c(Ordinal.TEN, Suit.HEARTS),
      c(Ordinal.NINE, Suit.HEARTS),
      c(Ordinal.EIGHT, Suit.HEARTS),
      c(Ordinal.SEVEN, Suit.HEARTS),
      c(Ordinal.SIX, Suit.HEARTS),
      c(Ordinal.FIVE, Suit.HEARTS),
      c(Ordinal.FOUR, Suit.HEARTS),
      c(Ordinal.THREE, Suit.HEARTS),
      c(Ordinal.TWO, Suit.HEARTS),
    ];

    new Util().shuffle(cards);

    // test
    new Ranker(trump).customSortArray(cards);

    let i = 0;
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.TWO);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.THREE);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.FOUR);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.FIVE);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.SIX);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.SEVEN);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.EIGHT);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.NINE);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.TEN);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.JACK);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.QUEEN);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.KING);
  });
});

describe("Ranker", () => {
  test("customSort array : clubs, trump", () => {
    let trump: Suit = Suit.CLUBS;
    let cards: Card[] = [
      c(Ordinal.KING, Suit.CLUBS),
      c(Ordinal.QUEEN, Suit.CLUBS),
      c(Ordinal.JACK, Suit.CLUBS),
      c(Ordinal.TEN, Suit.CLUBS),
      c(Ordinal.NINE, Suit.CLUBS),
      c(Ordinal.EIGHT, Suit.CLUBS),
      c(Ordinal.SEVEN, Suit.CLUBS),
      c(Ordinal.SIX, Suit.CLUBS),
      c(Ordinal.FIVE, Suit.CLUBS),
      c(Ordinal.FOUR, Suit.CLUBS),
      c(Ordinal.THREE, Suit.CLUBS),
      c(Ordinal.TWO, Suit.CLUBS),
      c(Ordinal.ACE, Suit.CLUBS),
      c(Ordinal.ACE, Suit.HEARTS),
    ];

    new Util().shuffle(cards);

    // test
    new Ranker(trump).customSortArray(cards);

    let i = 0;
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.TEN);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.NINE);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.EIGHT);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.SEVEN);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.SIX);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.FOUR);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.THREE);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.TWO);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.QUEEN);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.KING);

    expect(cards[i].ordinal).toStrictEqual(Ordinal.ACE);
    expect(cards[i++].suit).toStrictEqual(Suit.CLUBS);

    expect(cards[i].ordinal).toStrictEqual(Ordinal.ACE);
    expect(cards[i++].suit).toStrictEqual(Suit.HEARTS);

    expect(cards[i++].ordinal).toStrictEqual(Ordinal.JACK);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.FIVE);
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
