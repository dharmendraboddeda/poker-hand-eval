import {
  CommunityCards,
  PlayerHand,
  Evaluation,
  Result,
  PokerHand,
} from "./evaluator/types";
import { evaluateHand } from "./evaluator/evaluateHand";
import { getResult } from "./evaluator/getResult";

export class PokerHandEval {
  public evaluate(
    playerHand: PlayerHand,
    communityCards: CommunityCards
  ): Evaluation {
    const pokerHand: PokerHand = [
      ...playerHand,
      ...communityCards,
    ] as PokerHand;
    const result: Result = this.getResults(pokerHand);
    return {
      result,
    };
  }

  private getResults(pokerHand: PokerHand): Result {
    const [categoryValue, ...rest] = evaluateHand(pokerHand);
    const result = getResult(categoryValue, ...rest);

    return result;
  }
}
