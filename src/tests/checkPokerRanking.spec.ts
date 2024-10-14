import { PokerHandEval } from "../evaluator.service";
import {
  PlayingCard,
  PlayerHand,
  CommunityCards,
  Evaluation,
} from "../evaluator/types";

describe("Check pokerRanking functions", () => {
  it("should be StraightFlush with straight", () => {
    const evaluator = new PokerHandEval();
    const PlayerHand = [PlayingCard.S5, PlayingCard.S6] as PlayerHand;
    const communityCards: CommunityCards = [
      PlayingCard.S4,
      PlayingCard.S3,
      PlayingCard.S2,
      PlayingCard.D3,
      PlayingCard.SA,
    ];
    const getResult: Evaluation = evaluator.evaluate(
      PlayerHand,
      communityCards
    );
    expect(getResult.result.category).toEqual("StraightFlush");
  });
  it("Should be straightFlush with lowAceStraight ", () => {
    const evaluator = new PokerHandEval();
    const PlayerHand = [PlayingCard.S5, PlayingCard.S7] as PlayerHand;
    const communityCards: CommunityCards = [
      PlayingCard.S4,
      PlayingCard.S3,
      PlayingCard.S2,
      PlayingCard.D3,
      PlayingCard.SA,
    ];
    const getResult: Evaluation = evaluator.evaluate(
      PlayerHand,
      communityCards
    );
    expect(getResult.result.category).toEqual("StraightFlush");
  });
  it("chances for Straight and Flush but not straightFlush this should be flush", () => {
    const evaluator = new PokerHandEval();
    const PlayerHand = [PlayingCard.S5, PlayingCard.C6] as PlayerHand;
    const communityCards: CommunityCards = [
      PlayingCard.S4,
      PlayingCard.S9,
      PlayingCard.S2,
      PlayingCard.D3,
      PlayingCard.SA,
    ];
    const getResult: Evaluation = evaluator.evaluate(
      PlayerHand,
      communityCards
    );
    expect(getResult.result.category).toEqual("Flush");
  });

  it("should be StraightFlush with straight", () => {
    const evaluator = new PokerHandEval();
    const PlayerHand = [PlayingCard.SJ, PlayingCard.SK] as PlayerHand;
    const communityCards: CommunityCards = [
      PlayingCard.D7,
      PlayingCard.HT,
      PlayingCard.S9,
      PlayingCard.DQ,
      PlayingCard.SA,
    ];
    const getResult: Evaluation = evaluator.evaluate(
      PlayerHand,
      communityCards
    );
    expect(getResult.result.category).toEqual("Straight");
  });

  it("should be FullHouse case 1 ", () => {
    const evaluator = new PokerHandEval();
    const PlayerHand = [PlayingCard.S7, PlayingCard.S7] as PlayerHand;
    const communityCards: CommunityCards = [
      PlayingCard.D7,
      PlayingCard.HT,
      PlayingCard.ST,
      PlayingCard.DT,
      PlayingCard.SA,
    ];
    const getResult: Evaluation = evaluator.evaluate(
      PlayerHand,
      communityCards
    );
    expect(getResult.result.category).toEqual("FullHouse");
  });

  it("check FourOfAKind", () => {
    const evaluator = new PokerHandEval();
    const PlayerHand = [PlayingCard.CA, PlayingCard.DK] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.DJ,
      PlayingCard.HK,
      PlayingCard.CK,
      PlayingCard.DK,
      PlayingCard.SA,
    ];

    const getResult: Evaluation = evaluator.evaluate(
      PlayerHand,
      communityCards
    );

    expect(getResult.result.category).toEqual("FourOfAKind");
  });
});

it("check FourOfAKind", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.CT, PlayingCard.HT] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.DK,
    PlayingCard.DT,
    PlayingCard.CJ,
    PlayingCard.D9,
    PlayingCard.ST,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("FourOfAKind");
});

