import { Bid } from "../bid";
import { Card } from "../card";
import { Config } from "../config";
import { Constants } from "../constants";
import { Dealer } from "../dealer";
import { Deck } from "../deck";
import { Hand } from "../hand";
import { Ordinal } from "../ordinal";
import { Player } from "../player";
import { Suit } from "../suit";
import { Table } from "../table";
import { Trick } from "../trick";
import { C } from "../c";

function c(ord: Ordinal, suit: Suit) {
  return new Card(ord, suit);
}

function p(name: string, cards: Card[]) {
  let hand: Hand = new Hand(cards);
  let player: Player = new Player(name, hand);
  return player;
}

describe("Dealer", () => {
  let dealer: Dealer = new Dealer();

  test("deal", () => {
    let table: Table = new Config().table;

    // test
    dealer.deal(table);

    let { NUM_CARDS_IN_HAND } = Constants;
    table.players.forEach((player) => {
      expect(player.getNumCardsInHand()).toBe(NUM_CARDS_IN_HAND);
    });
    expect(table.topCard).toBeTruthy();
  });
  test("dealHand to players", () => {
    let table: Table = new Config().table;
    let deck: Deck = new Deck();

    // test
    dealer.dealHands(table, deck);

    let { NUM_CARDS_IN_HAND, NUM_CARDS_IN_DECK } = Constants;
    table.players.forEach((player) => {
      expect(player.getNumCardsInHand()).toBe(NUM_CARDS_IN_HAND);
    });

    const NUM_HANDS = table.players.length;
    expect(deck.cards.length).toBe(NUM_CARDS_IN_DECK - NUM_CARDS_IN_HAND * NUM_HANDS);
  });
  test("dealHand to player", () => {
    let table: Table = new Config().table;
    let player: Player = table.players.shift();
    let deck: Deck = new Deck();

    // test
    dealer.dealHand(player, deck);

    let { NUM_CARDS_IN_HAND, NUM_CARDS_IN_DECK } = Constants;
    expect(player.getNumCardsInHand()).toBe(NUM_CARDS_IN_HAND);

    const NUM_HANDS = 1;
    expect(deck.cards.length).toBe(NUM_CARDS_IN_DECK - NUM_CARDS_IN_HAND * NUM_HANDS);
  });

  // trump: CLUBS, leading: DIAMONDS
  // chopin wins with Jack of CLUBS
  test("play round w/ leading suit case 1", () => {
    const trumpSuit: Suit = Suit.CLUBS;
    const leadingSuit: Suit = Suit.DIAMONDS;
    const players: Player[] = [
      p("mozart", [c(Ordinal.ACE, leadingSuit), C._10H]),
      p("chopin", [c(Ordinal.JACK, trumpSuit), c(Ordinal.EIGHT, leadingSuit)]),
      p("beethoven", [C._6H, C._AS]),
    ];
    const table: Table = new Table(players);
    table.topCard = new Card(Ordinal.SIX, trumpSuit);
    table.leadingCard = new Card(Ordinal.SEVEN, leadingSuit);
    players.forEach((p) => {
      p.shuffleHandForTesting();
      p.notifyTrumpSuit(trumpSuit);
    });

    dealer.playRound(table);
    let trick: Trick = table.tricks[0];
    let winningBid: Bid = trick.winningBid;
    let bids: Bid[] = trick.bids;

    expect(winningBid.player.name).toBe("chopin");
    expect(bids.length).toBe(3);
    let i = 0;
    expect(bids[i++].player.name).toBe("beethoven");
    expect(bids[i++].player.name).toBe("mozart");
    expect(bids[i++].player.name).toBe("chopin");
  });

  // trump: CLUBS, leading: n/a
  // Q: can you lead with trump ? if so, then this is wrong
  test("play round w/o leading suit case 1", () => {
    const trumpSuit: Suit = Suit.CLUBS;
    const players: Player[] = [
      p("mozart", [C._QD, C._10H]),
      p("chopin", [c(Ordinal.JACK, trumpSuit), C._8D]),
      p("beethoven", [C._6H, C._AS]),
    ];
    const table: Table = new Table(players);
    table.topCard = new Card(Ordinal.SIX, trumpSuit);
    players.forEach((p) => {
      p.shuffleHandForTesting();
      p.notifyTrumpSuit(trumpSuit);
    });

    // test
    dealer.playRound(table);
    let trick: Trick = table.tricks[0];
    let winningBid: Bid = trick.winningBid;
    let bids: Bid[] = trick.bids;

    expect(table.leadingCard.suit).toStrictEqual(Suit.DIAMONDS);
    expect(winningBid.player.name).toBe("mozart");
    expect(bids.length).toBe(3);
    let i = 0;
    expect(bids[i++].player.name).toBe("beethoven");
    expect(bids[i++].player.name).toBe("chopin");
    expect(bids[i++].player.name).toBe("mozart");
  });
});
