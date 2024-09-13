import { Result, ResultCardCategory, CardCategory } from './types';
import { createHandRank } from './createHandRank';

export function getResult(category: number, ...rest: number[]): Result {
  return {
    category: getCategory(category) as ResultCardCategory,
    rank: getRank(category, ...rest),
  };
}

function getCategory(category: number): ResultCardCategory | undefined {
  for (const [key, value] of Object.entries(CardCategory)) {
    if (value === category) {
      return key as ResultCardCategory;
    }
  }
  return undefined;
}

function getRank(category: number, ...rest: any[]): number {
  const rank = createHandRank(category, ...rest);
  return rank;
}
