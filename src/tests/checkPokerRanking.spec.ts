import { PokerHandEval } from "../evaluator";
import {
  PlayingCardType,
  PlayerHandType,
  CommunityCardsType,
  EvaluationType,
} from "../evaluator/types";

describe("Check pokerRanking functions", () => {
  it("should be StraightFlush with straight", () => {
    const evaluator = new PokerHandEval();
    const PlayerHandType = [
      PlayingCardType.S5,
      PlayingCardType.S6,
    ] as PlayerHandType;
    const communityCards: CommunityCardsType = [
      PlayingCardType.S4,
      PlayingCardType.S3,
      PlayingCardType.S2,
      PlayingCardType.D3,
      PlayingCardType.SA,
    ];
    const getResult: EvaluationType = evaluator.evaluate(
      PlayerHandType,
      communityCards
    );
    expect(getResult.result.category).toEqual("StraightFlush");
  });
  it("Should be straightFlush with lowAceStraight ", () => {
    const evaluator = new PokerHandEval();
    const PlayerHandType = [
      PlayingCardType.S5,
      PlayingCardType.S7,
    ] as PlayerHandType;
    const communityCards: CommunityCardsType = [
      PlayingCardType.S4,
      PlayingCardType.S3,
      PlayingCardType.S2,
      PlayingCardType.D3,
      PlayingCardType.SA,
    ];
    const getResult: EvaluationType = evaluator.evaluate(
      PlayerHandType,
      communityCards
    );
    expect(getResult.result.category).toEqual("StraightFlush");
  });
  it("chances for Straight and Flush but not straightFlush this should be flush", () => {
    const evaluator = new PokerHandEval();
    const PlayerHandType = [
      PlayingCardType.S5,
      PlayingCardType.C6,
    ] as PlayerHandType;
    const communityCards: CommunityCardsType = [
      PlayingCardType.S4,
      PlayingCardType.S9,
      PlayingCardType.S2,
      PlayingCardType.D3,
      PlayingCardType.SA,
    ];
    const getResult: EvaluationType = evaluator.evaluate(
      PlayerHandType,
      communityCards
    );
    expect(getResult.result.category).toEqual("Flush");
  });

  it("should be StraightFlush with straight", () => {
    const evaluator = new PokerHandEval();
    const PlayerHandType = [
      PlayingCardType.SJ,
      PlayingCardType.SK,
    ] as PlayerHandType;
    const communityCards: CommunityCardsType = [
      PlayingCardType.D7,
      PlayingCardType.HT,
      PlayingCardType.S9,
      PlayingCardType.DQ,
      PlayingCardType.SA,
    ];
    const getResult: EvaluationType = evaluator.evaluate(
      PlayerHandType,
      communityCards
    );
    expect(getResult.result.category).toEqual("Straight");
  });

  it("should be FullHouse case 1 ", () => {
    const evaluator = new PokerHandEval();
    const PlayerHandType = [
      PlayingCardType.S7,
      PlayingCardType.S7,
    ] as PlayerHandType;
    const communityCards: CommunityCardsType = [
      PlayingCardType.D7,
      PlayingCardType.HT,
      PlayingCardType.ST,
      PlayingCardType.DT,
      PlayingCardType.SA,
    ];
    const getResult: EvaluationType = evaluator.evaluate(
      PlayerHandType,
      communityCards
    );
    expect(getResult.result.category).toEqual("FullHouse");
  });

  it("check FourOfAKind", () => {
    const evaluator = new PokerHandEval();
    const PlayerHandType = [
      PlayingCardType.CA,
      PlayingCardType.DK,
    ] as PlayerHandType;

    const communityCards: CommunityCardsType = [
      PlayingCardType.DJ,
      PlayingCardType.HK,
      PlayingCardType.CK,
      PlayingCardType.DK,
      PlayingCardType.SA,
    ];

    const getResult: EvaluationType = evaluator.evaluate(
      PlayerHandType,
      communityCards
    );

    expect(getResult.result.category).toEqual("FourOfAKind");
  });
});

it("check FourOfAKind", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.CT,
    PlayingCardType.HT,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.DK,
    PlayingCardType.DT,
    PlayingCardType.CJ,
    PlayingCardType.D9,
    PlayingCardType.ST,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("FourOfAKind");
});

