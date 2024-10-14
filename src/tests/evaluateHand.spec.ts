import { PokerHandEval } from "../evaluator";
import {
  PlayingCardType,
  PlayerHandType,
  CommunityCardsType,
  EvaluationType,
} from "../evaluator/types";

describe("EvaluateHand", () => {
  it("should compare four players with a Full House and a Straight", () => {
    const evaluator = new PokerHandEval();

    const playerOneHand = [
      PlayingCardType.HT,
      PlayingCardType.H9,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.D8,
      PlayingCardType.H6,
    ] as PlayerHandType;
    const playerThreeHand = [
      PlayingCardType.S9,
      PlayingCardType.C9,
    ] as PlayerHandType;
    const playerFourHand = [
      PlayingCardType.DA,
      PlayingCardType.HA,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.D9,
      PlayingCardType.H9,
      PlayingCardType.CT,
      PlayingCardType.D7,
      PlayingCardType.C6,
    ];

    const playerOneResult: EvaluationType = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: EvaluationType = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    const playerThreeResult: EvaluationType = evaluator.evaluate(
      playerThreeHand,
      communityCards
    );
    const playerFourResult: EvaluationType = evaluator.evaluate(
      playerFourHand,
      communityCards
    );

    expect(playerOneResult.result.rank).toBeGreaterThan(
      playerTwoResult.result.rank
    );
    expect(playerThreeResult.result.rank).toBeGreaterThan(
      playerFourResult.result.rank
    );
  });

  it("should compare four players with a Pair, a Straight Flush, and two other hands", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.S2,
      PlayingCardType.C2,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.S6,
      PlayingCardType.S7,
    ] as PlayerHandType;
    const playerThreeHand = [
      PlayingCardType.H3,
      PlayingCardType.S2,
    ] as PlayerHandType;
    const playerFourHand = [
      PlayingCardType.H5,
      PlayingCardType.S7,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.S3,
      PlayingCardType.S4,
      PlayingCardType.S5,
      PlayingCardType.DA,
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
    const playerThreeResult: EvaluationType = evaluator.evaluate(
      playerThreeHand,
      communityCards
    );
    const playerFourResult: EvaluationType = evaluator.evaluate(
      playerFourHand,
      communityCards
    );

    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
    expect(playerThreeResult.result.rank).toBeGreaterThan(
      playerFourResult.result.rank
    );
  });

  it("should compare four players with Three of a Kind, a Straight, and two other hands", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.D8,
      PlayingCardType.H8,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.C5,
      PlayingCardType.D6,
    ] as PlayerHandType;
    const playerThreeHand = [
      PlayingCardType.S3,
      PlayingCardType.H4,
    ] as PlayerHandType;
    const playerFourHand = [
      PlayingCardType.D2,
      PlayingCardType.C3,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.S8,
      PlayingCardType.C7,
      PlayingCardType.C9,
      PlayingCardType.DA,
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
    const playerThreeResult: EvaluationType = evaluator.evaluate(
      playerThreeHand,
      communityCards
    );
    const playerFourResult: EvaluationType = evaluator.evaluate(
      playerFourHand,
      communityCards
    );

    expect(playerOneResult.result.rank).toBeGreaterThan(
      playerTwoResult.result.rank
    );
    expect(playerThreeResult.result.rank).toEqual(playerFourResult.result.rank);
  });

  it("should compare two players with a Flush and a Straight", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.S2,
      PlayingCardType.S3,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.S5,
      PlayingCardType.S6,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.S7,
      PlayingCardType.S8,
      PlayingCardType.S9,
      PlayingCardType.DA,
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

  it("should compare two players with a Full House and a Full House with different three of a kind", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.S2,
      PlayingCardType.S2,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.S3,
      PlayingCardType.S3,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.S4,
      PlayingCardType.S4,
      PlayingCardType.S4,
      PlayingCardType.S5,
      PlayingCardType.S6,
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

  it("should compare two players with identical Full Houses", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.S7,
      PlayingCardType.S8,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.S7,
      PlayingCardType.S8,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.S9,
      PlayingCardType.S9,
      PlayingCardType.S9,
      PlayingCardType.SJ,
      PlayingCardType.SQ,
    ];

    const playerOneResult: EvaluationType = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: EvaluationType = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );

    expect(playerOneResult.result.rank).toEqual(playerTwoResult.result.rank);
  });

  it("should compare two players with a Full House and a Full House with tie", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.S9,
      PlayingCardType.SJ,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.SJ,
      PlayingCardType.SA,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.SQ,
      PlayingCardType.SQ,
      PlayingCardType.SQ,
      PlayingCardType.SK,
      PlayingCardType.SJ,
    ];

    const playerOneResult: EvaluationType = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: EvaluationType = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );

    expect(playerOneResult.result.rank).toEqual(playerTwoResult.result.rank);
  });

  it("should compare two players with a Royal Flash", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.S9,
      PlayingCardType.SJ,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.DT,
      PlayingCardType.DQ,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.DA,
      PlayingCardType.DJ,
      PlayingCardType.S9,
      PlayingCardType.DK,
      PlayingCardType.CJ,
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

  it("should compare two players with a Straight Flash", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.S9,
      PlayingCardType.SJ,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.S8,
      PlayingCardType.S9,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.SA,
      PlayingCardType.S6,
      PlayingCardType.S2,
      PlayingCardType.S5,
      PlayingCardType.S7,
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

  it("should compare two players with a High Card", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.S9,
      PlayingCardType.SJ,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.SA,
      PlayingCardType.ST,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.S2,
      PlayingCardType.S6,
      PlayingCardType.S3,
      PlayingCardType.S5,
      PlayingCardType.S7,
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

  it("should compare five players with a Pair", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.S9,
      PlayingCardType.SJ,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.S2,
      PlayingCardType.ST,
    ] as PlayerHandType;
    const playerThreeHand = [
      PlayingCardType.D9,
      PlayingCardType.DJ,
    ] as PlayerHandType;
    const playerFourHand = [
      PlayingCardType.C2,
      PlayingCardType.CT,
    ] as PlayerHandType;
    const playerFiveHand = [
      PlayingCardType.H9,
      PlayingCardType.HJ,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.D2,
      PlayingCardType.C6,
      PlayingCardType.D3,
      PlayingCardType.S5,
      PlayingCardType.S7,
    ];

    const playerOneResult: EvaluationType = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: EvaluationType = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    const playerThreeResult: EvaluationType = evaluator.evaluate(
      playerThreeHand,
      communityCards
    );
    const playerFourResult: EvaluationType = evaluator.evaluate(
      playerFourHand,
      communityCards
    );
    const playerFiveResult: EvaluationType = evaluator.evaluate(
      playerFiveHand,
      communityCards
    );

    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
    expect(playerThreeResult.result.rank).toBeLessThan(
      playerFourResult.result.rank
    );
    expect(playerFiveResult.result.rank).toEqual(playerOneResult.result.rank);
  });

  it("should compare five players with a Flush", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.S9,
      PlayingCardType.SJ,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.D4,
      PlayingCardType.D5,
    ] as PlayerHandType;
    const playerThreeHand = [
      PlayingCardType.C9,
      PlayingCardType.CJ,
    ] as PlayerHandType;
    const playerFourHand = [
      PlayingCardType.H4,
      PlayingCardType.H5,
    ] as PlayerHandType;
    const playerFiveHand = [
      PlayingCardType.S4,
      PlayingCardType.S5,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.D2,
      PlayingCardType.DA,
      PlayingCardType.D3,
      PlayingCardType.C5,
      PlayingCardType.H7,
    ];

    const playerOneResult: EvaluationType = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: EvaluationType = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    const playerThreeResult: EvaluationType = evaluator.evaluate(
      playerThreeHand,
      communityCards
    );
    const playerFourResult: EvaluationType = evaluator.evaluate(
      playerFourHand,
      communityCards
    );
    const playerFiveResult: EvaluationType = evaluator.evaluate(
      playerFiveHand,
      communityCards
    );

    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
    expect(playerThreeResult.result.rank).toBeLessThan(
      playerFourResult.result.rank
    );
    expect(playerFiveResult.result.rank).toBeGreaterThan(
      playerOneResult.result.rank
    );
  });

  it("should compare five players with a FullHouse", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.S9,
      PlayingCardType.SJ,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.D5,
      PlayingCardType.ST,
    ] as PlayerHandType;
    const playerThreeHand = [
      PlayingCardType.H9,
      PlayingCardType.HJ,
    ] as PlayerHandType;
    const playerFourHand = [
      PlayingCardType.C5,
      PlayingCardType.CT,
    ] as PlayerHandType;
    const playerFiveHand = [
      PlayingCardType.D9,
      PlayingCardType.DJ,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.S2,
      PlayingCardType.S2,
      PlayingCardType.S2,
      PlayingCardType.D5,
      PlayingCardType.D7,
    ];

    const playerOneResult: EvaluationType = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: EvaluationType = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    const playerThreeResult: EvaluationType = evaluator.evaluate(
      playerThreeHand,
      communityCards
    );
    const playerFourResult: EvaluationType = evaluator.evaluate(
      playerFourHand,
      communityCards
    );
    const playerFiveResult: EvaluationType = evaluator.evaluate(
      playerFiveHand,
      communityCards
    );

    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
    expect(playerThreeResult.result.rank).toBeLessThan(
      playerFourResult.result.rank
    );
    expect(playerFiveResult.result.rank).toBeLessThan(
      playerOneResult.result.rank
    );
  });

  it("should compare five players with a Two Pair", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.C9,
      PlayingCardType.CJ,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.DA,
      PlayingCardType.HT,
    ] as PlayerHandType;
    const playerThreeHand = [
      PlayingCardType.H9,
      PlayingCardType.HJ,
    ] as PlayerHandType;
    const playerFourHand = [
      PlayingCardType.CA,
      PlayingCardType.CT,
    ] as PlayerHandType;
    const playerFiveHand = [
      PlayingCardType.S9,
      PlayingCardType.SJ,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.C2,
      PlayingCardType.S2,
      PlayingCardType.H2,
      PlayingCardType.DA,
      PlayingCardType.HT,
    ];

    const playerOneResult: EvaluationType = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: EvaluationType = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    const playerThreeResult: EvaluationType = evaluator.evaluate(
      playerThreeHand,
      communityCards
    );
    const playerFourResult: EvaluationType = evaluator.evaluate(
      playerFourHand,
      communityCards
    );
    const playerFiveResult: EvaluationType = evaluator.evaluate(
      playerFiveHand,
      communityCards
    );

    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
    expect(playerThreeResult.result.rank).toBeLessThan(
      playerFourResult.result.rank
    );
    expect(playerFiveResult.result.rank).toEqual(playerOneResult.result.rank);
  });

  it("should compare five players with a Straight", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.C9,
      PlayingCardType.CJ,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.D3,
      PlayingCardType.H2,
    ] as PlayerHandType;
    const playerThreeHand = [
      PlayingCardType.H9,
      PlayingCardType.HJ,
    ] as PlayerHandType;
    const playerFourHand = [
      PlayingCardType.C3,
      PlayingCardType.C2,
    ] as PlayerHandType;
    const playerFiveHand = [
      PlayingCardType.S9,
      PlayingCardType.SJ,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.C2,
      PlayingCardType.S6,
      PlayingCardType.H5,
      PlayingCardType.DA,
      PlayingCardType.H4,
    ];

    const playerOneResult: EvaluationType = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: EvaluationType = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    const playerThreeResult: EvaluationType = evaluator.evaluate(
      playerThreeHand,
      communityCards
    );
    const playerFourResult: EvaluationType = evaluator.evaluate(
      playerFourHand,
      communityCards
    );
    const playerFiveResult: EvaluationType = evaluator.evaluate(
      playerFiveHand,
      communityCards
    );

    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
    expect(playerThreeResult.result.rank).toBeLessThan(
      playerFourResult.result.rank
    );
    expect(playerFiveResult.result.rank).toEqual(playerOneResult.result.rank);
  });

  it("should compare four players with a Straight Flush with tie ", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.C9,
      PlayingCardType.CJ,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.C9,
      PlayingCardType.CJ,
    ] as PlayerHandType;
    const playerThreeHand = [
      PlayingCardType.H9,
      PlayingCardType.HJ,
    ] as PlayerHandType;
    const playerFourHand = [
      PlayingCardType.D9,
      PlayingCardType.DJ,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.CT,
      PlayingCardType.C8,
      PlayingCardType.C7,
      PlayingCardType.D9,
      PlayingCardType.C4,
    ];

    const playerOneResult: EvaluationType = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: EvaluationType = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    const playerThreeResult: EvaluationType = evaluator.evaluate(
      playerThreeHand,
      communityCards
    );
    const playerFourResult: EvaluationType = evaluator.evaluate(
      playerFourHand,
      communityCards
    );

    expect(playerOneResult.result.rank).toEqual(playerTwoResult.result.rank);
    expect(playerThreeResult.result.rank).toEqual(playerFourResult.result.rank);
  });

  it("should compare five players with a Straight Flush with low Flush ", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.H9,
      PlayingCardType.DT,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.CA,
      PlayingCardType.C4,
    ] as PlayerHandType;
    const playerThreeHand = [
      PlayingCardType.S9,
      PlayingCardType.DT,
    ] as PlayerHandType;
    const playerFourHand = [
      PlayingCardType.DA,
      PlayingCardType.D4,
    ] as PlayerHandType;
    const playerFiveHand = [
      PlayingCardType.SA,
      PlayingCardType.S4,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.CT,
      PlayingCardType.C5,
      PlayingCardType.C2,
      PlayingCardType.D9,
      PlayingCardType.C3,
    ];

    const playerOneResult: EvaluationType = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: EvaluationType = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    const playerThreeResult: EvaluationType = evaluator.evaluate(
      playerThreeHand,
      communityCards
    );
    const playerFourResult: EvaluationType = evaluator.evaluate(
      playerFourHand,
      communityCards
    );
    const playerFiveResult: EvaluationType = evaluator.evaluate(
      playerFiveHand,
      communityCards
    );

    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
    expect(playerThreeResult.result.rank).toBeLessThan(
      playerFourResult.result.rank
    );
    expect(playerFiveResult.result.rank).toBeGreaterThan(
      playerOneResult.result.rank
    );
  });

  it("should compare five players with a Straight  Flush ", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.H9,
      PlayingCardType.DT,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.CA,
      PlayingCardType.C4,
    ] as PlayerHandType;
    const playerThreeHand = [
      PlayingCardType.S9,
      PlayingCardType.DT,
    ] as PlayerHandType;
    const playerFourHand = [
      PlayingCardType.DA,
      PlayingCardType.D4,
    ] as PlayerHandType;
    const playerFiveHand = [
      PlayingCardType.SA,
      PlayingCardType.S4,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.CT,
      PlayingCardType.C5,
      PlayingCardType.C2,
      PlayingCardType.D9,
      PlayingCardType.C3,
    ];

    const playerOneResult: EvaluationType = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: EvaluationType = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    const playerThreeResult: EvaluationType = evaluator.evaluate(
      playerThreeHand,
      communityCards
    );
    const playerFourResult: EvaluationType = evaluator.evaluate(
      playerFourHand,
      communityCards
    );
    const playerFiveResult: EvaluationType = evaluator.evaluate(
      playerFiveHand,
      communityCards
    ); // Added evaluation for fifth player

    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
    expect(playerThreeResult.result.rank).toBeLessThan(
      playerFourResult.result.rank
    );
    expect(playerFiveResult.result.rank).toBeGreaterThan(
      playerOneResult.result.rank
    ); // Added comparison for fifth player
  });
  it("should compare four players with a Royal Flush with tie ", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.HQ,
      PlayingCardType.DT,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.CQ,
      PlayingCardType.CT,
    ] as PlayerHandType;
    const playerThreeHand = [
      PlayingCardType.SQ,
      PlayingCardType.ST,
    ] as PlayerHandType;
    const playerFourHand = [
      PlayingCardType.DQ,
      PlayingCardType.DT,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.CA,
      PlayingCardType.CJ,
      PlayingCardType.CK,
      PlayingCardType.D9,
      PlayingCardType.H3,
    ];

    const playerOneResult: EvaluationType = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: EvaluationType = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    const playerThreeResult: EvaluationType = evaluator.evaluate(
      playerThreeHand,
      communityCards
    );
    const playerFourResult: EvaluationType = evaluator.evaluate(
      playerFourHand,
      communityCards
    );

    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
    expect(playerThreeResult.result.rank).toEqual(playerFourResult.result.rank);
  });

  it("should compare four players low Full House ", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.H2,
      PlayingCardType.D2,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.H7,
      PlayingCardType.S4,
    ] as PlayerHandType;
    const playerThreeHand = [
      PlayingCardType.S2,
      PlayingCardType.D2,
    ] as PlayerHandType;
    const playerFourHand = [
      PlayingCardType.H7,
      PlayingCardType.D4,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.CA,
      PlayingCardType.C5,
      PlayingCardType.C2,
      PlayingCardType.DA,
      PlayingCardType.CA,
    ];

    const playerOneResult: EvaluationType = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: EvaluationType = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    const playerThreeResult: EvaluationType = evaluator.evaluate(
      playerThreeHand,
      communityCards
    );
    const playerFourResult: EvaluationType = evaluator.evaluate(
      playerFourHand,
      communityCards
    );

    expect(playerOneResult.result.rank).toBeGreaterThan(
      playerTwoResult.result.rank
    );
    expect(playerThreeResult.result.rank).toBeGreaterThan(
      playerFourResult.result.rank
    );
  });
  it("should compare four players high Full House  ", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.H9,
      PlayingCardType.DT,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.SA,
      PlayingCardType.DA,
    ] as PlayerHandType;
    const playerThreeHand = [
      PlayingCardType.C9,
      PlayingCardType.CT,
    ] as PlayerHandType;
    const playerFourHand = [
      PlayingCardType.DA,
      PlayingCardType.HA,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.SK,
      PlayingCardType.HK,
      PlayingCardType.H2,
      PlayingCardType.D9,
      PlayingCardType.DK,
    ];

    const playerOneResult: EvaluationType = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: EvaluationType = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    const playerThreeResult: EvaluationType = evaluator.evaluate(
      playerThreeHand,
      communityCards
    );
    const playerFourResult: EvaluationType = evaluator.evaluate(
      playerFourHand,
      communityCards
    );

    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
    expect(playerThreeResult.result.rank).toBeLessThan(
      playerFourResult.result.rank
    );
  });

  it("should compare four players with a Four Of A Kind with tie ", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.H9,
      PlayingCardType.D9,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.S9,
      PlayingCardType.H9,
    ] as PlayerHandType;
    const playerThreeHand = [
      PlayingCardType.D9,
      PlayingCardType.C9,
    ] as PlayerHandType;
    const playerFourHand = [
      PlayingCardType.C9,
      PlayingCardType.H9,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.DT,
      PlayingCardType.C5,
      PlayingCardType.C2,
      PlayingCardType.S9,
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
    const playerThreeResult: EvaluationType = evaluator.evaluate(
      playerThreeHand,
      communityCards
    );
    const playerFourResult: EvaluationType = evaluator.evaluate(
      playerFourHand,
      communityCards
    );

    expect(playerOneResult.result.rank).toEqual(playerTwoResult.result.rank);
    expect(playerThreeResult.result.rank).toEqual(playerFourResult.result.rank);
  });

  it("should compare four players with Four Of A Kind with low priority ", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.H2,
      PlayingCardType.D2,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.CA,
      PlayingCardType.C4,
    ] as PlayerHandType;
    const playerThreeHand = [
      PlayingCardType.D2,
      PlayingCardType.H2,
    ] as PlayerHandType;
    const playerFourHand = [
      PlayingCardType.C4,
      PlayingCardType.CA,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.H2,
      PlayingCardType.C5,
      PlayingCardType.C2,
      PlayingCardType.D9,
      PlayingCardType.S3,
    ];

    const playerOneResult: EvaluationType = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: EvaluationType = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    const playerThreeResult: EvaluationType = evaluator.evaluate(
      playerThreeHand,
      communityCards
    );
    const playerFourResult: EvaluationType = evaluator.evaluate(
      playerFourHand,
      communityCards
    );

    expect(playerOneResult.result.rank).toBeGreaterThan(
      playerTwoResult.result.rank
    );
    expect(playerThreeResult.result.rank).toBeGreaterThan(
      playerFourResult.result.rank
    );
  });

  it("should compare four players with a Four Of Kind With High Priority", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.SA,
      PlayingCardType.DA,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.CA,
      PlayingCardType.C4,
    ] as PlayerHandType;
    const playerThreeHand = [
      PlayingCardType.DA,
      PlayingCardType.SA,
    ] as PlayerHandType;
    const playerFourHand = [
      PlayingCardType.C4,
      PlayingCardType.CA,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.CA,
      PlayingCardType.D5,
      PlayingCardType.HA,
      PlayingCardType.D9,
      PlayingCardType.C3,
    ];

    const playerOneResult: EvaluationType = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: EvaluationType = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    const playerThreeResult: EvaluationType = evaluator.evaluate(
      playerThreeHand,
      communityCards
    );
    const playerFourResult: EvaluationType = evaluator.evaluate(
      playerFourHand,
      communityCards
    );

    expect(playerOneResult.result.rank).toBeGreaterThan(
      playerTwoResult.result.rank
    );
    expect(playerThreeResult.result.rank).toBeGreaterThan(
      playerFourResult.result.rank
    );
  });

  it("should compare five players with a High Card low priority", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.S2,
      PlayingCardType.H3,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.S7,
      PlayingCardType.H5,
    ] as PlayerHandType;
    const playerThreeHand = [
      PlayingCardType.H3,
      PlayingCardType.S2,
    ] as PlayerHandType;
    const playerFourHand = [
      PlayingCardType.H5,
      PlayingCardType.S7,
    ] as PlayerHandType;
    const playerFiveHand = [
      PlayingCardType.D2,
      PlayingCardType.C6,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.D2,
      PlayingCardType.S6,
      PlayingCardType.H3,
      PlayingCardType.D9,
      PlayingCardType.C6,
    ];
    const playerOneResult: EvaluationType = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: EvaluationType = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    const playerThreeResult: EvaluationType = evaluator.evaluate(
      playerThreeHand,
      communityCards
    );
    const playerFourResult: EvaluationType = evaluator.evaluate(
      playerFourHand,
      communityCards
    );
    const playerFiveResult: EvaluationType = evaluator.evaluate(
      playerFiveHand,
      communityCards
    );

    expect(playerOneResult.result.rank).toBeGreaterThan(
      playerTwoResult.result.rank
    );
    expect(playerThreeResult.result.rank).toBeGreaterThan(
      playerFourResult.result.rank
    );
    expect(playerFiveResult.result.rank).toBeGreaterThan(
      playerFourResult.result.rank
    );
  });
  it("should compare five players with a High Card with high priority", () => {
    const evaluator = new PokerHandEval();
    const playerOneHand = [
      PlayingCardType.H9,
      PlayingCardType.DJ,
    ] as PlayerHandType;
    const playerTwoHand = [
      PlayingCardType.HA,
      PlayingCardType.S9,
    ] as PlayerHandType;
    const playerThreeHand = [
      PlayingCardType.DJ,
      PlayingCardType.H9,
    ] as PlayerHandType;
    const playerFourHand = [
      PlayingCardType.S9,
      PlayingCardType.HA,
    ] as PlayerHandType;
    const playerFiveHand = [
      PlayingCardType.C9,
      PlayingCardType.D9,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.S2,
      PlayingCardType.D6,
      PlayingCardType.C3,
      PlayingCardType.H5,
      PlayingCardType.C7,
    ];
    const playerOneResult: EvaluationType = evaluator.evaluate(
      playerOneHand,
      communityCards
    );
    const playerTwoResult: EvaluationType = evaluator.evaluate(
      playerTwoHand,
      communityCards
    );
    const playerThreeResult: EvaluationType = evaluator.evaluate(
      playerThreeHand,
      communityCards
    );
    const playerFourResult: EvaluationType = evaluator.evaluate(
      playerFourHand,
      communityCards
    );
    const playerFiveResult: EvaluationType = evaluator.evaluate(
      playerFiveHand,
      communityCards
    );

    expect(playerOneResult.result.rank).toBeLessThan(
      playerTwoResult.result.rank
    );
    expect(playerThreeResult.result.rank).toBeLessThan(
      playerFourResult.result.rank
    );
    expect(playerFiveResult.result.rank).toBeGreaterThan(
      playerFourResult.result.rank
    );
  });
});
