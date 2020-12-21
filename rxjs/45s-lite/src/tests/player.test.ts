import { Card } from "../card";
import { Deck } from "../deck";
import { Constants } from "../constants";
import { Suit } from "../suit";
import { Player } from "../player";
import { Hand } from "../hand";
import { Mapper } from "../mapper";
import { Bid } from "../bid";
import { Ordinal } from "../ordinal";

function buildCard(oneBasedOrd: number, suit: Suit) {
  let mapper: Mapper = new Mapper();
  let card: Card = mapper.mapSimple(oneBasedOrd, suit);
  return card;
}

function buildHand() {
  let cards: Card[] = [];
  cards.push(buildCard(2, Suit.CLUBS));
  cards.push(buildCard(7, Suit.CLUBS));
  cards.push(buildCard(10, Suit.DIAMONDS));
  cards.push(buildCard(3, Suit.HEARTS));
  cards.push(buildCard(13, Suit.SPADES));
  return cards;
}

describe("Player", () => {
  test("get bid : first play", () => {
    let hand: Hand = new Hand();
    hand.cards = buildHand();
    let player: Player = new Player("mozart");
    player.hand = hand;
    let topCard: Card = buildCard(8, Suit.DIAMONDS);
    let trumpSuit: Suit = Suit.DIAMONDS;
    let leadingCard: Card = null;

    // test
    let bid: Bid = player.getBid(topCard, leadingCard, trumpSuit);

    expect(bid.player.hand.cards.length).toBe(4);
    expect(bid.card.ordinal).toBe(Ordinal.TWO);
    expect(bid.card.suit).toBe(Suit.CLUBS);
  });
});