it("check FourOfAKind", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.H3,
    PlayingCardType.D3,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.DK,
    PlayingCardType.DK,
    PlayingCardType.C3,
    PlayingCardType.DK,
    PlayingCardType.S3,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("FourOfAKind");
});

it("check FourOfAKind", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.C2,
    PlayingCardType.S3,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.DK,
    PlayingCardType.D2,
    PlayingCardType.H2,
    PlayingCardType.D4,
    PlayingCardType.S2,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("FourOfAKind");
});

it("check FourOfAKind", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.C9,
    PlayingCardType.S9,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.DK,
    PlayingCardType.S9,
    PlayingCardType.CJ,
    PlayingCardType.D9,
    PlayingCardType.SA,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("FourOfAKind");
});

it("check FullHouse", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.SA,
    PlayingCardType.DK,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.SK,
    PlayingCardType.CK,
    PlayingCardType.CJ,
    PlayingCardType.C8,
    PlayingCardType.SA,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("FullHouse");
});

it("check FullHouse", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.D8,
    PlayingCardType.S2,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.D2,
    PlayingCardType.C2,
    PlayingCardType.CJ,
    PlayingCardType.C8,
    PlayingCardType.SA,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("FullHouse");
});

it("check FullHouse", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.CT,
    PlayingCardType.S2,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.D2,
    PlayingCardType.C9,
    PlayingCardType.CT,
    PlayingCardType.D8,
    PlayingCardType.ST,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("FullHouse");
});

it("check FullHouse", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.CK,
    PlayingCardType.S2,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.D2,
    PlayingCardType.CK,
    PlayingCardType.CT,
    PlayingCardType.DK,
    PlayingCardType.ST,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("FullHouse");
});

it("check Flush", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.C4,
    PlayingCardType.C8,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.C6,
    PlayingCardType.D9,
    PlayingCardType.C3,
    PlayingCardType.SK,
    PlayingCardType.C2,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("Flush");
});

it("check Flush", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.D4,
    PlayingCardType.D8,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.D6,
    PlayingCardType.D9,
    PlayingCardType.C3,
    PlayingCardType.SK,
    PlayingCardType.D2,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("Flush");
});

it("check Low StraightFlush", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.DA,
    PlayingCardType.D2,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.D3,
    PlayingCardType.D4,
    PlayingCardType.C3,
    PlayingCardType.SK,
    PlayingCardType.D5,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("StraightFlush");
});

it("check Flush", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.S9,
    PlayingCardType.S9,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.S8,
    PlayingCardType.S9,
    PlayingCardType.C3,
    PlayingCardType.SK,
    PlayingCardType.D2,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("Flush");
});

it("check Three of A kind Flush", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.S9,
    PlayingCardType.S9,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.S8,
    PlayingCardType.S9,
    PlayingCardType.C3,
    PlayingCardType.SK,
    PlayingCardType.D2,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("Flush");
});

it("check Four of A kind Flush", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.S9,
    PlayingCardType.S9,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.S9,
    PlayingCardType.S9,
    PlayingCardType.C3,
    PlayingCardType.SK,
    PlayingCardType.D2,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("FourOfAKind");
});

it("check FullHouse Flush", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.S9,
    PlayingCardType.S8,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.S8,
    PlayingCardType.S9,
    PlayingCardType.C3,
    PlayingCardType.H9,
    PlayingCardType.D2,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("FullHouse");
});

it("check Flush", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.H4,
    PlayingCardType.H6,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.C9,
    PlayingCardType.S8,
    PlayingCardType.H9,
    PlayingCardType.HK,
    PlayingCardType.H2,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("Flush");
});

it("check Straight", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.D2,
    PlayingCardType.C4,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.D6,
    PlayingCardType.S9,
    PlayingCardType.D5,
    PlayingCardType.S2,
    PlayingCardType.C3,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("Straight");
});

it("check FullHouse with Straight", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.DA,
    PlayingCardType.C4,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.DA,
    PlayingCardType.SA,
    PlayingCardType.D3,
    PlayingCardType.S2,
    PlayingCardType.C4,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("FullHouse");
});

it("check  FullHouse with high priority", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.SA,
    PlayingCardType.DK,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.SA,
    PlayingCardType.SA,
    PlayingCardType.DK,
    PlayingCardType.H2,
    PlayingCardType.C3,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );
  expect(getResult.result.category).toEqual("FullHouse");
});

