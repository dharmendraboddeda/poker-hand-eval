import { EvaluationPlayingCard } from './types';

type KickersArgs = {
  highestRanksFromHand?: string[];
  numberOfKickers: number;
};

export class GetRanks {
  private handCards: EvaluationPlayingCard[];

  constructor(handCards: EvaluationPlayingCard[]) {
    this.handCards = handCards;
  }

  public getKickers({ highestRanksFromHand, numberOfKickers }: KickersArgs): [...string[]] {
    const handRanks = this.handCards
      .map((card) => card[1])
      .sort((a, b) => b.localeCompare(a))
      .slice(0, 5);

    const remainingRanks = handRanks.filter((rank) => !highestRanksFromHand?.includes(rank));

    const kickers = remainingRanks.slice(0, numberOfKickers);
    return kickers;
  }

  public getHighestRankOfFourOfAKind(): string {
    const rankCounts = new Map<string, number>();
    this.handCards.forEach((card) => {
      const rank = card[1];
      rankCounts.set(rank, (rankCounts.get(rank) || 0) + 1);
    });
    for (const rank of rankCounts) {
      const rankCountValue = rank[1];
      const fourOfAKindRank = rank[0];
      if (rankCountValue === 4) {
        return fourOfAKindRank;
      }
    }
    return '';
  }

  public getHighestRanksOfFlush(): [...string[]] {
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

    const validFlushCards = Array.from(flushCards.values()).find((cards) => cards.length >= 5);
    if (validFlushCards) {
      const sortedCards = validFlushCards
        .map((card) => card[1])
        .sort((a, b) => b.localeCompare(a))
        .slice(0, 5);
      return sortedCards;
    }
    return [];
  }

  public gethighestRankOfStraight(): string {
    const cardRankOrder = '23456789ABCDE';
    const ranks = this.handCards.map((card) => card[1]);
    const uniqueSortedRanks = Array.from(new Set(ranks)).sort(
      (a, b) => cardRankOrder.indexOf(a) - cardRankOrder.indexOf(b),
    );

    let isLowAceStraight = false;
    const ranksString = uniqueSortedRanks.join('');

    if (ranksString.includes('2345') && ranksString.includes('E') && !ranksString.includes('6')) {
      isLowAceStraight = true;
    }

    if (isLowAceStraight) return '5';

    let isStraight = false;

    let straightHighestRank = '';

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
        const potentialHighestRank = uniqueSortedRanks.slice(startIndex, startIndex + straightLength).pop();
        if (potentialHighestRank !== undefined) {
          straightHighestRank = potentialHighestRank;
        }
        isStraight = true;
      }
    }
    if (isStraight) return straightHighestRank;

    return '';
  }

  public getHighestRankOfThreeOfAKind(): string {
    const rankCounts = new Map<string, number>();
    this.handCards.forEach((card) => {
      const rank = card[1];
      rankCounts.set(rank, (rankCounts.get(rank) || 0) + 1);
    });
    let threeOfAKindTrips = 0;
    for (const count of rankCounts.values()) {
      if (count === 3) {
        threeOfAKindTrips++;
      }
    }

    const threeOfAKindRanks = [];
    if (threeOfAKindTrips >= 1) {
      for (const rank of rankCounts) {
        const rankCountValue = rank[1];
        const threeOfAKindRank = rank[0];
        if (rankCountValue === 3) {
          threeOfAKindRanks.push(threeOfAKindRank);
        }
      }
    }
    const sortedRanks = threeOfAKindRanks.sort((a, b) => b.localeCompare(a));
    return sortedRanks[0];
  }

  public getHighestRanksOfTwoPair(): [string, string] {
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
    const highestRanks = [];
    if (pairs >= 2) {
      for (const rank of rankCounts) {
        const rankCountValue = rank[1];
        const pairRank = rank[0];
        if (rankCountValue === 2) {
          highestRanks.push(pairRank);
        }
      }
    }
    const sortedRanks = highestRanks.sort((a, b) => b.localeCompare(a));
    return [sortedRanks[0], sortedRanks[1]];
  }

  public getHighestRankOfPair(): string {
    const rankCounts = new Map<string, number>();

    this.handCards.forEach((card) => {
      const rank = card[1];
      rankCounts.set(rank, (rankCounts.get(rank) || 0) + 1);
    });

    for (const rank of rankCounts) {
      if (rank[1] === 2) {
        return rank[0];
      }
    }

    return '';
  }
}
