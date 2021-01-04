import { Card } from "../card";
import { Hand } from "../hand";
import { Ordinal } from "../ordinal";
import { Suit } from "../suit";
import { Trick } from "../trick";
import { C } from "../c";

function c(ord: Ordinal, suit: Suit): Card {
  return new Card(ord, suit);
}

function h(cards: Card[]): Hand {
  let hand: Hand = new Hand(cards);
  hand.shuffleForTesting();
  return hand;
}

const CLUBS: Suit = Suit.CLUBS;
const DIAMONDS: Suit = Suit.DIAMONDS;
const HEARTS: Suit = Suit.HEARTS;
const SPADES: Suit = Suit.SPADES;

describe.each`
  id   | hand                         | trump    | leading   | hasTrumpBeenPlayed | expected
  ${1} | ${h([C._10C, C._8D, C._3S])} | ${CLUBS} | ${null}   | ${false}           | ${C._10C}
  ${2} | ${h([C._10C, C._8D, C._3S])} | ${CLUBS} | ${SPADES} | ${false}           | ${C._3S}
  ${2} | ${h([C._10C, C._8D, C._3S])} | ${CLUBS} | ${SPADES} | ${true}            | ${C._10C}
  ${4} | ${h([C._10C, C._JC, C._4C])} | ${CLUBS} | ${null}   | ${false}           | ${C._JC}
  ${5} | ${h([C._10H, C._8D, C._9H])} | ${CLUBS} | ${null}   | ${false}           | ${C._10H}
`("With id=$id", ({ hand, trump, leading, hasTrumpBeenPlayed, expected }) => {
  it("selectBestCard should be ...", () => {
    let trick: Trick = new Trick(trump, leading, hasTrumpBeenPlayed);
    hand.sortCards(trump, leading);

    // test
    let result: Card = hand.selectBestCard(trick);

    expect(result).toStrictEqual(expected);
  });
});
