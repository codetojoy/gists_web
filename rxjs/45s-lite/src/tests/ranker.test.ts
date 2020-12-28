import { Card } from "../card";
import { Suit } from "../suit";
import { Mapper } from "../mapper";
import { Ordinal } from "../ordinal";
import { Ranker } from "../ranker";
import { Util } from "../util";
import { Player } from "../player";
import { Bid } from "../bid";

function c(ord: Ordinal, suit: Suit) {
  return new Card(ord, suit);
}

function b(name: string, ord: Ordinal, suit: Suit) {
  let card: Card = c(ord, suit);
  let player: Player = new Player(name);
  let bid: Bid = new Bid(card, player);
  return bid;
}

describe("Ranker", () => {
  test("customSortBids : basic, leading suit", () => {
    let trumpSuit: Suit = Suit.CLUBS;
    let leadingSuit: Suit = Suit.DIAMONDS;
    let bids: Bid[] = [
      b("mozart", Ordinal.KING, Suit.SPADES),
      b("chopin", Ordinal.ACE, Suit.HEARTS),
      b("beethoven", Ordinal.FIVE, Suit.CLUBS),
      b("liszt", Ordinal.TWO, Suit.DIAMONDS),
    ];

    new Util().shuffle(bids);

    // test
    new Ranker(trumpSuit, leadingSuit).customSortBids(bids);

    let i = 0;
    expect(bids[i++].player.name).toBe("mozart");
    expect(bids[i++].player.name).toBe("liszt");
    expect(bids[i++].player.name).toBe("chopin");
    expect(bids[i++].player.name).toBe("beethoven");
  });
});

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
      c(Ordinal.KING, trump),
      c(Ordinal.QUEEN, trump),
      c(Ordinal.JACK, trump),
      c(Ordinal.TEN, trump),
      c(Ordinal.NINE, trump),
      c(Ordinal.EIGHT, trump),
      c(Ordinal.SEVEN, trump),
      c(Ordinal.SIX, trump),
      c(Ordinal.FIVE, trump),
      c(Ordinal.FOUR, trump),
      c(Ordinal.THREE, trump),
      c(Ordinal.TWO, trump),
      c(Ordinal.ACE, trump),
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

describe("Ranker", () => {
  test("customSort array : spades, trump", () => {
    let trump: Suit = Suit.SPADES;
    let cards: Card[] = [
      c(Ordinal.KING, trump),
      c(Ordinal.QUEEN, trump),
      c(Ordinal.JACK, trump),
      c(Ordinal.TEN, trump),
      c(Ordinal.NINE, trump),
      c(Ordinal.EIGHT, trump),
      c(Ordinal.SEVEN, trump),
      c(Ordinal.SIX, trump),
      c(Ordinal.FIVE, trump),
      c(Ordinal.FOUR, trump),
      c(Ordinal.THREE, trump),
      c(Ordinal.TWO, trump),
      c(Ordinal.ACE, trump),
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
    expect(cards[i++].suit).toStrictEqual(Suit.SPADES);

    expect(cards[i].ordinal).toStrictEqual(Ordinal.ACE);
    expect(cards[i++].suit).toStrictEqual(Suit.HEARTS);

    expect(cards[i++].ordinal).toStrictEqual(Ordinal.JACK);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.FIVE);
  });
});

describe("Ranker", () => {
  test("customSort array : diamonds, trump", () => {
    let trump: Suit = Suit.DIAMONDS;
    let cards: Card[] = [
      c(Ordinal.KING, trump),
      c(Ordinal.QUEEN, trump),
      c(Ordinal.JACK, trump),
      c(Ordinal.TEN, trump),
      c(Ordinal.NINE, trump),
      c(Ordinal.EIGHT, trump),
      c(Ordinal.SEVEN, trump),
      c(Ordinal.SIX, trump),
      c(Ordinal.FIVE, trump),
      c(Ordinal.FOUR, trump),
      c(Ordinal.THREE, trump),
      c(Ordinal.TWO, trump),
      c(Ordinal.ACE, trump),
      c(Ordinal.ACE, Suit.HEARTS),
    ];

    new Util().shuffle(cards);

    // test
    new Ranker(trump).customSortArray(cards);

    let i = 0;
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.TWO);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.THREE);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.FOUR);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.SIX);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.SEVEN);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.EIGHT);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.NINE);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.TEN);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.QUEEN);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.KING);

    expect(cards[i].ordinal).toStrictEqual(Ordinal.ACE);
    expect(cards[i++].suit).toStrictEqual(Suit.DIAMONDS);

    expect(cards[i].ordinal).toStrictEqual(Ordinal.ACE);
    expect(cards[i++].suit).toStrictEqual(Suit.HEARTS);

    expect(cards[i++].ordinal).toStrictEqual(Ordinal.JACK);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.FIVE);
  });
});

