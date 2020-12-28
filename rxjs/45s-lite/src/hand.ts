import { Card } from "./card";
import { Ranker } from "./ranker";
import { Suit } from "./suit";
import { Util } from "./util";

export class Hand {
  private _cards: Card[] = [];

  dealCard(card: Card) {
    this._cards.push(card);
  }

  sortCards(trumpSuit: Suit, leadingSuit?: Suit) {
    new Ranker(trumpSuit, leadingSuit).customSortArray(this._cards);
  }

  getNumCards() {
    return this._cards.length;
  }

  shuffleForTesting() {
    new Util().shuffle(this._cards);
  }

  selectBestCard(): Card {
    let card: Card = this._cards.pop();
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
