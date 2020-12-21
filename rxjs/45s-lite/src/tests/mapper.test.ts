import { Card } from "../card";
import { Suit } from "../suit";
import { Mapper } from "../mapper";
import { Ordinal } from "../ordinal";

describe.each`
  ord              | suit             | expected
  ${Ordinal.ACE}   | ${Suit.CLUBS}    | ${0}
  ${Ordinal.TWO}   | ${Suit.CLUBS}    | ${1}
  ${Ordinal.THREE} | ${Suit.CLUBS}    | ${2}
  ${Ordinal.FOUR}  | ${Suit.CLUBS}    | ${3}
  ${Ordinal.FIVE}  | ${Suit.CLUBS}    | ${4}
  ${Ordinal.SIX}   | ${Suit.CLUBS}    | ${5}
  ${Ordinal.SEVEN} | ${Suit.CLUBS}    | ${6}
  ${Ordinal.EIGHT} | ${Suit.CLUBS}    | ${7}
  ${Ordinal.NINE}  | ${Suit.CLUBS}    | ${8}
  ${Ordinal.TEN}   | ${Suit.CLUBS}    | ${9}
  ${Ordinal.JACK}  | ${Suit.CLUBS}    | ${10}
  ${Ordinal.QUEEN} | ${Suit.CLUBS}    | ${11}
  ${Ordinal.KING}  | ${Suit.CLUBS}    | ${12}
  ${Ordinal.ACE}   | ${Suit.DIAMONDS} | ${0 + 1 * 13}
  ${Ordinal.TWO}   | ${Suit.DIAMONDS} | ${1 + 1 * 13}
  ${Ordinal.THREE} | ${Suit.DIAMONDS} | ${2 + 1 * 13}
  ${Ordinal.FOUR}  | ${Suit.DIAMONDS} | ${3 + 1 * 13}
  ${Ordinal.FIVE}  | ${Suit.DIAMONDS} | ${4 + 1 * 13}
  ${Ordinal.SIX}   | ${Suit.DIAMONDS} | ${5 + 1 * 13}
  ${Ordinal.SEVEN} | ${Suit.DIAMONDS} | ${6 + 1 * 13}
  ${Ordinal.EIGHT} | ${Suit.DIAMONDS} | ${7 + 1 * 13}
  ${Ordinal.NINE}  | ${Suit.DIAMONDS} | ${8 + 1 * 13}
  ${Ordinal.TEN}   | ${Suit.DIAMONDS} | ${9 + 1 * 13}
  ${Ordinal.JACK}  | ${Suit.DIAMONDS} | ${10 + 1 * 13}
  ${Ordinal.QUEEN} | ${Suit.DIAMONDS} | ${11 + 1 * 13}
  ${Ordinal.KING}  | ${Suit.DIAMONDS} | ${12 + 1 * 13}
  ${Ordinal.ACE}   | ${Suit.HEARTS}   | ${0 + 2 * 13}
  ${Ordinal.TWO}   | ${Suit.HEARTS}   | ${1 + 2 * 13}
  ${Ordinal.THREE} | ${Suit.HEARTS}   | ${2 + 2 * 13}
  ${Ordinal.FOUR}  | ${Suit.HEARTS}   | ${3 + 2 * 13}
  ${Ordinal.FIVE}  | ${Suit.HEARTS}   | ${4 + 2 * 13}
  ${Ordinal.SIX}   | ${Suit.HEARTS}   | ${5 + 2 * 13}
  ${Ordinal.SEVEN} | ${Suit.HEARTS}   | ${6 + 2 * 13}
  ${Ordinal.EIGHT} | ${Suit.HEARTS}   | ${7 + 2 * 13}
  ${Ordinal.NINE}  | ${Suit.HEARTS}   | ${8 + 2 * 13}
  ${Ordinal.TEN}   | ${Suit.HEARTS}   | ${9 + 2 * 13}
  ${Ordinal.JACK}  | ${Suit.HEARTS}   | ${10 + 2 * 13}
  ${Ordinal.QUEEN} | ${Suit.HEARTS}   | ${11 + 2 * 13}
  ${Ordinal.KING}  | ${Suit.HEARTS}   | ${12 + 2 * 13}
  ${Ordinal.ACE}   | ${Suit.SPADES}   | ${0 + 3 * 13}
  ${Ordinal.TWO}   | ${Suit.SPADES}   | ${1 + 3 * 13}
  ${Ordinal.THREE} | ${Suit.SPADES}   | ${2 + 3 * 13}
  ${Ordinal.FOUR}  | ${Suit.SPADES}   | ${3 + 3 * 13}
  ${Ordinal.FIVE}  | ${Suit.SPADES}   | ${4 + 3 * 13}
  ${Ordinal.SIX}   | ${Suit.SPADES}   | ${5 + 3 * 13}
  ${Ordinal.SEVEN} | ${Suit.SPADES}   | ${6 + 3 * 13}
  ${Ordinal.EIGHT} | ${Suit.SPADES}   | ${7 + 3 * 13}
  ${Ordinal.NINE}  | ${Suit.SPADES}   | ${8 + 3 * 13}
  ${Ordinal.TEN}   | ${Suit.SPADES}   | ${9 + 3 * 13}
  ${Ordinal.JACK}  | ${Suit.SPADES}   | ${10 + 3 * 13}
  ${Ordinal.QUEEN} | ${Suit.SPADES}   | ${11 + 3 * 13}
  ${Ordinal.KING}  | ${Suit.SPADES}   | ${12 + 3 * 13}
`("for mapSimple, with ord=$ord suit=$suit expected=$expected", ({ ord, suit, expected }) => {
  it("n should be ordinal: expected", () => {
    let result: number = new Mapper().getCardId(ord, suit);

    expect(result).toBe(expected);
  });
});