describe("Ranker", () => {
  test("customSort array : hearts, trump", () => {
    let trump: Suit = Suit.HEARTS;
    let cards: Card[] = [
      c(Ordinal.KING, trump),
      c(Ordinal.QUEEN, trump),
      c(Ordinal.JACK, trump),
      c(Ordinal.TEN, trump),
      c(Ordinal.NINE, trump),
      c(Ordinal.EIGHT, trump),
      c(Ordinal.SEVEN, trump),
      c(Ordinal.SIX, trump),
      c(Ordinal.FIVE, trump),
      c(Ordinal.FOUR, trump),
      c(Ordinal.THREE, trump),
      c(Ordinal.TWO, trump),
      c(Ordinal.ACE, trump),
    ];

    new Util().shuffle(cards);

    // test
    new Ranker(trump).customSortArray(cards);

    let i = 0;
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.TWO);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.THREE);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.FOUR);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.SIX);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.SEVEN);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.EIGHT);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.NINE);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.TEN);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.QUEEN);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.KING);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.ACE);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.JACK);
    expect(cards[i++].ordinal).toStrictEqual(Ordinal.FIVE);
  });
});

describe.each`
  num  | trump          | leading        | a                                | b                                | expected
  ${1} | ${Suit.HEARTS} | ${null}        | ${c(Ordinal.KING, Suit.HEARTS)}  | ${c(Ordinal.TWO, Suit.HEARTS)}   | ${1}
  ${2} | ${Suit.CLUBS}  | ${null}        | ${c(Ordinal.TWO, Suit.DIAMONDS)} | ${c(Ordinal.ACE, Suit.DIAMONDS)} | ${1}
  ${3} | ${Suit.CLUBS}  | ${null}        | ${c(Ordinal.TEN, Suit.DIAMONDS)} | ${c(Ordinal.TEN, Suit.HEARTS)}   | ${0}
  ${4} | ${Suit.CLUBS}  | ${null}        | ${c(Ordinal.ACE, Suit.CLUBS)}    | ${c(Ordinal.KING, Suit.SPADES)}  | ${1}
  ${5} | ${Suit.CLUBS}  | ${Suit.HEARTS} | ${c(Ordinal.TWO, Suit.CLUBS)}    | ${c(Ordinal.KING, Suit.HEARTS)}  | ${1}
  ${6} | ${Suit.CLUBS}  | ${Suit.HEARTS} | ${c(Ordinal.TWO, Suit.SPADES)}   | ${c(Ordinal.SIX, Suit.SPADES)}   | ${1}
  ${7} | ${Suit.CLUBS}  | ${Suit.HEARTS} | ${c(Ordinal.TEN, Suit.DIAMONDS)} | ${c(Ordinal.SIX, Suit.SPADES)}   | ${1}
  ${8} | ${Suit.CLUBS}  | ${Suit.HEARTS} | ${c(Ordinal.TWO, Suit.HEARTS)}   | ${c(Ordinal.TEN, Suit.DIAMONDS)} | ${1}
`(
  "for customSort, with n:$num t:$trump l:$leading a:$a b:$b expected=$expected",
  ({ trump, leading, a, b, expected }) => {
    it("n should be ordinal: expected", () => {
      let ranker: Ranker = new Ranker(trump, leading);

      // test
      let result: number = ranker.customSort(a, b);
      let resultReverse: number = ranker.customSort(b, a);

      expect(result).toBe(expected as number);
      let expectedReverse: number = expected == 0 ? 0 : expected * -1;
      expect(resultReverse).toBe(expectedReverse);
    });
  }
);
