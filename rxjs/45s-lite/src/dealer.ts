import { Card } from "./card";
import { Deck } from "./deck";
import { Constants } from "./constants";
import { Table } from "./table";
import { Player } from "./player";
import { Bid } from "./bid";
import { Suit } from "./suit";
import { Trick } from "./trick";
import { Ranker } from "./ranker";

import { of } from "rxjs";
import { repeat, tap } from "rxjs/operators";

export class Dealer {
  private deck: Deck;

  deal(table: Table) {
    this.deck = new Deck();
    this.deck.shuffle();

    this.dealHands(table, this.deck);
    table.topCard = this.deck.cards.shift();
    table.notifyGameStart();
  }

  get numCardsInDeck(): number {
    return this.deck.cards.length;
  }

  public playRound(table: Table) {
    let bids: Bid[] = this.getBids(table);
    let trick: Trick = this.determineRoundWinner(table, bids);
    table.addTrick(trick);
    table.bumpRoundNum();
  }

  determineRoundWinner(table: Table, bids: Bid[]): Trick {
    let ranker = new Ranker(table.trumpSuit, table.leadingCard.suit);
    ranker.customSortBids(bids);
    let winningBid: Bid = bids[bids.length - 1];
    let trick: Trick = new Trick(winningBid, bids);
    return trick;
  }

  getBids(table: Table): Bid[] {
    let topCard: Card = table.topCard;
    let bids: Bid[] = [];

    table.players.forEach((player) => {
      let leadingSuit: Suit = table.leadingCard != null ? table.leadingCard.suit : null;
      let bid: Bid = player.getBid(table.trumpSuit, leadingSuit);
      // console.log(`TRACER toronto st patricks bid: ${bid}`);
      if (table.leadingCard == null) {
        table.leadingCard = bid.card;
        player.notifyLeadingSuitForRound(table.trumpSuit, table.leadingCard.suit);
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
