import { Card } from "../card";
import { Ordinal } from "../ordinal";
import { Suit } from "../suit";
import { Util } from "../util";
import { C } from "../c";

describe("Util", () => {
  test("removeCard", () => {
    let cards: Card[] = [C._AS, C._10H, C._KC];
    let numCards: number = cards.length;
    let card: Card = C._10H;

    // test
    new Util().removeCard(cards, card);

    expect(cards.length).toBe(numCards - 1);
  });
});
