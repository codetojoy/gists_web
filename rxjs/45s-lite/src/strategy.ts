import { Card } from "./card";
import { Deck } from "./deck";
import { Config } from "./config";
import { Table } from "./table";
import { Hand } from "./hand";
import { Bid } from "./bid";
import { Suit } from "./suit";
import { Ranker } from "./ranker";

export interface Strategy {
  select(hand: Hand, trumpSuit: Suit, leadingSuit: Suit): Card;
}

export class Strategies {
  getStrategy(type: string) {
    return new DefaultStrategy();
  }
}

class DefaultStrategy implements Strategy {
  public select(hand: Hand, trumpSuit: Suit, leadingSuit: Suit): Card {
    return hand.selectBestCard();
  }
}
