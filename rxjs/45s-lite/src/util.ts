import { tap } from "rxjs/operators";
import { range } from "rxjs";

export class Util {
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
