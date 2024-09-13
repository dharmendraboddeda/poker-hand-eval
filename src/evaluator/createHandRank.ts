import { CardCategory } from './types';

export function createHandRank(cardCategory: CardCategory, ...rankings: string[]): number {
  return Number('0x' + [cardCategory, ...rankings].join('').padEnd(6, '0'));
}
