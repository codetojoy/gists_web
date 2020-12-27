import { Card } from "../card";
import { Deck } from "../deck";
import { Constants } from "../constants";
import { Suit } from "../suit";
import { Player } from "../player";
import { Hand } from "../hand";
import { Mapper } from "../mapper";
import { Bid } from "../bid";
import { Ordinal } from "../ordinal";
import { Strategies, Strategy } from "../strategy";

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
    let expectedNumCards: number = hand.cards.length - 1;

    // test
    let result: Card = strategy.select(hand, trumpSuit, leadingSuit);

    expect(hand.cards.length).toBe(expectedNumCards);
    expect(result.ordinal).toBe(expected.ordinal);
    expect(result.suit).toBe(expected.suit);
  });
});

/*
describe("Strategy", () => {
  test("select : first play", () => {
    let hand: Hand = new Hand();
    hand.cards = buildHand();
    let topCard: Card = buildCard(Ordinal.NINE, Suit.DIAMONDS);
    let trumpSuit: Suit = topCard.suit;
    let leadingSuit: Suit = null;
    let strategy: Strategy = new Strategies().getStrategy("default");

    // test
    let card: Card = strategy.select(hand, trumpSuit, leadingSuit);

    expect(hand.cards.length).toBe(4);
    expect(card.ordinal).toBe(Ordinal.THREE);
    expect(card.suit).toBe(Suit.CLUBS);
  });
});
*/
