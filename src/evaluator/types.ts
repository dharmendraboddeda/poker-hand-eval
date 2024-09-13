export enum PlayingCard {
  C2 = 'C2',
  C3 = 'C3',
  C4 = 'C4',
  C5 = 'C5',
  C6 = 'C6',
  C7 = 'C7',
  C8 = 'C8',
  C9 = 'C9',
  CA = 'CA',
  CJ = 'CJ',
  CK = 'CK',
  CQ = 'CQ',
  CT = 'CT',
  D2 = 'D2',
  D3 = 'D3',
  D4 = 'D4',
  D5 = 'D5',
  D6 = 'D6',
  D7 = 'D7',
  D8 = 'D8',
  D9 = 'D9',
  DA = 'DA',
  DJ = 'DJ',
  DK = 'DK',
  DQ = 'DQ',
  DT = 'DT',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
  H7 = 'H7',
  H8 = 'H8',
  H9 = 'H9',
  HA = 'HA',
  HJ = 'HJ',
  HK = 'HK',
  HQ = 'HQ',
  HT = 'HT',
  S2 = 'S2',
  S3 = 'S3',
  S4 = 'S4',
  S5 = 'S5',
  S6 = 'S6',
  S7 = 'S7',
  S8 = 'S8',
  S9 = 'S9',
  SA = 'SA',
  SJ = 'SJ',
  SK = 'SK',
  SQ = 'SQ',
  ST = 'ST',
}

export type CommunityCards = [PlayingCard, PlayingCard, PlayingCard, PlayingCard, PlayingCard];

export type PokerHand = [PlayingCard, PlayingCard, PlayingCard, PlayingCard, PlayingCard, PlayingCard, PlayingCard];

export type PlayerHand = [PlayingCard, PlayingCard];

export interface Evaluation {
  result: Result;
}

export type ResultCardCategory =
  | 'StraightFlush'
  | 'FourOfAKind'
  | 'FullHouse'
  | 'Flush'
  | 'Straight'
  | 'ThreeOfAKind'
  | 'TwoPair'
  | 'OnePair'
  | 'HighCard';

export interface Result {
  category: ResultCardCategory;
  rank: number;
}

export enum CardCategory {
  HighCard = 1,
  OnePair = 2,
  TwoPair = 3,
  ThreeOfAKind = 4,
  Straight = 5,
  Flush = 6,
  FullHouse = 7,
  FourOfAKind = 8,
  StraightFlush = 9,
}

export enum EvaluationPlayingCard {
  C2 = 'C2',
  C3 = 'C3',
  C4 = 'C4',
  C5 = 'C5',
  C6 = 'C6',
  C7 = 'C7',
  C8 = 'C8',
  C9 = 'C9',
  CA = 'CA',
  CB = 'CB',
  CC = 'CC',
  CD = 'CD',
  CE = 'CE',
  D2 = 'D2',
  D3 = 'D3',
  D4 = 'D4',
  D5 = 'D5',
  D6 = 'D6',
  D7 = 'D7',
  D8 = 'D8',
  D9 = 'D9',
  DA = 'DA',
  DB = 'DB',
  DC = 'DC',
  DD = 'DD',
  DE = 'DE',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
  H7 = 'H7',
  H8 = 'H8',
  H9 = 'H9',
  HA = 'HA',
  HB = 'HB',
  HC = 'HC',
  HD = 'HD',
  HE = 'HE',
  S2 = 'S2',
  S3 = 'S3',
  S4 = 'S4',
  S5 = 'S5',
  S6 = 'S6',
  S7 = 'S7',
  S8 = 'S8',
  S9 = 'S9',
  SA = 'SA',
  SB = 'SB',
  SC = 'SC',
  SD = 'SD',
  SE = 'SE',
}
