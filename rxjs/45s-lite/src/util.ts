import { Card } from "./card";
import { tap } from "rxjs/operators";
import { range } from "rxjs";

export class Util {
  removeCard(cards: Card[], card: Card) {
    const index: number = cards.findIndex((c) => c.id === card.id);
    if (index > -1) {
      cards.splice(index, 1);
    }
  }

  // http://stackoverflow.com/a/2450976/12704
  shuffle<T>(array: T[]) {
    range(0, array.length)
      .pipe(
        tap((i) => {
          let j = Math.floor(Math.random() * i);
          [array[i], array[j]] = [array[j], array[i]];
        })
      )
      .subscribe();
  }
}