it("check FullHouse with low priority", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.C3,
    PlayingCardType.C2,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.D3,
    PlayingCardType.H3,
    PlayingCardType.S2,
    PlayingCardType.H5,
    PlayingCardType.C9,
  ];
  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );
  expect(getResult.result.category).toEqual("FullHouse");
});

it("check Low Straight", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.D2,
    PlayingCardType.C4,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.D6,
    PlayingCardType.S9,
    PlayingCardType.D5,
    PlayingCardType.S3,
    PlayingCardType.CA,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("Straight");
});

it("check high Straight", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.DK,
    PlayingCardType.CA,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.DJ,
    PlayingCardType.S9,
    PlayingCardType.D5,
    PlayingCardType.SQ,
    PlayingCardType.CT,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("Straight");
});

it("check Straight", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.ST,
    PlayingCardType.C7,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.D9,
    PlayingCardType.S8,
    PlayingCardType.D5,
    PlayingCardType.S2,
    PlayingCardType.C6,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("Straight");
});

it("check Straight", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.D2,
    PlayingCardType.D6,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.D9,
    PlayingCardType.S4,
    PlayingCardType.D5,
    PlayingCardType.S3,
    PlayingCardType.C6,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("Straight");
});

it("check Straight", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.C5,
    PlayingCardType.D6,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.S4,
    PlayingCardType.C7,
    PlayingCardType.D5,
    PlayingCardType.S8,
    PlayingCardType.C6,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("Straight");
});

it("check Straight", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.SA,
    PlayingCardType.D2,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.D3,
    PlayingCardType.S4,
    PlayingCardType.D5,
    PlayingCardType.S3,
    PlayingCardType.C6,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("Straight");
});

it("check ThreeOfAKind", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.D2,
    PlayingCardType.C4,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.D6,
    PlayingCardType.S4,
    PlayingCardType.D4,
    PlayingCardType.S7,
    PlayingCardType.C3,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("ThreeOfAKind");
});

// it('check the RoyalFlush', () => {
//   const evaluator = new PokerHandEval();
//   const PlayerHandType = [PlayingCardType.SA, PlayingCardType.SK] as PlayerHandType;

//   const communityCards: CommunityCardsType = [
//     PlayingCardType.SQ,
//     PlayingCardType.SJ,
//     PlayingCardType.ST,
//     PlayingCardType.C2,
//     PlayingCardType.H3,
//   ];
//   const getResult: EvaluationType = evaluator.evaluate(PlayerHandType, communityCards);
//   expect(getResult.result.category).toEqual('RoyalFlush');
// });

it("check ThreeOfAKind", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.D3,
    PlayingCardType.C8,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.S3,
    PlayingCardType.S4,
    PlayingCardType.D9,
    PlayingCardType.S7,
    PlayingCardType.C3,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("ThreeOfAKind");
});

it("check ThreeOfAKind", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.D8,
    PlayingCardType.C8,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.S3,
    PlayingCardType.S4,
    PlayingCardType.D9,
    PlayingCardType.S8,
    PlayingCardType.C2,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("ThreeOfAKind");
});

it("check ThreeOfAKind", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.D2,
    PlayingCardType.C8,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.S3,
    PlayingCardType.S4,
    PlayingCardType.D9,
    PlayingCardType.S2,
    PlayingCardType.C2,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("ThreeOfAKind");
});

it("check ThreeOfAKind", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.D2,
    PlayingCardType.C8,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.S3,
    PlayingCardType.S4,
    PlayingCardType.D9,
    PlayingCardType.D2,
    PlayingCardType.C2,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("ThreeOfAKind");
});

it("check TwoPair", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.S2,
    PlayingCardType.C4,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.C2,
    PlayingCardType.S9,
    PlayingCardType.D4,
    PlayingCardType.S7,
    PlayingCardType.C3,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("TwoPair");
});

it("check TwoPair", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.CT,
    PlayingCardType.C5,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.CT,
    PlayingCardType.S2,
    PlayingCardType.D4,
    PlayingCardType.S7,
    PlayingCardType.D5,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("TwoPair");
});

it("check TwoPair", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.DJ,
    PlayingCardType.S9,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.CA,
    PlayingCardType.S9,
    PlayingCardType.DJ,
    PlayingCardType.S7,
    PlayingCardType.C3,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("TwoPair");
});

