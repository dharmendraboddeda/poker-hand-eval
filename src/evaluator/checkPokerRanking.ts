import { EvaluationPlayingCard } from './types';

export class CheckPokerRanking {
  private handCards: EvaluationPlayingCard[];
  constructor(handCards: EvaluationPlayingCard[]) {
    this.handCards = handCards;
  }

  public checkStraightFlush(): boolean {
    const suitToCardsMap = new Map<string, EvaluationPlayingCard[]>();

    for (const card of this.handCards) {
      const suit = card[0];

      if (suitToCardsMap.has(suit)) {
        suitToCardsMap.get(suit)?.push(card);
      } else {
        suitToCardsMap.set(suit, [card]);
      }
    }

    const potentialFlushCards = Array.from(suitToCardsMap.values()).flatMap((cards) =>
      cards.length >= 5 ? cards : [],
    );

    const hasStraightInFlush = this.checkStraight(potentialFlushCards);
    return hasStraightInFlush;
  }

  public checkFourOfAKind(): boolean {
    const rankCounts = new Map<string, number>();
    this.handCards.forEach((card) => {
      const rank = card[1];
      rankCounts.set(rank, (rankCounts.get(rank) || 0) + 1);
    });
    for (const count of rankCounts.values()) {
      if (count === 4) {
        return true;
      }
    }
    return false;
  }

  public checkFullHouse(): boolean {
    const rankCounts = new Map<string, number>();
    this.handCards.forEach((card) => {
      const rank = card[1];
      rankCounts.set(rank, (rankCounts.get(rank) || 0) + 1);
    });

    let threeOfAKindTrips = 0;
    let twoOfAKindTrips = 0;
    for (const count of rankCounts.values()) {
      if (count === 3) {
        threeOfAKindTrips++;
      } else if (count === 2) {
        twoOfAKindTrips++;
      }
    }
    if (threeOfAKindTrips > 1) {
      return true;
    } else if (threeOfAKindTrips === 1 && twoOfAKindTrips >= 1) {
      return true;
    }
    return false;
  }

  public checkFlush(): boolean {
    const suitCounts = new Map<string, number>();
    const flushCards = new Map<string, EvaluationPlayingCard[]>();
    for (const card of this.handCards) {
      const suit = card[0];
      suitCounts.set(suit, (suitCounts.get(suit) || 0) + 1);
      if (flushCards.has(suit)) {
        flushCards.get(suit)?.push(card);
      } else {
        flushCards.set(suit, [card]);
      }
    }

    for (const count of suitCounts.values()) {
      if (count >= 5) {
        return true;
      }
    }

    return false;
  }

  public checkStraight(potentialFlushCards?: EvaluationPlayingCard[]): boolean {
    const handCards = potentialFlushCards ? potentialFlushCards : this.handCards;

    const cardRankOrder = '23456789ABCDE';
    const ranks = handCards.map((card) => card[1]);
    const uniqueSortedRanks = Array.from(new Set(ranks)).sort(
      (a, b) => cardRankOrder.indexOf(a) - cardRankOrder.indexOf(b),
    );

    let isLowAceStraight = false;
    const ranksString = uniqueSortedRanks.join('');

    if (ranksString.includes('2345') && ranksString.includes('E') && !ranksString.includes('6')) {
      isLowAceStraight = true;
    }

    if (isLowAceStraight) return true;

    let isStraight = false;

    const areRanksConsecutive = (startIndex: number) => {
      const consecutiveRanksNeeded = 4;
      for (let offset = 0; offset < consecutiveRanksNeeded; offset++) {
        if (
          cardRankOrder.indexOf(uniqueSortedRanks[startIndex + offset]) + 1 !==
          cardRankOrder.indexOf(uniqueSortedRanks[startIndex + offset + 1])
        ) {
          return false;
        }
      }
      return true;
    };

    const straightLength = 5;
    for (let startIndex = 0; startIndex <= uniqueSortedRanks.length - straightLength; startIndex++) {
      if (areRanksConsecutive(startIndex)) {
        isStraight = true;
      }
    }
    if (isStraight) return true;

    return false;
  }

  public checkThreeOfAKind(): boolean {
    const rankCounts = new Map<string, number>();
    this.handCards.forEach((card) => {
      const rank = card[1];
      rankCounts.set(rank, (rankCounts.get(rank) || 0) + 1);
    });
    for (const count of rankCounts.values()) {
      if (count === 3) {
        return true;
      }
    }
    return false;
  }

  public checkTwoPair(): boolean {
    const rankCounts = new Map<string, number>();
    this.handCards.forEach((card) => {
      const rank = card[1];
      rankCounts.set(rank, (rankCounts.get(rank) || 0) + 1);
    });
    let pairs = 0;
    for (const count of rankCounts.values()) {
      if (count === 2) {
        pairs++;
      }
    }
    return pairs >= 2;
  }

  public checkPair(): boolean {
    const rankCounts = new Map<string, number>();
    this.handCards.forEach((card) => {
      const rank = card[1];
      rankCounts.set(rank, (rankCounts.get(rank) || 0) + 1);
    });
    for (const count of rankCounts.values()) {
      if (count === 2) {
        return true;
      }
    }
    return false;
  }
}
