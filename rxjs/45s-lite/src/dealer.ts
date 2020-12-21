import { Card } from "./card";
import { Deck } from "./deck";
import { Constants } from "./constants";
import { Table } from "./table";
import { Player } from "./player";
import { Bid } from "./bid";

import { of } from "rxjs";
import { repeat, tap } from "rxjs/operators";

export class Dealer {
  private deck: Deck;

  deal(table: Table) {
    this.deck = new Deck();
    this.deck.shuffle();

    this.dealHands(table, this.deck);
    table.topCard = this.deck.cards.shift();
  }

  get numCardsInDeck(): number {
    return this.deck.cards.length;
  }

  public playRound(table: Table) {
    let bids: Bid[] = this.getBids(table);
    table.bumpRoundNum();
  }

  getBids(table: Table) {
    let topCard: Card = table.topCard;
    let bids: Bid[] = [];

    table.players.forEach((player) => {
      let bid: Bid = player.getBid(topCard, table.leadingCard, table.trumpSuit);
      if (table.leadingCard == null) {
        table.leadingCard = bid.card;
      }
      bids.push(bid);
    });

    return bids;
  }

  dealHands(table: Table, deck: Deck) {
    table.players.forEach((player) => this.dealHand(player, deck));
  }

  dealHand(player: Player, deck: Deck) {
    of(1)
      .pipe(
        repeat(Constants.NUM_CARDS_IN_HAND),
        tap((x) => {
          let card: Card = deck.cards.shift();
          player.hand.dealCard(card);
        })
      )
      .subscribe();
  }
}