describe.each`
  ord   | suit             | expected
  ${1}  | ${Suit.CLUBS}    | ${new Card(0, Suit.CLUBS, Ordinal.ACE)}
  ${2}  | ${Suit.CLUBS}    | ${new Card(1, Suit.CLUBS, Ordinal.TWO)}
  ${3}  | ${Suit.CLUBS}    | ${new Card(2, Suit.CLUBS, Ordinal.THREE)}
  ${4}  | ${Suit.CLUBS}    | ${new Card(3, Suit.CLUBS, Ordinal.FOUR)}
  ${5}  | ${Suit.CLUBS}    | ${new Card(4, Suit.CLUBS, Ordinal.FIVE)}
  ${6}  | ${Suit.CLUBS}    | ${new Card(5, Suit.CLUBS, Ordinal.SIX)}
  ${7}  | ${Suit.CLUBS}    | ${new Card(6, Suit.CLUBS, Ordinal.SEVEN)}
  ${8}  | ${Suit.CLUBS}    | ${new Card(7, Suit.CLUBS, Ordinal.EIGHT)}
  ${9}  | ${Suit.CLUBS}    | ${new Card(8, Suit.CLUBS, Ordinal.NINE)}
  ${10} | ${Suit.CLUBS}    | ${new Card(9, Suit.CLUBS, Ordinal.TEN)}
  ${11} | ${Suit.CLUBS}    | ${new Card(10, Suit.CLUBS, Ordinal.JACK)}
  ${12} | ${Suit.CLUBS}    | ${new Card(11, Suit.CLUBS, Ordinal.QUEEN)}
  ${13} | ${Suit.CLUBS}    | ${new Card(12, Suit.CLUBS, Ordinal.KING)}
  ${1}  | ${Suit.DIAMONDS} | ${new Card(0 + 13, Suit.DIAMONDS, Ordinal.ACE)}
  ${2}  | ${Suit.DIAMONDS} | ${new Card(1 + 13, Suit.DIAMONDS, Ordinal.TWO)}
  ${3}  | ${Suit.DIAMONDS} | ${new Card(2 + 13, Suit.DIAMONDS, Ordinal.THREE)}
  ${4}  | ${Suit.DIAMONDS} | ${new Card(3 + 13, Suit.DIAMONDS, Ordinal.FOUR)}
  ${5}  | ${Suit.DIAMONDS} | ${new Card(4 + 13, Suit.DIAMONDS, Ordinal.FIVE)}
  ${6}  | ${Suit.DIAMONDS} | ${new Card(5 + 13, Suit.DIAMONDS, Ordinal.SIX)}
  ${7}  | ${Suit.DIAMONDS} | ${new Card(6 + 13, Suit.DIAMONDS, Ordinal.SEVEN)}
  ${8}  | ${Suit.DIAMONDS} | ${new Card(7 + 13, Suit.DIAMONDS, Ordinal.EIGHT)}
  ${9}  | ${Suit.DIAMONDS} | ${new Card(8 + 13, Suit.DIAMONDS, Ordinal.NINE)}
  ${10} | ${Suit.DIAMONDS} | ${new Card(9 + 13, Suit.DIAMONDS, Ordinal.TEN)}
  ${11} | ${Suit.DIAMONDS} | ${new Card(10 + 13, Suit.DIAMONDS, Ordinal.JACK)}
  ${12} | ${Suit.DIAMONDS} | ${new Card(11 + 13, Suit.DIAMONDS, Ordinal.QUEEN)}
  ${13} | ${Suit.DIAMONDS} | ${new Card(12 + 13, Suit.DIAMONDS, Ordinal.KING)}
  ${1}  | ${Suit.HEARTS}   | ${new Card(0 + 26, Suit.HEARTS, Ordinal.ACE)}
  ${2}  | ${Suit.HEARTS}   | ${new Card(1 + 26, Suit.HEARTS, Ordinal.TWO)}
  ${3}  | ${Suit.HEARTS}   | ${new Card(2 + 26, Suit.HEARTS, Ordinal.THREE)}
  ${4}  | ${Suit.HEARTS}   | ${new Card(3 + 26, Suit.HEARTS, Ordinal.FOUR)}
  ${5}  | ${Suit.HEARTS}   | ${new Card(4 + 26, Suit.HEARTS, Ordinal.FIVE)}
  ${6}  | ${Suit.HEARTS}   | ${new Card(5 + 26, Suit.HEARTS, Ordinal.SIX)}
  ${7}  | ${Suit.HEARTS}   | ${new Card(6 + 26, Suit.HEARTS, Ordinal.SEVEN)}
  ${8}  | ${Suit.HEARTS}   | ${new Card(7 + 26, Suit.HEARTS, Ordinal.EIGHT)}
  ${9}  | ${Suit.HEARTS}   | ${new Card(8 + 26, Suit.HEARTS, Ordinal.NINE)}
  ${10} | ${Suit.HEARTS}   | ${new Card(9 + 26, Suit.HEARTS, Ordinal.TEN)}
  ${11} | ${Suit.HEARTS}   | ${new Card(10 + 26, Suit.HEARTS, Ordinal.JACK)}
  ${12} | ${Suit.HEARTS}   | ${new Card(11 + 26, Suit.HEARTS, Ordinal.QUEEN)}
  ${13} | ${Suit.HEARTS}   | ${new Card(12 + 26, Suit.HEARTS, Ordinal.KING)}
  ${1}  | ${Suit.SPADES}   | ${new Card(0 + 39, Suit.SPADES, Ordinal.ACE)}
  ${2}  | ${Suit.SPADES}   | ${new Card(1 + 39, Suit.SPADES, Ordinal.TWO)}
  ${3}  | ${Suit.SPADES}   | ${new Card(2 + 39, Suit.SPADES, Ordinal.THREE)}
  ${4}  | ${Suit.SPADES}   | ${new Card(3 + 39, Suit.SPADES, Ordinal.FOUR)}
  ${5}  | ${Suit.SPADES}   | ${new Card(4 + 39, Suit.SPADES, Ordinal.FIVE)}
  ${6}  | ${Suit.SPADES}   | ${new Card(5 + 39, Suit.SPADES, Ordinal.SIX)}
  ${7}  | ${Suit.SPADES}   | ${new Card(6 + 39, Suit.SPADES, Ordinal.SEVEN)}
  ${8}  | ${Suit.SPADES}   | ${new Card(7 + 39, Suit.SPADES, Ordinal.EIGHT)}
  ${9}  | ${Suit.SPADES}   | ${new Card(8 + 39, Suit.SPADES, Ordinal.NINE)}
  ${10} | ${Suit.SPADES}   | ${new Card(9 + 39, Suit.SPADES, Ordinal.TEN)}
  ${11} | ${Suit.SPADES}   | ${new Card(10 + 39, Suit.SPADES, Ordinal.JACK)}
  ${12} | ${Suit.SPADES}   | ${new Card(11 + 39, Suit.SPADES, Ordinal.QUEEN)}
  ${13} | ${Suit.SPADES}   | ${new Card(12 + 39, Suit.SPADES, Ordinal.KING)}
`("for mapSimple, with ord=$ord suit=$suit expected=$expected", ({ ord, suit, expected }) => {
  it("n should be ordinal: expected", () => {
    let result: Card = new Mapper().mapSimple(ord, suit);

    expect(result).toStrictEqual(expected);
  });
});

