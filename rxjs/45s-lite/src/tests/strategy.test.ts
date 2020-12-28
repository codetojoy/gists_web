import { Card } from "../card";
import { Hand } from "../hand";
import { Mapper } from "../mapper";
import { Ordinal } from "../ordinal";
import { Strategies, Strategy } from "../strategy";
import { Suit } from "../suit";

function c(ordinal: Ordinal, suit: Suit) {
  return new Card(ordinal, suit);
}

function h(ids: number[]) {
  let hand: Hand = new Hand();
  let mapper: Mapper = new Mapper();
  hand.cards = ids.map((id) => mapper.mapInt(id));

  return hand;
}

/*
THREE CLUBS, EIGHT CLUBS, JACK DIAMONDS, FOUR HEARTS, KING SPADES
*/

describe.each`
  hand                     | trumpSuit     | leadingSuit | expected
  ${h([2, 7, 23, 29, 51])} | ${Suit.CLUBS} | ${null}     | ${c(Ordinal.THREE, Suit.CLUBS)}
`("for select, with h=$hand t=$trumpSuit l:leadingSuit e=$expected", ({ hand, trumpSuit, leadingSuit, expected }) => {
  it("card should be expected", () => {
    let strategy: Strategy = new Strategies().getStrategy("default");
    let expectedNumCards: number = hand.getNumCards() - 1;
    hand.sortCards(trumpSuit, leadingSuit);

    // test
    let result: Card = strategy.select(hand, trumpSuit, leadingSuit);

    expect(hand.getNumCards()).toBe(expectedNumCards);
    expect(result.ordinal).toBe(expected.ordinal);
    expect(result.suit).toBe(expected.suit);
  });
});
