import { ResultType, ResultCardCategoryType, CardCategoryType } from "./types";
import { createHandRank } from "./createHandRank";

export function getResult(category: number, ...rest: number[]): ResultType {
  return {
    category: getCategory(category) as ResultCardCategoryType,
    rank: getRank(category, ...rest),
  };
}

function getCategory(category: number): ResultCardCategoryType | undefined {
  for (const [key, value] of Object.entries(CardCategoryType)) {
    if (value === category) {
      return key as ResultCardCategoryType;
    }
  }
  return undefined;
}

function getRank(category: number, ...rest: any[]): number {
  const rank = createHandRank(category, ...rest);
  return rank;
}
