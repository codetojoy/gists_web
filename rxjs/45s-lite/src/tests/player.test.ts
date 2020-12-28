import { Bid } from "../bid";
import { Card } from "../card";
import { Hand } from "../hand";
import { Ordinal } from "../ordinal";
import { Player } from "../player";
import { Suit } from "../suit";

function buildCard(ordinal: Ordinal, suit: Suit) {
  return new Card(ordinal, suit);
}

function buildHand() {
  let cards: Card[] = [];
  cards.push(buildCard(Ordinal.THREE, Suit.CLUBS));
  cards.push(buildCard(Ordinal.EIGHT, Suit.CLUBS));
  cards.push(buildCard(Ordinal.JACK, Suit.DIAMONDS));
  cards.push(buildCard(Ordinal.FOUR, Suit.HEARTS));
  cards.push(buildCard(Ordinal.KING, Suit.SPADES));
  return cards;
}

describe("Player", () => {
  test("get bid : first play", () => {
    let hand: Hand = new Hand();
    hand.cards = buildHand();
    let player: Player = new Player("mozart");
    player.hand = hand;
    const topCard: Card = buildCard(Ordinal.NINE, Suit.DIAMONDS);
    const trumpSuit: Suit = topCard.suit;
    const leadingSuit: Suit = null;
    player.notifyTrumpSuit(trumpSuit);

    // test
    let bid: Bid = player.getBid(trumpSuit, leadingSuit);

    expect(bid.player.getNumCardsInHand()).toBe(4);
    expect(bid.card.ordinal).toBe(Ordinal.JACK);
    expect(bid.card.suit).toBe(Suit.DIAMONDS);
  });
});
