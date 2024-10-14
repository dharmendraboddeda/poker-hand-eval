import {
  CommunityCardsType,
  PlayerHandType,
  EvaluationType,
  ResultType,
  PokerHandType,
} from "./types";
import { evaluateHand } from "./evaluateHand";
import { getResult } from "./getResult";

export class PokerHandEval {
  public evaluate(
    playerHand: PlayerHandType,
    communityCards: CommunityCardsType
  ): EvaluationType {
    const pokerHand: PokerHandType = [
      ...playerHand,
      ...communityCards,
    ] as PokerHandType;
    const result: ResultType = this.getResults(pokerHand);
    return {
      result,
    };
  }

  private getResults(pokerHand: PokerHandType): ResultType {
    const [categoryValue, ...rest] = evaluateHand(pokerHand);
    const result = getResult(categoryValue, ...rest);

    return result;
  }
}