it("check FourOfAKind", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.H3, PlayingCard.D3] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.DK,
    PlayingCard.DK,
    PlayingCard.C3,
    PlayingCard.DK,
    PlayingCard.S3,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("FourOfAKind");
});

it("check FourOfAKind", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.C2, PlayingCard.S3] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.DK,
    PlayingCard.D2,
    PlayingCard.H2,
    PlayingCard.D4,
    PlayingCard.S2,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("FourOfAKind");
});

it("check FourOfAKind", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.C9, PlayingCard.S9] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.DK,
    PlayingCard.S9,
    PlayingCard.CJ,
    PlayingCard.D9,
    PlayingCard.SA,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("FourOfAKind");
});

it("check FullHouse", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.SA, PlayingCard.DK] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.SK,
    PlayingCard.CK,
    PlayingCard.CJ,
    PlayingCard.C8,
    PlayingCard.SA,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("FullHouse");
});

it("check FullHouse", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.D8, PlayingCard.S2] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.D2,
    PlayingCard.C2,
    PlayingCard.CJ,
    PlayingCard.C8,
    PlayingCard.SA,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("FullHouse");
});

it("check FullHouse", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.CT, PlayingCard.S2] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.D2,
    PlayingCard.C9,
    PlayingCard.CT,
    PlayingCard.D8,
    PlayingCard.ST,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("FullHouse");
});

it("check FullHouse", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.CK, PlayingCard.S2] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.D2,
    PlayingCard.CK,
    PlayingCard.CT,
    PlayingCard.DK,
    PlayingCard.ST,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("FullHouse");
});

it("check Flush", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.C4, PlayingCard.C8] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.C6,
    PlayingCard.D9,
    PlayingCard.C3,
    PlayingCard.SK,
    PlayingCard.C2,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("Flush");
});

it("check Flush", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.D4, PlayingCard.D8] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.D6,
    PlayingCard.D9,
    PlayingCard.C3,
    PlayingCard.SK,
    PlayingCard.D2,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("Flush");
});

it("check Low StraightFlush", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.DA, PlayingCard.D2] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.D3,
    PlayingCard.D4,
    PlayingCard.C3,
    PlayingCard.SK,
    PlayingCard.D5,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("StraightFlush");
});

it("check Flush", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.S9, PlayingCard.S9] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.S8,
    PlayingCard.S9,
    PlayingCard.C3,
    PlayingCard.SK,
    PlayingCard.D2,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("Flush");
});

it("check Three of A kind Flush", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.S9, PlayingCard.S9] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.S8,
    PlayingCard.S9,
    PlayingCard.C3,
    PlayingCard.SK,
    PlayingCard.D2,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("Flush");
});

it("check Four of A kind Flush", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.S9, PlayingCard.S9] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.S9,
    PlayingCard.S9,
    PlayingCard.C3,
    PlayingCard.SK,
    PlayingCard.D2,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("FourOfAKind");
});

it("check FullHouse Flush", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.S9, PlayingCard.S8] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.S8,
    PlayingCard.S9,
    PlayingCard.C3,
    PlayingCard.H9,
    PlayingCard.D2,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("FullHouse");
});

it("check Flush", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.H4, PlayingCard.H6] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.C9,
    PlayingCard.S8,
    PlayingCard.H9,
    PlayingCard.HK,
    PlayingCard.H2,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("Flush");
});

it("check Straight", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.D2, PlayingCard.C4] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.D6,
    PlayingCard.S9,
    PlayingCard.D5,
    PlayingCard.S2,
    PlayingCard.C3,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("Straight");
});

it("check FullHouse with Straight", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.DA, PlayingCard.C4] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.DA,
    PlayingCard.SA,
    PlayingCard.D3,
    PlayingCard.S2,
    PlayingCard.C4,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("FullHouse");
});

it("check  FullHouse with high priority", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.SA, PlayingCard.DK] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.SA,
    PlayingCard.SA,
    PlayingCard.DK,
    PlayingCard.H2,
    PlayingCard.C3,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);
  expect(getResult.result.category).toEqual("FullHouse");
});

