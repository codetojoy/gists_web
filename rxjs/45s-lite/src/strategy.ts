import { Card } from "./card";
import { Hand } from "./hand";
import { Trick } from "./trick";

export interface Strategy {
  select(hand: Hand, trick: Trick): Card;
}

export class Strategies {
  getStrategy(type: string) {
    return new DefaultStrategy();
  }
}

class DefaultStrategy implements Strategy {
  public select(hand: Hand, trick: Trick): Card {
    return hand.selectBestCard(trick);
  }
}
