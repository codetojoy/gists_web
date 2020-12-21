import { Card } from "../card";
import { Deck } from "../deck";
import { Constants } from "../constants";
import { Suit } from "../suit";

describe("Deck", () => {
  test("basic constructor", () => {
    const { NUM_CARDS_IN_DECK, DECK_MAX_INDEX } = Constants;

    // test
    let deck: Deck = new Deck();
    let cards: Card[] = deck.cards;

    expect(cards.length).toBe(NUM_CARDS_IN_DECK);
    expect(cards[0].id).toBe(0);
    expect(cards[10].id).toBe(10);
    expect(cards[20].id).toBe(20);
    expect(cards[DECK_MAX_INDEX].id).toBe(DECK_MAX_INDEX);
  });
  test("basic shuffle", () => {
    const { NUM_CARDS_IN_DECK, DECK_MAX_INDEX, DECK_MIN_INDEX, NUM_CARDS_IN_SUIT } = Constants;
    let deck: Deck = new Deck();

    // test
    deck.shuffle();

    let cards: Card[] = deck.cards;

    expect(cards.length).toBe(NUM_CARDS_IN_DECK);
    let countShuffled = 0;
    let countSuit = { clubs: 0, diamonds: 0, hearts: 0, spades: 0 };
    const threshold = 10;

    for (let i = DECK_MIN_INDEX; i <= DECK_MAX_INDEX; i++) {
      if (cards[i].id != i) {
        countShuffled++;
      }
      if (cards[i].suit === Suit.CLUBS) {
        countSuit.clubs++;
      }
      if (cards[i].suit === Suit.DIAMONDS) {
        countSuit.diamonds++;
      }
      if (cards[i].suit === Suit.HEARTS) {
        countSuit.hearts++;
      }
      if (cards[i].suit === Suit.SPADES) {
        countSuit.spades++;
      }
    }

    expect(countSuit.clubs).toBe(NUM_CARDS_IN_SUIT);
    expect(countSuit.diamonds).toBe(NUM_CARDS_IN_SUIT);
    expect(countSuit.hearts).toBe(NUM_CARDS_IN_SUIT);
    expect(countSuit.spades).toBe(NUM_CARDS_IN_SUIT);
    // this is a probability and could fail
    expect(countShuffled > threshold).toBe(true);
  });
});