it("check FullHouse with low priority", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.C3, PlayingCard.C2] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.D3,
    PlayingCard.H3,
    PlayingCard.S2,
    PlayingCard.H5,
    PlayingCard.C9,
  ];
  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);
  expect(getResult.result.category).toEqual("FullHouse");
});

it("check Low Straight", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.D2, PlayingCard.C4] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.D6,
    PlayingCard.S9,
    PlayingCard.D5,
    PlayingCard.S3,
    PlayingCard.CA,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("Straight");
});

it("check high Straight", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.DK, PlayingCard.CA] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.DJ,
    PlayingCard.S9,
    PlayingCard.D5,
    PlayingCard.SQ,
    PlayingCard.CT,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("Straight");
});

it("check Straight", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.ST, PlayingCard.C7] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.D9,
    PlayingCard.S8,
    PlayingCard.D5,
    PlayingCard.S2,
    PlayingCard.C6,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("Straight");
});

it("check Straight", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.D2, PlayingCard.D6] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.D9,
    PlayingCard.S4,
    PlayingCard.D5,
    PlayingCard.S3,
    PlayingCard.C6,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("Straight");
});

it("check Straight", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.C5, PlayingCard.D6] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.S4,
    PlayingCard.C7,
    PlayingCard.D5,
    PlayingCard.S8,
    PlayingCard.C6,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("Straight");
});

it("check Straight", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.SA, PlayingCard.D2] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.D3,
    PlayingCard.S4,
    PlayingCard.D5,
    PlayingCard.S3,
    PlayingCard.C6,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("Straight");
});

it("check ThreeOfAKind", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.D2, PlayingCard.C4] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.D6,
    PlayingCard.S4,
    PlayingCard.D4,
    PlayingCard.S7,
    PlayingCard.C3,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("ThreeOfAKind");
});

// it('check the RoyalFlush', () => {
//   const evaluator = new PokerHandEval();
//   const PlayerHand = [PlayingCard.SA, PlayingCard.SK] as PlayerHand;

//   const communityCards: CommunityCards = [
//     PlayingCard.SQ,
//     PlayingCard.SJ,
//     PlayingCard.ST,
//     PlayingCard.C2,
//     PlayingCard.H3,
//   ];
//   const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);
//   expect(getResult.result.category).toEqual('RoyalFlush');
// });

it("check ThreeOfAKind", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.D3, PlayingCard.C8] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.S3,
    PlayingCard.S4,
    PlayingCard.D9,
    PlayingCard.S7,
    PlayingCard.C3,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("ThreeOfAKind");
});

it("check ThreeOfAKind", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.D8, PlayingCard.C8] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.S3,
    PlayingCard.S4,
    PlayingCard.D9,
    PlayingCard.S8,
    PlayingCard.C2,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("ThreeOfAKind");
});

it("check ThreeOfAKind", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.D2, PlayingCard.C8] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.S3,
    PlayingCard.S4,
    PlayingCard.D9,
    PlayingCard.S2,
    PlayingCard.C2,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("ThreeOfAKind");
});

it("check ThreeOfAKind", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.D2, PlayingCard.C8] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.S3,
    PlayingCard.S4,
    PlayingCard.D9,
    PlayingCard.D2,
    PlayingCard.C2,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("ThreeOfAKind");
});

it("check TwoPair", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.S2, PlayingCard.C4] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.C2,
    PlayingCard.S9,
    PlayingCard.D4,
    PlayingCard.S7,
    PlayingCard.C3,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("TwoPair");
});

it("check TwoPair", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.CT, PlayingCard.C5] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.CT,
    PlayingCard.S2,
    PlayingCard.D4,
    PlayingCard.S7,
    PlayingCard.D5,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("TwoPair");
});

it("check TwoPair", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.DJ, PlayingCard.S9] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.CA,
    PlayingCard.S9,
    PlayingCard.DJ,
    PlayingCard.S7,
    PlayingCard.C3,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("TwoPair");
});