it("check TwoPair", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.ST,
    PlayingCardType.C4,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.C2,
    PlayingCardType.ST,
    PlayingCardType.D4,
    PlayingCardType.S7,
    PlayingCardType.D3,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("TwoPair");
});

it("check TwoPair", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.SK,
    PlayingCardType.CT,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.C2,
    PlayingCardType.SK,
    PlayingCardType.D4,
    PlayingCardType.S7,
    PlayingCardType.DT,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("TwoPair");
});

it("check OnePair", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.DA,
    PlayingCardType.C4,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.C2,
    PlayingCardType.S9,
    PlayingCardType.DA,
    PlayingCardType.S7,
    PlayingCardType.C3,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("OnePair");
});

it("check OnePair", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.SA,
    PlayingCardType.C4,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.C2,
    PlayingCardType.S9,
    PlayingCardType.SA,
    PlayingCardType.D7,
    PlayingCardType.C3,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("OnePair");
});

it("check OnePair", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.CT,
    PlayingCardType.C4,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.CT,
    PlayingCardType.S9,
    PlayingCardType.SA,
    PlayingCardType.D7,
    PlayingCardType.C2,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("OnePair");
});

it("check OnePair", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.HA,
    PlayingCardType.D4,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.C6,
    PlayingCardType.ST,
    PlayingCardType.SA,
    PlayingCardType.D7,
    PlayingCardType.C3,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("OnePair");
});

it("check OnePair with low Straight", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.HA,
    PlayingCardType.D4,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.S4,
    PlayingCardType.ST,
    PlayingCardType.S5,
    PlayingCardType.D2,
    PlayingCardType.C3,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("Straight");
});

it("check OnePair High Straight", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.CA,
    PlayingCardType.DK,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.CQ,
    PlayingCardType.ST,
    PlayingCardType.SJ,
    PlayingCardType.D7,
    PlayingCardType.CK,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("Straight");
});

it("check OnePair Straight", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.CT,
    PlayingCardType.D9,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.C8,
    PlayingCardType.ST,
    PlayingCardType.S7,
    PlayingCardType.D6,
    PlayingCardType.C3,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("Straight");
});

it("check ThreeOfAKind high Priority", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.CA,
    PlayingCardType.CK,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.SA,
    PlayingCardType.HA,
    PlayingCardType.DQ,
    PlayingCardType.CT,
    PlayingCardType.D5,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );
  expect(getResult.result.category).toEqual("ThreeOfAKind");
});
it("check HighCard", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.DA,
    PlayingCardType.C4,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.C2,
    PlayingCardType.S9,
    PlayingCardType.DK,
    PlayingCardType.S7,
    PlayingCardType.C3,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("HighCard");
});

it("check HighCard", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.HA,
    PlayingCardType.C4,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.C2,
    PlayingCardType.S9,
    PlayingCardType.DK,
    PlayingCardType.S7,
    PlayingCardType.D3,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("HighCard");
});

it("check HighCard", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.D9,
    PlayingCardType.C8,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.C2,
    PlayingCardType.S4,
    PlayingCardType.DT,
    PlayingCardType.S7,
    PlayingCardType.C3,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("HighCard");
});

it("check HighCard", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.ST,
    PlayingCardType.C2,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.C6,
    PlayingCardType.SQ,
    PlayingCardType.DK,
    PlayingCardType.S7,
    PlayingCardType.C3,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("HighCard");
});

it("check HighCard", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.SQ,
    PlayingCardType.C9,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.C6,
    PlayingCardType.S2,
    PlayingCardType.DT,
    PlayingCardType.S7,
    PlayingCardType.C3,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("HighCard");
});

it("check HighCard", () => {
  const evaluator = new PokerHandEval();
  const PlayerHandType = [
    PlayingCardType.DJ,
    PlayingCardType.C2,
  ] as PlayerHandType;

  const communityCards: CommunityCardsType = [
    PlayingCardType.C6,
    PlayingCardType.SQ,
    PlayingCardType.DK,
    PlayingCardType.S7,
    PlayingCardType.C3,
  ];

  const getResult: EvaluationType = evaluator.evaluate(
    PlayerHandType,
    communityCards
  );

  expect(getResult.result.category).toEqual("HighCard");
});
