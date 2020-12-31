import { Bid } from "../bid";
import { Card } from "../card";
import { Hand } from "../hand";
import { Mapper } from "../mapper";
import { Ordinal } from "../ordinal";
import { Player } from "../player";
import { Strategies, Strategy } from "../strategy";
import { Suit } from "../suit";
import { Trick } from "../trick";
import { Validator, Validators } from "../validator";

function c(ordinal: Ordinal, suit: Suit): Card {
  return new Card(ordinal, suit);
}

function h(cards: Card[]) {
  let hand: Hand = new Hand();
  hand.cards = cards;

  return hand;
}

const _8D: Card = c(Ordinal.EIGHT, Suit.DIAMONDS);
const _10H: Card = c(Ordinal.TEN, Suit.HEARTS);

const CLUBS: Suit = Suit.CLUBS;
const DIAMONDS: Suit = Suit.DIAMONDS;

describe.each`
  hand        | card    | trumpSuit | leadingSuit | hasTrumpBeenPlayed | expected
  ${h([_8D])} | ${_10H} | ${CLUBS}  | ${null}     | ${false}           | ${true}
`(
  "for dummy validator, with h=$hand c=$card t=$trumpSuit l=$leadingSuit h=$hasTrumpBeenPlayed e=$expected",
  ({ hand, card, trumpSuit, leadingSuit, hasTrumpBeenPlayed, expected }) => {
    it("card should be expected", () => {
      let validators: Validators = new Validators();
      let validator: Validator = validators.getValidator(validators.IDENTITY);
      let trick: Trick = new Trick(trumpSuit);
      trick.leadingSuit = leadingSuit;
      trick.hasTrumpBeenPlayed = hasTrumpBeenPlayed;
      let player: Player = new Player("p1");
      player.hand = hand;
      let bid: Bid = new Bid(card, player);

      // test
      let result: boolean = validator.validate(bid, trick);

      expect(result).toBe(expected);
    });
  }
);

describe.each`
  hand        | card    | trumpSuit | leadingSuit | hasTrumpBeenPlayed | expected
  ${h([_8D])} | ${_10H} | ${CLUBS}  | ${null}     | ${false}           | ${true}
  ${h([_8D])} | ${_10H} | ${CLUBS}  | ${DIAMONDS} | ${false}           | ${false}
`(
  "for FollowLeadingSuitRule validator, with h=$hand c=$card t=$trumpSuit l=$leadingSuit h=$hasTrumpBeenPlayed e=$expected",
  ({ hand, card, trumpSuit, leadingSuit, hasTrumpBeenPlayed, expected }) => {
    it("card should be expected", () => {
      let validators: Validators = new Validators();
      let validator: Validator = validators.getValidator(validators.RULE_FOLLOW_LEADING_SUIT);
      let trick: Trick = new Trick(trumpSuit);
      trick.leadingSuit = leadingSuit;
      trick.hasTrumpBeenPlayed = hasTrumpBeenPlayed;
      let player: Player = new Player("p1");
      player.hand = hand;
      let bid: Bid = new Bid(card, player);

      // test
      let result: boolean = validator.validate(bid, trick);

      expect(result).toBe(expected);
    });
  }
);
