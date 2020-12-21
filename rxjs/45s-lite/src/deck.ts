import { Card } from "./card";
import { Constants } from "./constants";
import { Mapper } from "./mapper";

import { map, tap, toArray } from "rxjs/operators";
import { range } from "rxjs";
import { Util } from "./util";

export class Deck {
  private deck: Card[] = [];

  constructor() {
    const { DECK_MIN_INDEX, NUM_CARDS_IN_DECK } = Constants;
    const mapper = new Mapper();

    range(DECK_MIN_INDEX, NUM_CARDS_IN_DECK)
      .pipe(
        map((n) => mapper.mapInt(n)),
        toArray()
      )
      .subscribe((arr) => (this.deck = arr));
  }

  get cards(): Card[] {
    return this.deck;
  }

  shuffle() {
    new Util().shuffle(this.deck);
  }
}
