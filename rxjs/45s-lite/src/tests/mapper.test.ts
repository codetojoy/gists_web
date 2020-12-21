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

function c(ord, suit) {
  return new Card(ord, suit);
}

describe.each`
  ord   | suit             | expected
  ${1}  | ${Suit.CLUBS}    | ${c(Ordinal.ACE, Suit.CLUBS)}
  ${2}  | ${Suit.CLUBS}    | ${c(Ordinal.TWO, Suit.CLUBS)}
  ${3}  | ${Suit.CLUBS}    | ${c(Ordinal.THREE, Suit.CLUBS)}
  ${4}  | ${Suit.CLUBS}    | ${c(Ordinal.FOUR, Suit.CLUBS)}
  ${5}  | ${Suit.CLUBS}    | ${c(Ordinal.FIVE, Suit.CLUBS)}
  ${6}  | ${Suit.CLUBS}    | ${c(Ordinal.SIX, Suit.CLUBS)}
  ${7}  | ${Suit.CLUBS}    | ${c(Ordinal.SEVEN, Suit.CLUBS)}
  ${8}  | ${Suit.CLUBS}    | ${c(Ordinal.EIGHT, Suit.CLUBS)}
  ${9}  | ${Suit.CLUBS}    | ${c(Ordinal.NINE, Suit.CLUBS)}
  ${10} | ${Suit.CLUBS}    | ${c(Ordinal.TEN, Suit.CLUBS)}
  ${11} | ${Suit.CLUBS}    | ${c(Ordinal.JACK, Suit.CLUBS)}
  ${12} | ${Suit.CLUBS}    | ${c(Ordinal.QUEEN, Suit.CLUBS)}
  ${13} | ${Suit.CLUBS}    | ${c(Ordinal.KING, Suit.CLUBS)}
  ${1}  | ${Suit.DIAMONDS} | ${c(Ordinal.ACE, Suit.DIAMONDS)}
  ${2}  | ${Suit.DIAMONDS} | ${c(Ordinal.TWO, Suit.DIAMONDS)}
  ${3}  | ${Suit.DIAMONDS} | ${c(Ordinal.THREE, Suit.DIAMONDS)}
  ${4}  | ${Suit.DIAMONDS} | ${c(Ordinal.FOUR, Suit.DIAMONDS)}
  ${5}  | ${Suit.DIAMONDS} | ${c(Ordinal.FIVE, Suit.DIAMONDS)}
  ${6}  | ${Suit.DIAMONDS} | ${c(Ordinal.SIX, Suit.DIAMONDS)}
  ${7}  | ${Suit.DIAMONDS} | ${c(Ordinal.SEVEN, Suit.DIAMONDS)}
  ${8}  | ${Suit.DIAMONDS} | ${c(Ordinal.EIGHT, Suit.DIAMONDS)}
  ${9}  | ${Suit.DIAMONDS} | ${c(Ordinal.NINE, Suit.DIAMONDS)}
  ${10} | ${Suit.DIAMONDS} | ${c(Ordinal.TEN, Suit.DIAMONDS)}
  ${11} | ${Suit.DIAMONDS} | ${c(Ordinal.JACK, Suit.DIAMONDS)}
  ${12} | ${Suit.DIAMONDS} | ${c(Ordinal.QUEEN, Suit.DIAMONDS)}
  ${13} | ${Suit.DIAMONDS} | ${c(Ordinal.KING, Suit.DIAMONDS)}
  ${1}  | ${Suit.HEARTS}   | ${c(Ordinal.ACE, Suit.HEARTS)}
  ${2}  | ${Suit.HEARTS}   | ${c(Ordinal.TWO, Suit.HEARTS)}
  ${3}  | ${Suit.HEARTS}   | ${c(Ordinal.THREE, Suit.HEARTS)}
  ${4}  | ${Suit.HEARTS}   | ${c(Ordinal.FOUR, Suit.HEARTS)}
  ${5}  | ${Suit.HEARTS}   | ${c(Ordinal.FIVE, Suit.HEARTS)}
  ${6}  | ${Suit.HEARTS}   | ${c(Ordinal.SIX, Suit.HEARTS)}
  ${7}  | ${Suit.HEARTS}   | ${c(Ordinal.SEVEN, Suit.HEARTS)}
  ${8}  | ${Suit.HEARTS}   | ${c(Ordinal.EIGHT, Suit.HEARTS)}
  ${9}  | ${Suit.HEARTS}   | ${c(Ordinal.NINE, Suit.HEARTS)}
  ${10} | ${Suit.HEARTS}   | ${c(Ordinal.TEN, Suit.HEARTS)}
  ${11} | ${Suit.HEARTS}   | ${c(Ordinal.JACK, Suit.HEARTS)}
  ${12} | ${Suit.HEARTS}   | ${c(Ordinal.QUEEN, Suit.HEARTS)}
  ${13} | ${Suit.HEARTS}   | ${c(Ordinal.KING, Suit.HEARTS)}
  ${1}  | ${Suit.SPADES}   | ${c(Ordinal.ACE, Suit.SPADES)}
  ${2}  | ${Suit.SPADES}   | ${c(Ordinal.TWO, Suit.SPADES)}
  ${3}  | ${Suit.SPADES}   | ${c(Ordinal.THREE, Suit.SPADES)}
  ${4}  | ${Suit.SPADES}   | ${c(Ordinal.FOUR, Suit.SPADES)}
  ${5}  | ${Suit.SPADES}   | ${c(Ordinal.FIVE, Suit.SPADES)}
  ${6}  | ${Suit.SPADES}   | ${c(Ordinal.SIX, Suit.SPADES)}
  ${7}  | ${Suit.SPADES}   | ${c(Ordinal.SEVEN, Suit.SPADES)}
  ${8}  | ${Suit.SPADES}   | ${c(Ordinal.EIGHT, Suit.SPADES)}
  ${9}  | ${Suit.SPADES}   | ${c(Ordinal.NINE, Suit.SPADES)}
  ${10} | ${Suit.SPADES}   | ${c(Ordinal.TEN, Suit.SPADES)}
  ${11} | ${Suit.SPADES}   | ${c(Ordinal.JACK, Suit.SPADES)}
  ${12} | ${Suit.SPADES}   | ${c(Ordinal.QUEEN, Suit.SPADES)}
  ${13} | ${Suit.SPADES}   | ${c(Ordinal.KING, Suit.SPADES)}
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