describe.each`
  n     | expected
  ${0}  | ${Ordinal.ACE}
  ${1}  | ${Ordinal.TWO}
  ${2}  | ${Ordinal.THREE}
  ${3}  | ${Ordinal.FOUR}
  ${4}  | ${Ordinal.FIVE}
  ${5}  | ${Ordinal.SIX}
  ${6}  | ${Ordinal.SEVEN}
  ${7}  | ${Ordinal.EIGHT}
  ${8}  | ${Ordinal.NINE}
  ${9}  | ${Ordinal.TEN}
  ${10} | ${Ordinal.JACK}
  ${11} | ${Ordinal.QUEEN}
  ${12} | ${Ordinal.KING}
`("With n=$n and expected=$expected", ({ n, expected }) => {
  it("n should be ordinal: expected", () => {
    let result: Ordinal = new Mapper().mapOrdinal(n);

    expect(result).toBe(expected);
  });
});

describe.each`
  n
  ${-1}
  ${13}
`("With n=$n", ({ n }) => {
  it("mapOrdinal should throw error", () => {
    expect(() => {
      new Mapper().mapOrdinal(n);
    }).toThrow(RangeError);
  });
});

describe.each`
  n
  ${-1}
  ${52}
`("With n=$n", ({ n }) => {
  it("mapInt should throw error", () => {
    expect(() => {
      new Mapper().mapInt(n);
    }).toThrow(RangeError);
  });
});

