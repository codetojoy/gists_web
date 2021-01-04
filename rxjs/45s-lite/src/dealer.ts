import { of } from "rxjs";
import { repeat, tap } from "rxjs/operators";
import { Bid } from "./bid";
import { Card } from "./card";
import { Constants } from "./constants";
import { Deck } from "./deck";
import { Player } from "./player";
import { Ranker } from "./ranker";
import { Suit } from "./suit";
import { Table } from "./table";
import { Trick } from "./trick";
import { Validator, Validators } from "./validator";

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
    let trick: Trick = new Trick(table.trumpSuit);
    let bids: Bid[] = this.getBids(table, trick);
    this.determineRoundWinner(table, bids, trick);
    table.addTrick(trick);
    table.bumpRoundNum();
    // TODO: award points
  }

  determineRoundWinner(table: Table, bids: Bid[], trick: Trick) {
    let ranker = new Ranker(table.trumpSuit, table.leadingCard.suit);
    ranker.customSortBids(bids);
    let winningBid: Bid = bids[bids.length - 1];
    trick.winningBid = winningBid;
    trick.bids = bids;
  }

  getBids(table: Table, trick: Trick): Bid[] {
    let topCard: Card = table.topCard;
    let bids: Bid[] = [];
    let validators: Validators = new Validators();
    let validator: Validator = validators.getValidator(validators.ALL);

    table.players.forEach((player) => {
      let leadingSuit: Suit = table.leadingCard != null ? table.leadingCard.suit : null;
      trick.leadingSuit = leadingSuit;
      let bid: Bid = player.getBid(trick);
      let isValid: boolean = validator.validate(bid, trick);

      if (!isValid) {
        throw new TypeError(`illegal bid for ${bid.toString()}`);
      }
      // console.log(`TRACER toronto st patricks bid: ${bid}`);
      if (table.leadingCard == null) {
        table.leadingCard = bid.card;
        trick._leadingSuit = table.leadingCard.suit;
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
