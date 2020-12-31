import { C } from "../c";
import { Card } from "../card";
import { Hand } from "../hand";
import { Strategies, Strategy } from "../strategy";
import { Suit } from "../suit";
import { Trick } from "../trick";

function h(cards: Card[]) {
  let hand: Hand = new Hand();
  hand.cards = cards;
  return hand;
}

describe.each`
  hand                                      | trumpSuit     | leadingSuit | expected
  ${h([C._3C, C._8C, C._JD, C._4H, C._KS])} | ${Suit.CLUBS} | ${null}     | ${C._3C}
`("for select, with h=$hand t=$trumpSuit l:leadingSuit e=$expected", ({ hand, trumpSuit, leadingSuit, expected }) => {
  it("card should be expected", () => {
    let strategy: Strategy = new Strategies().getStrategy("default");
    let expectedNumCards: number = hand.getNumCards() - 1;
    hand.sortCards(trumpSuit, leadingSuit);
    let trick: Trick = new Trick(trumpSuit);
    trick.leadingSuit = leadingSuit;

    // test
    let result: Card = strategy.select(hand, trick);

    expect(hand.getNumCards()).toBe(expectedNumCards);
    expect(result.ordinal).toBe(expected.ordinal);
    expect(result.suit).toBe(expected.suit);
  });
});