describe.each`
  n     | expectedOrdinal  | expectedSuit
  ${0}  | ${Ordinal.ACE}   | ${Suit.CLUBS}
  ${1}  | ${Ordinal.TWO}   | ${Suit.CLUBS}
  ${2}  | ${Ordinal.THREE} | ${Suit.CLUBS}
  ${3}  | ${Ordinal.FOUR}  | ${Suit.CLUBS}
  ${4}  | ${Ordinal.FIVE}  | ${Suit.CLUBS}
  ${5}  | ${Ordinal.SIX}   | ${Suit.CLUBS}
  ${6}  | ${Ordinal.SEVEN} | ${Suit.CLUBS}
  ${7}  | ${Ordinal.EIGHT} | ${Suit.CLUBS}
  ${8}  | ${Ordinal.NINE}  | ${Suit.CLUBS}
  ${9}  | ${Ordinal.TEN}   | ${Suit.CLUBS}
  ${10} | ${Ordinal.JACK}  | ${Suit.CLUBS}
  ${11} | ${Ordinal.QUEEN} | ${Suit.CLUBS}
  ${12} | ${Ordinal.KING}  | ${Suit.CLUBS}
  ${13} | ${Ordinal.ACE}   | ${Suit.DIAMONDS}
  ${14} | ${Ordinal.TWO}   | ${Suit.DIAMONDS}
  ${15} | ${Ordinal.THREE} | ${Suit.DIAMONDS}
  ${16} | ${Ordinal.FOUR}  | ${Suit.DIAMONDS}
  ${17} | ${Ordinal.FIVE}  | ${Suit.DIAMONDS}
  ${18} | ${Ordinal.SIX}   | ${Suit.DIAMONDS}
  ${19} | ${Ordinal.SEVEN} | ${Suit.DIAMONDS}
  ${20} | ${Ordinal.EIGHT} | ${Suit.DIAMONDS}
  ${21} | ${Ordinal.NINE}  | ${Suit.DIAMONDS}
  ${22} | ${Ordinal.TEN}   | ${Suit.DIAMONDS}
  ${23} | ${Ordinal.JACK}  | ${Suit.DIAMONDS}
  ${24} | ${Ordinal.QUEEN} | ${Suit.DIAMONDS}
  ${25} | ${Ordinal.KING}  | ${Suit.DIAMONDS}
  ${26} | ${Ordinal.ACE}   | ${Suit.HEARTS}
  ${27} | ${Ordinal.TWO}   | ${Suit.HEARTS}
  ${28} | ${Ordinal.THREE} | ${Suit.HEARTS}
  ${29} | ${Ordinal.FOUR}  | ${Suit.HEARTS}
  ${30} | ${Ordinal.FIVE}  | ${Suit.HEARTS}
  ${31} | ${Ordinal.SIX}   | ${Suit.HEARTS}
  ${32} | ${Ordinal.SEVEN} | ${Suit.HEARTS}
  ${33} | ${Ordinal.EIGHT} | ${Suit.HEARTS}
  ${34} | ${Ordinal.NINE}  | ${Suit.HEARTS}
  ${35} | ${Ordinal.TEN}   | ${Suit.HEARTS}
  ${36} | ${Ordinal.JACK}  | ${Suit.HEARTS}
  ${37} | ${Ordinal.QUEEN} | ${Suit.HEARTS}
  ${38} | ${Ordinal.KING}  | ${Suit.HEARTS}
  ${39} | ${Ordinal.ACE}   | ${Suit.SPADES}
  ${40} | ${Ordinal.TWO}   | ${Suit.SPADES}
  ${41} | ${Ordinal.THREE} | ${Suit.SPADES}
  ${42} | ${Ordinal.FOUR}  | ${Suit.SPADES}
  ${43} | ${Ordinal.FIVE}  | ${Suit.SPADES}
  ${44} | ${Ordinal.SIX}   | ${Suit.SPADES}
  ${45} | ${Ordinal.SEVEN} | ${Suit.SPADES}
  ${46} | ${Ordinal.EIGHT} | ${Suit.SPADES}
  ${47} | ${Ordinal.NINE}  | ${Suit.SPADES}
  ${48} | ${Ordinal.TEN}   | ${Suit.SPADES}
  ${49} | ${Ordinal.JACK}  | ${Suit.SPADES}
  ${50} | ${Ordinal.QUEEN} | ${Suit.SPADES}
  ${51} | ${Ordinal.KING}  | ${Suit.SPADES}
`(
  "With n=$n and expectedOrdinal=$expectedOrdinal expectedSuit=$expectedSuit",
  ({ n, expectedOrdinal, expectedSuit }) => {
    it("mapOrdinal should be ...", () => {
      let result: Card = new Mapper().mapInt(n);

      expect(result.id).toBe(n);
      expect(result.ordinal).toBe(expectedOrdinal);
      expect(result.suit).toBe(expectedSuit);
    });
  }
);
