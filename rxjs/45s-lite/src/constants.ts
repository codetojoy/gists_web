export class Constants {
  public static readonly NUM_CARDS_IN_SUIT: number = 13;
  public static readonly NUM_CARDS_IN_DECK: number = 52;
  public static readonly NUM_CARDS_IN_HAND: number = 5;

  public static readonly DECK_MIN_INDEX: number = 0;
  public static readonly DECK_MAX_INDEX: number = Constants.NUM_CARDS_IN_DECK - 1;
  public static readonly SUIT_MIN_INDEX: number = 0;
  public static readonly SUIT_MAX_INDEX: number = Constants.NUM_CARDS_IN_SUIT - 1;
}
