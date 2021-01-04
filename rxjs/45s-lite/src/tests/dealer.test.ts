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

let CLUBS: Suit = Suit.CLUBS;
let DIAMONDS: Suit = Suit.DIAMONDS;
let HEARTS: Suit = Suit.HEARTS;
let SPADES: Suit = Suit.SPADES;

function c(ord: Ordinal, suit: Suit) {
  return new Card(ord, suit);
}

function p(name: string, cards: Card[]) {
  let hand: Hand = new Hand(cards);
  let player: Player = new Player(name, hand);
  return player;
}

function pN(cardsList: Card[][]) {
  let players: Player[] = [];

  let index: number = 1;
  cardsList.forEach((cards) => {
    let player: Player = p(`p${index}`, cards);
    players.push(player);
    index++;
  });

  return players;
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
    // no leading cart so mozart leads with QD
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

    expect(table.leadingCard.suit).toStrictEqual(DIAMONDS);
    expect(winningBid.player.name).toBe("mozart");
    expect(bids.length).toBe(3);
    let i = 0;
    expect(bids[i++].player.name).toBe("beethoven");
    expect(bids[i++].player.name).toBe("chopin");
    expect(bids[i++].player.name).toBe("mozart");
  });

  test("determine round winner case 1", () => {
    const trumpSuit: Suit = Suit.CLUBS;
    // no leading cart so mozart leads with QD
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
    let trick: Trick = new Trick(table.trumpSuit);
    let bids: Bid[] = dealer.getBids(table, trick);

    // test
    dealer.determineRoundWinner(table, bids, trick);
    let winningBid: Bid = trick.winningBid;
    let resultBids: Bid[] = trick.bids;

    expect(winningBid.player.name).toBe("mozart");
    expect(resultBids.length).toBe(3);
    let i = 0;
    expect(resultBids[i++].player.name).toBe("beethoven");
    expect(resultBids[i++].player.name).toBe("chopin");
    expect(resultBids[i++].player.name).toBe("mozart");
  });
});

describe.each`
  id   | players                                                  | lc       | hT       | topCard  | expected
  ${1} | ${pN([[C._QD, C._10H], [C._JC, C._8D], [C._6H, C._AS]])} | ${null}  | ${false} | ${C._6C} | ${[{ n: "p1", c: C._QD }, { n: "p2", c: C._8D }, { n: "p3", c: C._AS }]}
  ${2} | ${pN([[C._QD, C._10H], [C._JC, C._8D], [C._6H, C._AS]])} | ${C._JH} | ${false} | ${C._6C} | ${[{ n: "p1", c: C._10H }, { n: "p2", c: C._JC }, { n: "p3", c: C._6H }]}
`("test $id", ({ id, players, lc, hT, topCard, expected }) => {
  it("getBids should ...", () => {
    let leadingCard: Card = lc;
    let hasTrumpBeenPlayed: boolean = hT;
    let trumpSuit = topCard.suit;

    const table: Table = new Table(players);
    table.topCard = topCard;
    table.leadingCard = leadingCard;
    let leadingSuit: Suit = leadingCard != null ? leadingCard.suit : null;
    players.forEach((p) => {
      p.shuffleHandForTesting();
      p.notifyTrumpSuit(trumpSuit);
    });
    let trick: Trick = new Trick(table.trumpSuit, leadingSuit, hasTrumpBeenPlayed);

    // test
    let bids: Bid[] = new Dealer().getBids(table, trick);

    expect(bids.length).toBe(expected.length);
    for (let i = 0; i < bids.length; i++) {
      let actualName: string = bids[i].player.name;
      let actualCard: Card = bids[i].card;
      let expectedName: string = expected[i].n;
      let expectedCard: string = expected[i].c;

      expect(actualName).toBe(expectedName);
      expect(actualCard).toStrictEqual(expectedCard);
    }
  });
});
