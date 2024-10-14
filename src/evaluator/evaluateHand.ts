import { PlayingCardType, EvaluationPlayingCardType } from "./types";
import { CheckPokerRanking } from "./checkPokerRanking";
import { GetRanks } from "./getRanks";

export function evaluateHand(handCards: PlayingCardType[]): [number, ...any[]] {
  const updateCardsToSupportEvaluation: EvaluationPlayingCardType[] =
    handCards.map((card) => {
      switch (card[1]) {
        case "T":
          return (card[0] + "A") as EvaluationPlayingCardType;
        case "J":
          return (card[0] + "B") as EvaluationPlayingCardType;
        case "Q":
          return (card[0] + "C") as EvaluationPlayingCardType;
        case "K":
          return (card[0] + "D") as EvaluationPlayingCardType;
        case "A":
          return (card[0] + "E") as EvaluationPlayingCardType;
        default:
          return `${card[0]}${card[1]}` as EvaluationPlayingCardType;
      }
    });
  const checkPokerRanking = new CheckPokerRanking(
    updateCardsToSupportEvaluation
  );
  const getRanks = new GetRanks(updateCardsToSupportEvaluation);

  if (checkPokerRanking.checkStraightFlush()) {
    return [9, getRanks.gethighestRankOfStraight()];
  }
  if (checkPokerRanking.checkFourOfAKind()) {
    return [
      8,
      getRanks.getHighestRankOfFourOfAKind(),
      ...getRanks.getKickers({
        highestRanksFromHand: [getRanks.getHighestRankOfFourOfAKind()],
        numberOfKickers: 1,
      }),
    ];
  }
  if (checkPokerRanking.checkFullHouse()) {
    return [
      7,
      getRanks.getHighestRankOfThreeOfAKind(),
      getRanks.getHighestRankOfPair(),
    ];
  }
  if (checkPokerRanking.checkFlush()) {
    return [6, ...getRanks.getHighestRanksOfFlush()];
  }
  if (checkPokerRanking.checkStraight()) {
    return [5, getRanks.gethighestRankOfStraight()];
  }
  if (checkPokerRanking.checkThreeOfAKind()) {
    return [
      4,
      getRanks.getHighestRankOfThreeOfAKind(),
      ...getRanks.getKickers({
        highestRanksFromHand: [getRanks.getHighestRankOfThreeOfAKind()],
        numberOfKickers: 2,
      }),
    ];
  }
  if (checkPokerRanking.checkTwoPair()) {
    const [highestPairRank, secondHighestPairRank] =
      getRanks.getHighestRanksOfTwoPair();
    return [
      3,
      highestPairRank,
      secondHighestPairRank,
      ...getRanks.getKickers({
        highestRanksFromHand: [highestPairRank, secondHighestPairRank],
        numberOfKickers: 4,
      }),
    ];
  }
  if (checkPokerRanking.checkPair()) {
    return [
      2,
      getRanks.getHighestRankOfPair(),
      ...getRanks.getKickers({
        highestRanksFromHand: [getRanks.getHighestRankOfPair()],
        numberOfKickers: 3,
      }),
    ];
  }
  return [1, ...getRanks.getKickers({ numberOfKickers: 5 })];
}
