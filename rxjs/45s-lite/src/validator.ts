import { Bid } from "./bid";
import { Trick, TrickState } from "./trick";

export interface Validator {
  validate(bid: Bid, trick: Trick): boolean;
}

export class Validators {
  public readonly ALL: string = "all";
  public readonly IDENTITY: string = "identity";
  public readonly RULE_FOLLOW_LEADING_SUIT: string = "rule_follow_leading_suit";

  getValidator(type: string) {
    let validator: Validator = null;

    switch (type) {
      case this.ALL:
        // validator = new MultiValidator([new IdentityValidator()]); // , new FollowLeadingSuitRule()]);
        validator = new MultiValidator([new IdentityValidator(), new FollowLeadingSuitRule()]);
        break;
      case this.IDENTITY:
        validator = new IdentityValidator();
        break;
      case this.RULE_FOLLOW_LEADING_SUIT:
        validator = new FollowLeadingSuitRule();
        break;
      default:
        throw TypeError(`unknown validator "${type}"`);
        break;
    }

    return validator;
  }
}

class IdentityValidator implements Validator {
  public validate(bid: Bid, trick: Trick): boolean {
    return true;
  }
}

class FollowLeadingSuitRule implements Validator {
  public validate(bid: Bid, trick: Trick): boolean {
    let result: boolean = true;

    if (trick.trickState === TrickState.LEADING_NO_TRUMP) {
      if (bid.card.suit != trick.leadingSuit) {
        result = !bid.player.handContainsCardOfSuit(trick.leadingSuit);
      }
    }

    return result;
  }
}

class MultiValidator implements Validator {
  _validators: Validator[];

  constructor(validators: Validator[]) {
    this._validators = validators;
  }

  public validate(bid: Bid, trick: Trick): boolean {
    let result: boolean = true;
    this._validators.forEach((v) => (result = result && v.validate(bid, trick)));
    return result;
  }
}
