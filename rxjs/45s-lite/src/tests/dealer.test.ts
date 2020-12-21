import { Card } from "../card";
import { Deck } from "../deck";
import { Constants } from "../constants";
import { Dealer } from "../dealer";
import { Config } from "../config";
import { Table } from "../table";
import { Player } from "../player";

describe("Dealer", () => {
  test("deal", () => {
    let table: Table = new Config().table;
    let dealer: Dealer = new Dealer();

    // test
    dealer.deal(table);

    let { NUM_CARDS_IN_HAND } = Constants;
    table.players.forEach((player) => {
      expect(player.hand.cards.length).toBe(NUM_CARDS_IN_HAND);
    });
    expect(table.topCard).toBeTruthy();
  });
  test("dealHand to players", () => {
    let table: Table = new Config().table;
    let dealer: Dealer = new Dealer();
    let deck: Deck = new Deck();

    // test
    dealer.dealHands(table, deck);

    let { NUM_CARDS_IN_HAND, NUM_CARDS_IN_DECK } = Constants;
    table.players.forEach((player) => {
      expect(player.hand.cards.length).toBe(NUM_CARDS_IN_HAND);
    });

    const NUM_HANDS = table.players.length;
    expect(deck.cards.length).toBe(NUM_CARDS_IN_DECK - NUM_CARDS_IN_HAND * NUM_HANDS);
  });
  test("dealHand to player", () => {
    let table: Table = new Config().table;
    let dealer: Dealer = new Dealer();
    let player: Player = table.players.shift();
    let deck: Deck = new Deck();

    // test
    dealer.dealHand(player, deck);

    let { NUM_CARDS_IN_HAND, NUM_CARDS_IN_DECK } = Constants;
    expect(player.hand.cards.length).toBe(NUM_CARDS_IN_HAND);

    const NUM_HANDS = 1;
    expect(deck.cards.length).toBe(NUM_CARDS_IN_DECK - NUM_CARDS_IN_HAND * NUM_HANDS);
  });
});
