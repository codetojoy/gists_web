import { Card } from "../card";
import { Ordinal } from "../ordinal";
import { Suit } from "../suit";

describe.each`
  expectedId | ord              | suit
  ${0}       | ${Ordinal.ACE}   | ${Suit.CLUBS}
  ${1}       | ${Ordinal.TWO}   | ${Suit.CLUBS}
  ${2}       | ${Ordinal.THREE} | ${Suit.CLUBS}
  ${3}       | ${Ordinal.FOUR}  | ${Suit.CLUBS}
  ${4}       | ${Ordinal.FIVE}  | ${Suit.CLUBS}
  ${5}       | ${Ordinal.SIX}   | ${Suit.CLUBS}
  ${6}       | ${Ordinal.SEVEN} | ${Suit.CLUBS}
  ${7}       | ${Ordinal.EIGHT} | ${Suit.CLUBS}
  ${8}       | ${Ordinal.NINE}  | ${Suit.CLUBS}
  ${9}       | ${Ordinal.TEN}   | ${Suit.CLUBS}
  ${10}      | ${Ordinal.JACK}  | ${Suit.CLUBS}
  ${11}      | ${Ordinal.QUEEN} | ${Suit.CLUBS}
  ${12}      | ${Ordinal.KING}  | ${Suit.CLUBS}
  ${13}      | ${Ordinal.ACE}   | ${Suit.DIAMONDS}
  ${14}      | ${Ordinal.TWO}   | ${Suit.DIAMONDS}
  ${15}      | ${Ordinal.THREE} | ${Suit.DIAMONDS}
  ${16}      | ${Ordinal.FOUR}  | ${Suit.DIAMONDS}
  ${17}      | ${Ordinal.FIVE}  | ${Suit.DIAMONDS}
  ${18}      | ${Ordinal.SIX}   | ${Suit.DIAMONDS}
  ${19}      | ${Ordinal.SEVEN} | ${Suit.DIAMONDS}
  ${20}      | ${Ordinal.EIGHT} | ${Suit.DIAMONDS}
  ${21}      | ${Ordinal.NINE}  | ${Suit.DIAMONDS}
  ${22}      | ${Ordinal.TEN}   | ${Suit.DIAMONDS}
  ${23}      | ${Ordinal.JACK}  | ${Suit.DIAMONDS}
  ${24}      | ${Ordinal.QUEEN} | ${Suit.DIAMONDS}
  ${25}      | ${Ordinal.KING}  | ${Suit.DIAMONDS}
  ${26}      | ${Ordinal.ACE}   | ${Suit.HEARTS}
  ${27}      | ${Ordinal.TWO}   | ${Suit.HEARTS}
  ${28}      | ${Ordinal.THREE} | ${Suit.HEARTS}
  ${29}      | ${Ordinal.FOUR}  | ${Suit.HEARTS}
  ${30}      | ${Ordinal.FIVE}  | ${Suit.HEARTS}
  ${31}      | ${Ordinal.SIX}   | ${Suit.HEARTS}
  ${32}      | ${Ordinal.SEVEN} | ${Suit.HEARTS}
  ${33}      | ${Ordinal.EIGHT} | ${Suit.HEARTS}
  ${34}      | ${Ordinal.NINE}  | ${Suit.HEARTS}
  ${35}      | ${Ordinal.TEN}   | ${Suit.HEARTS}
  ${36}      | ${Ordinal.JACK}  | ${Suit.HEARTS}
  ${37}      | ${Ordinal.QUEEN} | ${Suit.HEARTS}
  ${38}      | ${Ordinal.KING}  | ${Suit.HEARTS}
  ${39}      | ${Ordinal.ACE}   | ${Suit.SPADES}
  ${40}      | ${Ordinal.TWO}   | ${Suit.SPADES}
  ${41}      | ${Ordinal.THREE} | ${Suit.SPADES}
  ${42}      | ${Ordinal.FOUR}  | ${Suit.SPADES}
  ${43}      | ${Ordinal.FIVE}  | ${Suit.SPADES}
  ${44}      | ${Ordinal.SIX}   | ${Suit.SPADES}
  ${45}      | ${Ordinal.SEVEN} | ${Suit.SPADES}
  ${46}      | ${Ordinal.EIGHT} | ${Suit.SPADES}
  ${47}      | ${Ordinal.NINE}  | ${Suit.SPADES}
  ${48}      | ${Ordinal.TEN}   | ${Suit.SPADES}
  ${49}      | ${Ordinal.JACK}  | ${Suit.SPADES}
  ${50}      | ${Ordinal.QUEEN} | ${Suit.SPADES}
  ${51}      | ${Ordinal.KING}  | ${Suit.SPADES}
`("With expectedId=$expectedId and ord=$ord suit=$suit", ({ expectedId, ord, suit }) => {
  it("Card constructor should be ...", () => {
    let result: Card = new Card(ord, suit);

    expect(result.id).toBe(expectedId);
  });
});
