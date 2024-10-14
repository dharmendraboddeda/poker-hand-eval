import { PokerHandEval } from "../evaluator";
import {
  PlayingCardType,
  CommunityCardsType,
  PlayerHandType,
  EvaluationType,
} from "../evaluator/types";

describe("Check Highest poker hand rank", () => {
  it("should win straightFlush with highest card", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.DA,
      PlayingCardType.D2,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.D6,
      PlayingCardType.D7,
    ] as PlayerHandType;
    const communityCards: CommunityCardsType = [
      PlayingCardType.D3,
      PlayingCardType.D4,
      PlayingCardType.D5,
      PlayingCardType.CK,
      PlayingCardType.HQ,
    ];
    const playerOneResult: EvaluationType = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: EvaluationType = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
  });
  it("should win highest flush", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.D2,
      PlayingCardType.D5,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.D7,
      PlayingCardType.D9,
    ] as PlayerHandType;
    const communityCards: CommunityCardsType = [
      PlayingCardType.D5,
      PlayingCardType.D4,
      PlayingCardType.D5,
      PlayingCardType.CK,
      PlayingCardType.HQ,
    ];
    const playerOneResult: EvaluationType = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: EvaluationType = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
  });

  it("should win highest card", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.D4,
      PlayingCardType.S9,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.D7,
      PlayingCardType.S9,
    ] as PlayerHandType;
    const communityCards: CommunityCardsType = [
      PlayingCardType.C2,
      PlayingCardType.D3,
      PlayingCardType.H5,
      PlayingCardType.CK,
      PlayingCardType.HQ,
    ];
    const playerOneResult: EvaluationType = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: EvaluationType = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
  });
  it("should win highest pair", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.D4,
      PlayingCardType.S9,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.D7,
      PlayingCardType.S9,
    ] as PlayerHandType;
    const communityCards: CommunityCardsType = [
      PlayingCardType.C2,
      PlayingCardType.D7,
      PlayingCardType.H4,
      PlayingCardType.CK,
      PlayingCardType.HQ,
    ];
    const playerOneResult: EvaluationType = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: EvaluationType = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
  });

  it("should win highest two pair", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.DT,
      PlayingCardType.SA,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.DJ,
      PlayingCardType.SA,
    ] as PlayerHandType;
    const communityCards: CommunityCardsType = [
      PlayingCardType.CA,
      PlayingCardType.D7,
      PlayingCardType.HT,
      PlayingCardType.C9,
      PlayingCardType.HJ,
    ];
    const playerOneResult: EvaluationType = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: EvaluationType = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
  });

  it("should win highest threeOfAKind", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.DT,
      PlayingCardType.ST,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.DA,
      PlayingCardType.SA,
    ] as PlayerHandType;
    const communityCards: CommunityCardsType = [
      PlayingCardType.CA,
      PlayingCardType.D7,
      PlayingCardType.H8,
      PlayingCardType.CT,
      PlayingCardType.HJ,
    ];
    const playerOneResult: EvaluationType = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: EvaluationType = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
  });

  it("should win highest fourOfAKind", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.DT,
      PlayingCardType.ST,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.DA,
      PlayingCardType.SA,
    ] as PlayerHandType;
    const communityCards: CommunityCardsType = [
      PlayingCardType.CA,
      PlayingCardType.D7,
      PlayingCardType.HT,
      PlayingCardType.CT,
      PlayingCardType.HA,
    ];
    const playerOneResult: EvaluationType = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: EvaluationType = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
  });

  it("should win highest one Pair", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.D2,
      PlayingCardType.S2,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.DA,
      PlayingCardType.SA,
    ] as PlayerHandType;
    const communityCards: CommunityCardsType = [
      PlayingCardType.CK,
      PlayingCardType.D7,
      PlayingCardType.HT,
      PlayingCardType.CQ,
      PlayingCardType.H9,
    ];
    const playerOneResult: EvaluationType = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: EvaluationType = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
  });
});
