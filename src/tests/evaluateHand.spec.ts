import { EvaluatorService } from '../evaluator.service';
import { PlayingCard, PlayerHand, CommunityCards, Evaluation } from '../evaluator/types';

describe('EvaluateHand', () => {
  it('should compare four players with a Full House and a Straight', () => {
    const evaluator = new EvaluatorService();

    const playerOneHand = [PlayingCard.HT, PlayingCard.H9] as PlayerHand;
    const playerTwoHand = [PlayingCard.D8, PlayingCard.H6] as PlayerHand;
    const playerThreeHand = [PlayingCard.S9, PlayingCard.C9] as PlayerHand;
    const playerFourHand = [PlayingCard.DA, PlayingCard.HA] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.D9,
      PlayingCard.H9,
      PlayingCard.CT,
      PlayingCard.D7,
      PlayingCard.C6,
    ];

    const playerOneResult: Evaluation = evaluator.evaluate(playerOneHand, communityCards);
    const playerTwoResult: Evaluation = evaluator.evaluate(playerTwoHand, communityCards);
    const playerThreeResult: Evaluation = evaluator.evaluate(playerThreeHand, communityCards);
    const playerFourResult: Evaluation = evaluator.evaluate(playerFourHand, communityCards);

    expect(playerOneResult.result.rank).toBeGreaterThan(playerTwoResult.result.rank);
    expect(playerThreeResult.result.rank).toBeGreaterThan(playerFourResult.result.rank);
  });

  it('should compare four players with a Pair, a Straight Flush, and two other hands', () => {
    const evaluator = new EvaluatorService();
    const playerOneHand = [PlayingCard.S2, PlayingCard.C2] as PlayerHand;
    const playerTwoHand = [PlayingCard.S6, PlayingCard.S7] as PlayerHand;
    const playerThreeHand = [PlayingCard.H3, PlayingCard.S2] as PlayerHand;
    const playerFourHand = [PlayingCard.H5, PlayingCard.S7] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.S3,
      PlayingCard.S4,
      PlayingCard.S5,
      PlayingCard.DA,
      PlayingCard.HA,
    ];

    const playerOneResult: Evaluation = evaluator.evaluate(playerOneHand, communityCards);
    const playerTwoResult: Evaluation = evaluator.evaluate(playerTwoHand, communityCards);
    const playerThreeResult: Evaluation = evaluator.evaluate(playerThreeHand, communityCards);
    const playerFourResult: Evaluation = evaluator.evaluate(playerFourHand, communityCards);

    expect(playerOneResult.result.rank).toBeLessThan(playerTwoResult.result.rank);
    expect(playerThreeResult.result.rank).toBeGreaterThan(playerFourResult.result.rank);
  });

  it('should compare four players with Three of a Kind, a Straight, and two other hands', () => {
    const evaluator = new EvaluatorService();
    const playerOneHand = [PlayingCard.D8, PlayingCard.H8] as PlayerHand;
    const playerTwoHand = [PlayingCard.C5, PlayingCard.D6] as PlayerHand;
    const playerThreeHand = [PlayingCard.S3, PlayingCard.H4] as PlayerHand;
    const playerFourHand = [PlayingCard.D2, PlayingCard.C3] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.S8,
      PlayingCard.C7,
      PlayingCard.C9,
      PlayingCard.DA,
      PlayingCard.HA,
    ];

    const playerOneResult: Evaluation = evaluator.evaluate(playerOneHand, communityCards);
    const playerTwoResult: Evaluation = evaluator.evaluate(playerTwoHand, communityCards);
    const playerThreeResult: Evaluation = evaluator.evaluate(playerThreeHand, communityCards);
    const playerFourResult: Evaluation = evaluator.evaluate(playerFourHand, communityCards);

    expect(playerOneResult.result.rank).toBeGreaterThan(playerTwoResult.result.rank);
    expect(playerThreeResult.result.rank).toEqual(playerFourResult.result.rank);
  });

  it('should compare two players with a Flush and a Straight', () => {
    const evaluator = new EvaluatorService();
    const playerOneHand = [PlayingCard.S2, PlayingCard.S3] as PlayerHand;
    const playerTwoHand = [PlayingCard.S5, PlayingCard.S6] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.S7,
      PlayingCard.S8,
      PlayingCard.S9,
      PlayingCard.DA,
      PlayingCard.HA,
    ];

    const playerOneResult: Evaluation = evaluator.evaluate(playerOneHand, communityCards);
    const playerTwoResult: Evaluation = evaluator.evaluate(playerTwoHand, communityCards);

    expect(playerOneResult.result.rank).toBeLessThan(playerTwoResult.result.rank);
  });

  it('should compare two players with a Full House and a Full House with different three of a kind', () => {
    const evaluator = new EvaluatorService();
    const playerOneHand = [PlayingCard.S2, PlayingCard.S2] as PlayerHand;
    const playerTwoHand = [PlayingCard.S3, PlayingCard.S3] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.S4,
      PlayingCard.S4,
      PlayingCard.S4,
      PlayingCard.S5,
      PlayingCard.S6,
    ];
    const playerOneResult: Evaluation = evaluator.evaluate(playerOneHand, communityCards);
    const playerTwoResult: Evaluation = evaluator.evaluate(playerTwoHand, communityCards);

    expect(playerOneResult.result.rank).toBeLessThan(playerTwoResult.result.rank);
  });

  it('should compare two players with identical Full Houses', () => {
    const evaluator = new EvaluatorService();
    const playerOneHand = [PlayingCard.S7, PlayingCard.S8] as PlayerHand;
    const playerTwoHand = [PlayingCard.S7, PlayingCard.S8] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.S9,
      PlayingCard.S9,
      PlayingCard.S9,
      PlayingCard.SJ,
      PlayingCard.SQ,
    ];

    const playerOneResult: Evaluation = evaluator.evaluate(playerOneHand, communityCards);
    const playerTwoResult: Evaluation = evaluator.evaluate(playerTwoHand, communityCards);

    expect(playerOneResult.result.rank).toEqual(playerTwoResult.result.rank);
  });

  it('should compare two players with a Full House and a Full House with tie', () => {
    const evaluator = new EvaluatorService();
    const playerOneHand = [PlayingCard.S9, PlayingCard.SJ] as PlayerHand;
    const playerTwoHand = [PlayingCard.SJ, PlayingCard.SA] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.SQ,
      PlayingCard.SQ,
      PlayingCard.SQ,
      PlayingCard.SK,
      PlayingCard.SJ,
    ];

    const playerOneResult: Evaluation = evaluator.evaluate(playerOneHand, communityCards);
    const playerTwoResult: Evaluation = evaluator.evaluate(playerTwoHand, communityCards);

    expect(playerOneResult.result.rank).toEqual(playerTwoResult.result.rank);
  });

  it('should compare two players with a Royal Flash', () => {
    const evaluator = new EvaluatorService();
    const playerOneHand = [PlayingCard.S9, PlayingCard.SJ] as PlayerHand;
    const playerTwoHand = [PlayingCard.DT, PlayingCard.DQ] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.DA,
      PlayingCard.DJ,
      PlayingCard.S9,
      PlayingCard.DK,
      PlayingCard.CJ,
    ];

    const playerOneResult: Evaluation = evaluator.evaluate(playerOneHand, communityCards);
    const playerTwoResult: Evaluation = evaluator.evaluate(playerTwoHand, communityCards);

    expect(playerOneResult.result.rank).toBeLessThan(playerTwoResult.result.rank);
  });

  it('should compare two players with a Straight Flash', () => {
    const evaluator = new EvaluatorService();
    const playerOneHand = [PlayingCard.S9, PlayingCard.SJ] as PlayerHand;
    const playerTwoHand = [PlayingCard.S8, PlayingCard.S9] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.SA,
      PlayingCard.S6,
      PlayingCard.S2,
      PlayingCard.S5,
      PlayingCard.S7,
    ];

    const playerOneResult: Evaluation = evaluator.evaluate(playerOneHand, communityCards);
    const playerTwoResult: Evaluation = evaluator.evaluate(playerTwoHand, communityCards);

    expect(playerOneResult.result.rank).toBeLessThan(playerTwoResult.result.rank);
  });

  it('should compare two players with a High Card', () => {
    const evaluator = new EvaluatorService();
    const playerOneHand = [PlayingCard.S9, PlayingCard.SJ] as PlayerHand;
    const playerTwoHand = [PlayingCard.SA, PlayingCard.ST] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.S2,
      PlayingCard.S6,
      PlayingCard.S3,
      PlayingCard.S5,
      PlayingCard.S7,
    ];
    const playerOneResult: Evaluation = evaluator.evaluate(playerOneHand, communityCards);
    const playerTwoResult: Evaluation = evaluator.evaluate(playerTwoHand, communityCards);

    expect(playerOneResult.result.rank).toBeLessThan(playerTwoResult.result.rank);
  });

  it('should compare five players with a Pair', () => {
    const evaluator = new EvaluatorService();
    const playerOneHand = [PlayingCard.S9, PlayingCard.SJ] as PlayerHand;
    const playerTwoHand = [PlayingCard.S2, PlayingCard.ST] as PlayerHand;
    const playerThreeHand = [PlayingCard.D9, PlayingCard.DJ] as PlayerHand;
    const playerFourHand = [PlayingCard.C2, PlayingCard.CT] as PlayerHand;
    const playerFiveHand = [PlayingCard.H9, PlayingCard.HJ] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.D2,
      PlayingCard.C6,
      PlayingCard.D3,
      PlayingCard.S5,
      PlayingCard.S7,
    ];

    const playerOneResult: Evaluation = evaluator.evaluate(playerOneHand, communityCards);
    const playerTwoResult: Evaluation = evaluator.evaluate(playerTwoHand, communityCards);
    const playerThreeResult: Evaluation = evaluator.evaluate(playerThreeHand, communityCards);
    const playerFourResult: Evaluation = evaluator.evaluate(playerFourHand, communityCards);
    const playerFiveResult: Evaluation = evaluator.evaluate(playerFiveHand, communityCards);

    expect(playerOneResult.result.rank).toBeLessThan(playerTwoResult.result.rank);
    expect(playerThreeResult.result.rank).toBeLessThan(playerFourResult.result.rank);
    expect(playerFiveResult.result.rank).toEqual(playerOneResult.result.rank);
  });

  it('should compare five players with a Flush', () => {
    const evaluator = new EvaluatorService();
    const playerOneHand = [PlayingCard.S9, PlayingCard.SJ] as PlayerHand;
    const playerTwoHand = [PlayingCard.D4, PlayingCard.D5] as PlayerHand;
    const playerThreeHand = [PlayingCard.C9, PlayingCard.CJ] as PlayerHand;
    const playerFourHand = [PlayingCard.H4, PlayingCard.H5] as PlayerHand;
    const playerFiveHand = [PlayingCard.S4, PlayingCard.S5] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.D2,
      PlayingCard.DA,
      PlayingCard.D3,
      PlayingCard.C5,
      PlayingCard.H7,
    ];

    const playerOneResult: Evaluation = evaluator.evaluate(playerOneHand, communityCards);
    const playerTwoResult: Evaluation = evaluator.evaluate(playerTwoHand, communityCards);
    const playerThreeResult: Evaluation = evaluator.evaluate(playerThreeHand, communityCards);
    const playerFourResult: Evaluation = evaluator.evaluate(playerFourHand, communityCards);
    const playerFiveResult: Evaluation = evaluator.evaluate(playerFiveHand, communityCards);

    expect(playerOneResult.result.rank).toBeLessThan(playerTwoResult.result.rank);
    expect(playerThreeResult.result.rank).toBeLessThan(playerFourResult.result.rank);
    expect(playerFiveResult.result.rank).toBeGreaterThan(playerOneResult.result.rank);
  });

  it('should compare five players with a FullHouse', () => {
    const evaluator = new EvaluatorService();
    const playerOneHand = [PlayingCard.S9, PlayingCard.SJ] as PlayerHand;
    const playerTwoHand = [PlayingCard.D5, PlayingCard.ST] as PlayerHand;
    const playerThreeHand = [PlayingCard.H9, PlayingCard.HJ] as PlayerHand;
    const playerFourHand = [PlayingCard.C5, PlayingCard.CT] as PlayerHand;
    const playerFiveHand = [PlayingCard.D9, PlayingCard.DJ] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.S2,
      PlayingCard.S2,
      PlayingCard.S2,
      PlayingCard.D5,
      PlayingCard.D7,
    ];

    const playerOneResult: Evaluation = evaluator.evaluate(playerOneHand, communityCards);
    const playerTwoResult: Evaluation = evaluator.evaluate(playerTwoHand, communityCards);
    const playerThreeResult: Evaluation = evaluator.evaluate(playerThreeHand, communityCards);
    const playerFourResult: Evaluation = evaluator.evaluate(playerFourHand, communityCards);
    const playerFiveResult: Evaluation = evaluator.evaluate(playerFiveHand, communityCards);

    expect(playerOneResult.result.rank).toBeLessThan(playerTwoResult.result.rank);
    expect(playerThreeResult.result.rank).toBeLessThan(playerFourResult.result.rank);
    expect(playerFiveResult.result.rank).toBeLessThan(playerOneResult.result.rank);
  });

  it('should compare five players with a Two Pair', () => {
    const evaluator = new EvaluatorService();
    const playerOneHand = [PlayingCard.C9, PlayingCard.CJ] as PlayerHand;
    const playerTwoHand = [PlayingCard.DA, PlayingCard.HT] as PlayerHand;
    const playerThreeHand = [PlayingCard.H9, PlayingCard.HJ] as PlayerHand;
    const playerFourHand = [PlayingCard.CA, PlayingCard.CT] as PlayerHand;
    const playerFiveHand = [PlayingCard.S9, PlayingCard.SJ] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.C2,
      PlayingCard.S2,
      PlayingCard.H2,
      PlayingCard.DA,
      PlayingCard.HT,
    ];

    const playerOneResult: Evaluation = evaluator.evaluate(playerOneHand, communityCards);
    const playerTwoResult: Evaluation = evaluator.evaluate(playerTwoHand, communityCards);
    const playerThreeResult: Evaluation = evaluator.evaluate(playerThreeHand, communityCards);
    const playerFourResult: Evaluation = evaluator.evaluate(playerFourHand, communityCards);
    const playerFiveResult: Evaluation = evaluator.evaluate(playerFiveHand, communityCards);

    expect(playerOneResult.result.rank).toBeLessThan(playerTwoResult.result.rank);
    expect(playerThreeResult.result.rank).toBeLessThan(playerFourResult.result.rank);
    expect(playerFiveResult.result.rank).toEqual(playerOneResult.result.rank);
  });

  it('should compare five players with a Straight', () => {
    const evaluator = new EvaluatorService();
    const playerOneHand = [PlayingCard.C9, PlayingCard.CJ] as PlayerHand;
    const playerTwoHand = [PlayingCard.D3, PlayingCard.H2] as PlayerHand;
    const playerThreeHand = [PlayingCard.H9, PlayingCard.HJ] as PlayerHand;
    const playerFourHand = [PlayingCard.C3, PlayingCard.C2] as PlayerHand;
    const playerFiveHand = [PlayingCard.S9, PlayingCard.SJ] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.C2,
      PlayingCard.S6,
      PlayingCard.H5,
      PlayingCard.DA,
      PlayingCard.H4,
    ];

    const playerOneResult: Evaluation = evaluator.evaluate(playerOneHand, communityCards);
    const playerTwoResult: Evaluation = evaluator.evaluate(playerTwoHand, communityCards);
    const playerThreeResult: Evaluation = evaluator.evaluate(playerThreeHand, communityCards);
    const playerFourResult: Evaluation = evaluator.evaluate(playerFourHand, communityCards);
    const playerFiveResult: Evaluation = evaluator.evaluate(playerFiveHand, communityCards);

    expect(playerOneResult.result.rank).toBeLessThan(playerTwoResult.result.rank);
    expect(playerThreeResult.result.rank).toBeLessThan(playerFourResult.result.rank);
    expect(playerFiveResult.result.rank).toEqual(playerOneResult.result.rank);
  });

  it('should compare four players with a Straight Flush with tie ', () => {
    const evaluator = new EvaluatorService();
    const playerOneHand = [PlayingCard.C9, PlayingCard.CJ] as PlayerHand;
    const playerTwoHand = [PlayingCard.C9, PlayingCard.CJ] as PlayerHand;
    const playerThreeHand = [PlayingCard.H9, PlayingCard.HJ] as PlayerHand;
    const playerFourHand = [PlayingCard.D9, PlayingCard.DJ] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.CT,
      PlayingCard.C8,
      PlayingCard.C7,
      PlayingCard.D9,
      PlayingCard.C4,
    ];

    const playerOneResult: Evaluation = evaluator.evaluate(playerOneHand, communityCards);
    const playerTwoResult: Evaluation = evaluator.evaluate(playerTwoHand, communityCards);
    const playerThreeResult: Evaluation = evaluator.evaluate(playerThreeHand, communityCards);
    const playerFourResult: Evaluation = evaluator.evaluate(playerFourHand, communityCards);

    expect(playerOneResult.result.rank).toEqual(playerTwoResult.result.rank);
    expect(playerThreeResult.result.rank).toEqual(playerFourResult.result.rank);
  });

  it('should compare five players with a Straight Flush with low Flush ', () => {
    const evaluator = new EvaluatorService();
    const playerOneHand = [PlayingCard.H9, PlayingCard.DT] as PlayerHand;
    const playerTwoHand = [PlayingCard.CA, PlayingCard.C4] as PlayerHand;
    const playerThreeHand = [PlayingCard.S9, PlayingCard.DT] as PlayerHand;
    const playerFourHand = [PlayingCard.DA, PlayingCard.D4] as PlayerHand;
    const playerFiveHand = [PlayingCard.SA, PlayingCard.S4] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.CT,
      PlayingCard.C5,
      PlayingCard.C2,
      PlayingCard.D9,
      PlayingCard.C3,
    ];

    const playerOneResult: Evaluation = evaluator.evaluate(playerOneHand, communityCards);
    const playerTwoResult: Evaluation = evaluator.evaluate(playerTwoHand, communityCards);
    const playerThreeResult: Evaluation = evaluator.evaluate(playerThreeHand, communityCards);
    const playerFourResult: Evaluation = evaluator.evaluate(playerFourHand, communityCards);
    const playerFiveResult: Evaluation = evaluator.evaluate(playerFiveHand, communityCards);

    expect(playerOneResult.result.rank).toBeLessThan(playerTwoResult.result.rank);
    expect(playerThreeResult.result.rank).toBeLessThan(playerFourResult.result.rank);
    expect(playerFiveResult.result.rank).toBeGreaterThan(playerOneResult.result.rank);
  });

  it('should compare five players with a Straight  Flush ', () => {
    const evaluator = new EvaluatorService();
    const playerOneHand = [PlayingCard.H9, PlayingCard.DT] as PlayerHand;
    const playerTwoHand = [PlayingCard.CA, PlayingCard.C4] as PlayerHand;
    const playerThreeHand = [PlayingCard.S9, PlayingCard.DT] as PlayerHand;
    const playerFourHand = [PlayingCard.DA, PlayingCard.D4] as PlayerHand;
    const playerFiveHand = [PlayingCard.SA, PlayingCard.S4] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.CT,
      PlayingCard.C5,
      PlayingCard.C2,
      PlayingCard.D9,
      PlayingCard.C3,
    ];

    const playerOneResult: Evaluation = evaluator.evaluate(playerOneHand, communityCards);
    const playerTwoResult: Evaluation = evaluator.evaluate(playerTwoHand, communityCards);
    const playerThreeResult: Evaluation = evaluator.evaluate(playerThreeHand, communityCards);
    const playerFourResult: Evaluation = evaluator.evaluate(playerFourHand, communityCards);
    const playerFiveResult: Evaluation = evaluator.evaluate(playerFiveHand, communityCards); // Added evaluation for fifth player

    expect(playerOneResult.result.rank).toBeLessThan(playerTwoResult.result.rank);
    expect(playerThreeResult.result.rank).toBeLessThan(playerFourResult.result.rank);
    expect(playerFiveResult.result.rank).toBeGreaterThan(playerOneResult.result.rank); // Added comparison for fifth player
  });
  it('should compare four players with a Royal Flush with tie ', () => {
    const evaluator = new EvaluatorService();
    const playerOneHand = [PlayingCard.HQ, PlayingCard.DT] as PlayerHand;
    const playerTwoHand = [PlayingCard.CQ, PlayingCard.CT] as PlayerHand;
    const playerThreeHand = [PlayingCard.SQ, PlayingCard.ST] as PlayerHand;
    const playerFourHand = [PlayingCard.DQ, PlayingCard.DT] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.CA,
      PlayingCard.CJ,
      PlayingCard.CK,
      PlayingCard.D9,
      PlayingCard.H3,
    ];

    const playerOneResult: Evaluation = evaluator.evaluate(playerOneHand, communityCards);
    const playerTwoResult: Evaluation = evaluator.evaluate(playerTwoHand, communityCards);
    const playerThreeResult: Evaluation = evaluator.evaluate(playerThreeHand, communityCards);
    const playerFourResult: Evaluation = evaluator.evaluate(playerFourHand, communityCards);

    expect(playerOneResult.result.rank).toBeLessThan(playerTwoResult.result.rank);
    expect(playerThreeResult.result.rank).toEqual(playerFourResult.result.rank);
  });

  it('should compare four players low Full House ', () => {
    const evaluator = new EvaluatorService();
    const playerOneHand = [PlayingCard.H2, PlayingCard.D2] as PlayerHand;
    const playerTwoHand = [PlayingCard.H7, PlayingCard.S4] as PlayerHand;
    const playerThreeHand = [PlayingCard.S2, PlayingCard.D2] as PlayerHand;
    const playerFourHand = [PlayingCard.H7, PlayingCard.D4] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.CA,
      PlayingCard.C5,
      PlayingCard.C2,
      PlayingCard.DA,
      PlayingCard.CA,
    ];

    const playerOneResult: Evaluation = evaluator.evaluate(playerOneHand, communityCards);
    const playerTwoResult: Evaluation = evaluator.evaluate(playerTwoHand, communityCards);
    const playerThreeResult: Evaluation = evaluator.evaluate(playerThreeHand, communityCards);
    const playerFourResult: Evaluation = evaluator.evaluate(playerFourHand, communityCards);

    expect(playerOneResult.result.rank).toBeGreaterThan(playerTwoResult.result.rank);
    expect(playerThreeResult.result.rank).toBeGreaterThan(playerFourResult.result.rank);
  });
  it('should compare four players high Full House  ', () => {
    const evaluator = new EvaluatorService();
    const playerOneHand = [PlayingCard.H9, PlayingCard.DT] as PlayerHand;
    const playerTwoHand = [PlayingCard.SA, PlayingCard.DA] as PlayerHand;
    const playerThreeHand = [PlayingCard.C9, PlayingCard.CT] as PlayerHand;
    const playerFourHand = [PlayingCard.DA, PlayingCard.HA] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.SK,
      PlayingCard.HK,
      PlayingCard.H2,
      PlayingCard.D9,
      PlayingCard.DK,
    ];

    const playerOneResult: Evaluation = evaluator.evaluate(playerOneHand, communityCards);
    const playerTwoResult: Evaluation = evaluator.evaluate(playerTwoHand, communityCards);
    const playerThreeResult: Evaluation = evaluator.evaluate(playerThreeHand, communityCards);
    const playerFourResult: Evaluation = evaluator.evaluate(playerFourHand, communityCards);

    expect(playerOneResult.result.rank).toBeLessThan(playerTwoResult.result.rank);
    expect(playerThreeResult.result.rank).toBeLessThan(playerFourResult.result.rank);
  });

  it('should compare four players with a Four Of A Kind with tie ', () => {
    const evaluator = new EvaluatorService();
    const playerOneHand = [PlayingCard.H9, PlayingCard.D9] as PlayerHand;
    const playerTwoHand = [PlayingCard.S9, PlayingCard.H9] as PlayerHand;
    const playerThreeHand = [PlayingCard.D9, PlayingCard.C9] as PlayerHand;
    const playerFourHand = [PlayingCard.C9, PlayingCard.H9] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.DT,
      PlayingCard.C5,
      PlayingCard.C2,
      PlayingCard.S9,
      PlayingCard.H9,
    ];

    const playerOneResult: Evaluation = evaluator.evaluate(playerOneHand, communityCards);
    const playerTwoResult: Evaluation = evaluator.evaluate(playerTwoHand, communityCards);
    const playerThreeResult: Evaluation = evaluator.evaluate(playerThreeHand, communityCards);
    const playerFourResult: Evaluation = evaluator.evaluate(playerFourHand, communityCards);

    expect(playerOneResult.result.rank).toEqual(playerTwoResult.result.rank);
    expect(playerThreeResult.result.rank).toEqual(playerFourResult.result.rank);
  });

  it('should compare four players with Four Of A Kind with low priority ', () => {
    const evaluator = new EvaluatorService();
    const playerOneHand = [PlayingCard.H2, PlayingCard.D2] as PlayerHand;
    const playerTwoHand = [PlayingCard.CA, PlayingCard.C4] as PlayerHand;
    const playerThreeHand = [PlayingCard.D2, PlayingCard.H2] as PlayerHand;
    const playerFourHand = [PlayingCard.C4, PlayingCard.CA] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.H2,
      PlayingCard.C5,
      PlayingCard.C2,
      PlayingCard.D9,
      PlayingCard.S3,
    ];

    const playerOneResult: Evaluation = evaluator.evaluate(playerOneHand, communityCards);
    const playerTwoResult: Evaluation = evaluator.evaluate(playerTwoHand, communityCards);
    const playerThreeResult: Evaluation = evaluator.evaluate(playerThreeHand, communityCards);
    const playerFourResult: Evaluation = evaluator.evaluate(playerFourHand, communityCards);

    expect(playerOneResult.result.rank).toBeGreaterThan(playerTwoResult.result.rank);
    expect(playerThreeResult.result.rank).toBeGreaterThan(playerFourResult.result.rank);
  });

  it('should compare four players with a Four Of Kind With High Priority', () => {
    const evaluator = new EvaluatorService();
    const playerOneHand = [PlayingCard.SA, PlayingCard.DA] as PlayerHand;
    const playerTwoHand = [PlayingCard.CA, PlayingCard.C4] as PlayerHand;
    const playerThreeHand = [PlayingCard.DA, PlayingCard.SA] as PlayerHand;
    const playerFourHand = [PlayingCard.C4, PlayingCard.CA] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.CA,
      PlayingCard.D5,
      PlayingCard.HA,
      PlayingCard.D9,
      PlayingCard.C3,
    ];

    const playerOneResult: Evaluation = evaluator.evaluate(playerOneHand, communityCards);
    const playerTwoResult: Evaluation = evaluator.evaluate(playerTwoHand, communityCards);
    const playerThreeResult: Evaluation = evaluator.evaluate(playerThreeHand, communityCards);
    const playerFourResult: Evaluation = evaluator.evaluate(playerFourHand, communityCards);

    expect(playerOneResult.result.rank).toBeGreaterThan(playerTwoResult.result.rank);
    expect(playerThreeResult.result.rank).toBeGreaterThan(playerFourResult.result.rank);
  });

  it('should compare five players with a High Card low priority', () => {
    const evaluator = new EvaluatorService();
    const playerOneHand = [PlayingCard.S2, PlayingCard.H3] as PlayerHand;
    const playerTwoHand = [PlayingCard.S7, PlayingCard.H5] as PlayerHand;
    const playerThreeHand = [PlayingCard.H3, PlayingCard.S2] as PlayerHand;
    const playerFourHand = [PlayingCard.H5, PlayingCard.S7] as PlayerHand;
    const playerFiveHand = [PlayingCard.D2, PlayingCard.C6] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.D2,
      PlayingCard.S6,
      PlayingCard.H3,
      PlayingCard.D9,
      PlayingCard.C6,
    ];
    const playerOneResult: Evaluation = evaluator.evaluate(playerOneHand, communityCards);
    const playerTwoResult: Evaluation = evaluator.evaluate(playerTwoHand, communityCards);
    const playerThreeResult: Evaluation = evaluator.evaluate(playerThreeHand, communityCards);
    const playerFourResult: Evaluation = evaluator.evaluate(playerFourHand, communityCards);
    const playerFiveResult: Evaluation = evaluator.evaluate(playerFiveHand, communityCards);

    expect(playerOneResult.result.rank).toBeGreaterThan(playerTwoResult.result.rank);
    expect(playerThreeResult.result.rank).toBeGreaterThan(playerFourResult.result.rank);
    expect(playerFiveResult.result.rank).toBeGreaterThan(playerFourResult.result.rank);
  });
  it('should compare five players with a High Card with high priority', () => {
    const evaluator = new EvaluatorService();
    const playerOneHand = [PlayingCard.H9, PlayingCard.DJ] as PlayerHand;
    const playerTwoHand = [PlayingCard.HA, PlayingCard.S9] as PlayerHand;
    const playerThreeHand = [PlayingCard.DJ, PlayingCard.H9] as PlayerHand;
    const playerFourHand = [PlayingCard.S9, PlayingCard.HA] as PlayerHand;
    const playerFiveHand = [PlayingCard.C9, PlayingCard.D9] as PlayerHand;

    const communityCards: CommunityCards = [
      PlayingCard.S2,
      PlayingCard.D6,
      PlayingCard.C3,
      PlayingCard.H5,
      PlayingCard.C7,
    ];
    const playerOneResult: Evaluation = evaluator.evaluate(playerOneHand, communityCards);
    const playerTwoResult: Evaluation = evaluator.evaluate(playerTwoHand, communityCards);
    const playerThreeResult: Evaluation = evaluator.evaluate(playerThreeHand, communityCards);
    const playerFourResult: Evaluation = evaluator.evaluate(playerFourHand, communityCards);
    const playerFiveResult: Evaluation = evaluator.evaluate(playerFiveHand, communityCards);

    expect(playerOneResult.result.rank).toBeLessThan(playerTwoResult.result.rank);
    expect(playerThreeResult.result.rank).toBeLessThan(playerFourResult.result.rank);
    expect(playerFiveResult.result.rank).toBeGreaterThan(playerFourResult.result.rank);
  });
});
