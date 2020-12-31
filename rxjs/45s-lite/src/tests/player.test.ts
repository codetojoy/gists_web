import { Bid } from "../bid";
import { Card } from "../card";
import { Hand } from "../hand";
import { Ordinal } from "../ordinal";
import { Player } from "../player";
import { Suit } from "../suit";
import { Trick } from "../trick";
import { C } from "../c";

describe("Player", () => {
  test("get bid : first play", () => {
    let hand: Hand = new Hand([C._3C, C._8C, C._JD, C._4H, C._KS]);
    let numCards: number = hand.getNumCards();
    let player: Player = new Player("mozart", hand);
    const topCard: Card = C._9D;
    const trumpSuit: Suit = topCard.suit;
    const leadingSuit: Suit = null;
    player.notifyTrumpSuit(trumpSuit);
    let trick: Trick = new Trick(trumpSuit);
    trick.leadingSuit = leadingSuit;

    // test
    let bid: Bid = player.getBid(trick);

    expect(bid.player.getNumCardsInHand()).toBe(numCards - 1);
    expect(bid.card.ordinal).toBe(Ordinal.JACK);
    expect(bid.card.suit).toBe(Suit.DIAMONDS);
  });
});
