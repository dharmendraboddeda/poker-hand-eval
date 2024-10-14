import { PokerHandEval } from "../evaluator.service";
import {
  PlayingCard,
  CommunityCards,
  PlayerHand,
  Evaluation,
} from "../evaluator/types";

describe("Check Highest poker hand rank", () => {
  it("should win straightFlush with highest card", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [PlayingCard.DA, PlayingCard.D2] as PlayerHand;
    const playerTwoHand = [PlayingCard.D6, PlayingCard.D7] as PlayerHand;
    const communityCards: CommunityCards = [
      PlayingCard.D3,
      PlayingCard.D4,
      PlayingCard.D5,
      PlayingCard.CK,
      PlayingCard.HQ,
    ];
    const playerOneResult: Evaluation = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: Evaluation = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
  });
  it("should win highest flush", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [PlayingCard.D2, PlayingCard.D5] as PlayerHand;
    const playerTwoHand = [PlayingCard.D7, PlayingCard.D9] as PlayerHand;
    const communityCards: CommunityCards = [
      PlayingCard.D5,
      PlayingCard.D4,
      PlayingCard.D5,
      PlayingCard.CK,
      PlayingCard.HQ,
    ];
    const playerOneResult: Evaluation = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: Evaluation = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
  });

  it("should win highest card", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [PlayingCard.D4, PlayingCard.S9] as PlayerHand;
    const playerTwoHand = [PlayingCard.D7, PlayingCard.S9] as PlayerHand;
    const communityCards: CommunityCards = [
      PlayingCard.C2,
      PlayingCard.D3,
      PlayingCard.H5,
      PlayingCard.CK,
      PlayingCard.HQ,
    ];
    const playerOneResult: Evaluation = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: Evaluation = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
  });
  it("should win highest pair", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [PlayingCard.D4, PlayingCard.S9] as PlayerHand;
    const playerTwoHand = [PlayingCard.D7, PlayingCard.S9] as PlayerHand;
    const communityCards: CommunityCards = [
      PlayingCard.C2,
      PlayingCard.D7,
      PlayingCard.H4,
      PlayingCard.CK,
      PlayingCard.HQ,
    ];
    const playerOneResult: Evaluation = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: Evaluation = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
  });

  it("should win highest two pair", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [PlayingCard.DT, PlayingCard.SA] as PlayerHand;
    const playerTwoHand = [PlayingCard.DJ, PlayingCard.SA] as PlayerHand;
    const communityCards: CommunityCards = [
      PlayingCard.CA,
      PlayingCard.D7,
      PlayingCard.HT,
      PlayingCard.C9,
      PlayingCard.HJ,
    ];
    const playerOneResult: Evaluation = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: Evaluation = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
  });

  it("should win highest threeOfAKind", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [PlayingCard.DT, PlayingCard.ST] as PlayerHand;
    const playerTwoHand = [PlayingCard.DA, PlayingCard.SA] as PlayerHand;
    const communityCards: CommunityCards = [
      PlayingCard.CA,
      PlayingCard.D7,
      PlayingCard.H8,
      PlayingCard.CT,
      PlayingCard.HJ,
    ];
    const playerOneResult: Evaluation = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: Evaluation = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
  });

  it("should win highest fourOfAKind", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [PlayingCard.DT, PlayingCard.ST] as PlayerHand;
    const playerTwoHand = [PlayingCard.DA, PlayingCard.SA] as PlayerHand;
    const communityCards: CommunityCards = [
      PlayingCard.CA,
      PlayingCard.D7,
      PlayingCard.HT,
      PlayingCard.CT,
      PlayingCard.HA,
    ];
    const playerOneResult: Evaluation = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: Evaluation = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
  });

  it("should win highest one Pair", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [PlayingCard.D2, PlayingCard.S2] as PlayerHand;
    const playerTwoHand = [PlayingCard.DA, PlayingCard.SA] as PlayerHand;
    const communityCards: CommunityCards = [
      PlayingCard.CK,
      PlayingCard.D7,
      PlayingCard.HT,
      PlayingCard.CQ,
      PlayingCard.H9,
    ];
    const playerOneResult: Evaluation = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: Evaluation = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
  });
});
