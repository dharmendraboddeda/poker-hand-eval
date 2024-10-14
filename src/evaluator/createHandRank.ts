import { CardCategoryType } from "./types";

export function createHandRank(
  cardCategory: CardCategoryType,
  ...rankings: string[]
): number {
  return Number("0x" + [cardCategory, ...rankings].join("").padEnd(6, "0"));
}