it("check TwoPair", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.ST, PlayingCard.C4] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.C2,
    PlayingCard.ST,
    PlayingCard.D4,
    PlayingCard.S7,
    PlayingCard.D3,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("TwoPair");
});

it("check TwoPair", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.SK, PlayingCard.CT] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.C2,
    PlayingCard.SK,
    PlayingCard.D4,
    PlayingCard.S7,
    PlayingCard.DT,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("TwoPair");
});

it("check OnePair", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.DA, PlayingCard.C4] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.C2,
    PlayingCard.S9,
    PlayingCard.DA,
    PlayingCard.S7,
    PlayingCard.C3,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("OnePair");
});

it("check OnePair", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.SA, PlayingCard.C4] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.C2,
    PlayingCard.S9,
    PlayingCard.SA,
    PlayingCard.D7,
    PlayingCard.C3,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("OnePair");
});

it("check OnePair", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.CT, PlayingCard.C4] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.CT,
    PlayingCard.S9,
    PlayingCard.SA,
    PlayingCard.D7,
    PlayingCard.C2,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("OnePair");
});

it("check OnePair", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.HA, PlayingCard.D4] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.C6,
    PlayingCard.ST,
    PlayingCard.SA,
    PlayingCard.D7,
    PlayingCard.C3,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("OnePair");
});

it("check OnePair with low Straight", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.HA, PlayingCard.D4] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.S4,
    PlayingCard.ST,
    PlayingCard.S5,
    PlayingCard.D2,
    PlayingCard.C3,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("Straight");
});

it("check OnePair High Straight", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.CA, PlayingCard.DK] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.CQ,
    PlayingCard.ST,
    PlayingCard.SJ,
    PlayingCard.D7,
    PlayingCard.CK,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("Straight");
});

it("check OnePair Straight", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.CT, PlayingCard.D9] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.C8,
    PlayingCard.ST,
    PlayingCard.S7,
    PlayingCard.D6,
    PlayingCard.C3,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("Straight");
});

it("check ThreeOfAKind high Priority", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.CA, PlayingCard.CK] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.SA,
    PlayingCard.HA,
    PlayingCard.DQ,
    PlayingCard.CT,
    PlayingCard.D5,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);
  expect(getResult.result.category).toEqual("ThreeOfAKind");
});
it("check HighCard", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.DA, PlayingCard.C4] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.C2,
    PlayingCard.S9,
    PlayingCard.DK,
    PlayingCard.S7,
    PlayingCard.C3,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("HighCard");
});

it("check HighCard", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.HA, PlayingCard.C4] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.C2,
    PlayingCard.S9,
    PlayingCard.DK,
    PlayingCard.S7,
    PlayingCard.D3,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("HighCard");
});

it("check HighCard", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.D9, PlayingCard.C8] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.C2,
    PlayingCard.S4,
    PlayingCard.DT,
    PlayingCard.S7,
    PlayingCard.C3,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("HighCard");
});

it("check HighCard", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.ST, PlayingCard.C2] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.C6,
    PlayingCard.SQ,
    PlayingCard.DK,
    PlayingCard.S7,
    PlayingCard.C3,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("HighCard");
});

it("check HighCard", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.SQ, PlayingCard.C9] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.C6,
    PlayingCard.S2,
    PlayingCard.DT,
    PlayingCard.S7,
    PlayingCard.C3,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("HighCard");
});

it("check HighCard", () => {
  const evaluator = new PokerHandEval();
  const PlayerHand = [PlayingCard.DJ, PlayingCard.C2] as PlayerHand;

  const communityCards: CommunityCards = [
    PlayingCard.C6,
    PlayingCard.SQ,
    PlayingCard.DK,
    PlayingCard.S7,
    PlayingCard.C3,
  ];

  const getResult: Evaluation = evaluator.evaluate(PlayerHand, communityCards);

  expect(getResult.result.category).toEqual("HighCard");
});
