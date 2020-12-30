import { Card } from "./card";
import { Ranker } from "./ranker";
import { Suit } from "./suit";
import { Util } from "./util";
import { Trick } from "./trick";

export class Hand {
  private _cards: Card[] = [];

  dealCard(card: Card) {
    this._cards.push(card);
  }

  sortCards(trumpSuit: Suit, leadingSuit?: Suit) {
    new Ranker(trumpSuit, leadingSuit).customSortArray(this._cards);
  }

  getNumCards(): number {
    return this._cards.length;
  }

  containsCardOfSuit(suit: Suit): boolean {
    return this._cards.filter((c) => c.suit === suit).length > 0;
  }

  shuffleForTesting() {
    new Util().shuffle(this._cards);
  }

  selectBestCard(trick: Trick): Card {
    let card: Card = null;

    /*
     */
    if (trick.leadingSuit != null) {
      let cardsOfSuit: Card[] = this._cards.filter((c) => c.suit === trick.leadingSuit);
      if (cardsOfSuit.length > 0) {
        card = cardsOfSuit[cardsOfSuit.length - 1];
        new Util().removeCard(this._cards, card);
      } else {
        card = this._cards.pop();
      }
    } else {
      card = this._cards.pop();
    }

    return card;
  }

  public toString() {
    let result = ``;
    this._cards.map((card) => (result += ` ${card.toString()}`));

    return result;
  }

  // ------------ getters / setters

  set cards(value: Card[]) {
    this._cards = value;
  }
}
