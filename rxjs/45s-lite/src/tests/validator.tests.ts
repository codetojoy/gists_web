import { Bid } from "../bid";
import { Card } from "../card";
import { Hand } from "../hand";
import { Ordinal } from "../ordinal";
import { Player } from "../player";
import { Suit } from "../suit";
import { Trick, TrickState } from "../trick";
import { Validator, Validators } from "../validator";
import { C } from "../c";

function h(cards: Card[]) {
  return new Hand(cards);
}

const CLUBS: Suit = Suit.CLUBS;
const DIAMONDS: Suit = Suit.DIAMONDS;
const HEARTS: Suit = Suit.HEARTS;
const SPADES: Suit = Suit.SPADES;

let validators: Validators = new Validators();

describe.each`
  hand          | card      | trumpSuit | leadingSuit | hasTrumpBeenPlayed | expected
  ${h([C._8D])} | ${C._10H} | ${CLUBS}  | ${null}     | ${false}           | ${true}
`(
  "for dummy validator, with h=$hand c=$card t=$trumpSuit l=$leadingSuit h=$hasTrumpBeenPlayed e=$expected",
  ({ hand, card, trumpSuit, leadingSuit, hasTrumpBeenPlayed, expected }) => {
    it("card should be expected", () => {
      let validator: Validator = validators.getValidator(validators.IDENTITY);
      let trick: Trick = new Trick(trumpSuit, leadingSuit, hasTrumpBeenPlayed);
      let player: Player = new Player("p1", hand);
      let bid: Bid = new Bid(card, player);

      // test
      let result: boolean = validator.validate(bid, trick);

      expect(result).toBe(expected);
    });
  }
);

describe.each`
  hand          | card      | trumpSuit | leadingSuit | hasTrumpBeenPlayed | expected
  ${h([C._8D])} | ${C._10H} | ${CLUBS}  | ${null}     | ${false}           | ${true}
  ${h([C._8D])} | ${C._10H} | ${CLUBS}  | ${DIAMONDS} | ${false}           | ${false}
  ${h([C._8S])} | ${C._10H} | ${CLUBS}  | ${DIAMONDS} | ${false}           | ${true}
  ${h([C._8S])} | ${C._10C} | ${CLUBS}  | ${DIAMONDS} | ${true}            | ${true}
  ${h([C._8S])} | ${C._10C} | ${CLUBS}  | ${CLUBS}    | ${true}            | ${true}
  ${h([C._8C])} | ${C._10S} | ${CLUBS}  | ${CLUBS}    | ${true}            | ${false}
`(
  "for FollowLeadingSuitRule validator, with h=$hand c=$card t=$trumpSuit l=$leadingSuit h=$hasTrumpBeenPlayed e=$expected",
  ({ hand, card, trumpSuit, leadingSuit, hasTrumpBeenPlayed, expected }) => {
    it("card should be expected", () => {
      let validator: Validator = validators.getValidator(validators.RULE_FOLLOW_LEADING_SUIT);
      let trick: Trick = new Trick(trumpSuit, leadingSuit, hasTrumpBeenPlayed);
      let player: Player = new Player("p1", hand);
      let bid: Bid = new Bid(card, player);

      // test
      let result: boolean = validator.validate(bid, trick);

      expect(result).toBe(expected);
    });
  }
);

describe.each`
  card      | trumpSuit | leadingSuit | hasTrumpBeenPlayed | expected
  ${C._10H} | ${CLUBS}  | ${null}     | ${false}           | ${false}
  ${C._10H} | ${CLUBS}  | ${HEARTS}   | ${false}           | ${true}
  ${C._10H} | ${CLUBS}  | ${HEARTS}   | ${true}            | ${false}
  ${C._10H} | ${CLUBS}  | ${DIAMONDS} | ${false}           | ${true}
`(
  "for FollowLeadingSuitRule doesApply, with h=$hand c=$card t=$trumpSuit l=$leadingSuit h=$hasTrumpBeenPlayed e=$expected",
  ({ hand, card, trumpSuit, leadingSuit, hasTrumpBeenPlayed, expected }) => {
    it("card should be expected", () => {
      let validator: Validator = validators.getValidator(validators.RULE_FOLLOW_LEADING_SUIT);
      let trick: Trick = new Trick(trumpSuit, leadingSuit, hasTrumpBeenPlayed);
      let player: Player = new Player("p1", new Hand());
      let bid: Bid = new Bid(card, player);

      // test
      let result: boolean = validator.doesApply(bid, trick);

      expect(result).toBe(expected);
    });
  }
);
