# Poker Hand Evaluation

![Poker Hand in Landscape View](assets/poker-hand.png)

This project is a Poker Hand Evaluation tool that helps you evaluate and compare poker hands in Texas Hold'em games. It uses the `PokerHandEval` class from the `poker-hand-eval` package to evaluate various hand types such as Full Houses, Straights, Flushes, and more.

## Installation

To get started, install the `poker-hand-eval` package:

```bash
npm install poker-hand-eval
```

## Getting Started

To use the PokerHandEval tool for evaluating poker hands, follow these steps:

1. **Instantiate the PokerHandEval Class**

   - Begin by creating an instance of the `PokerHandEval` class. This instance will be used to perform the hand evaluations.

2. **Prepare Player Hands and Community Cards**

   - Player hands should be defined as an array containing exactly two elements, each representing a `PlayingCard` value.
   - The community cards, which are shared among all players, should be defined as an array containing five `PlayingCard` values.

3. **Evaluate the Hands**
   - To evaluate a player's hand, use the `evaluate` method of the `PokerHandEval` instance. Pass the player's hand and the community cards as arguments to this method.
   - The `evaluate` method returns an `Evaluation` object, which includes details that can be used to determine the hand's rank and category.

## Example Code Snippet

The following example demonstrates how to compare the hands of four players, including one with a Full House and another with a Straight:

```ts
import { PokerHandEval } from "poker-hand-eval";
import type {
  PlayingCardType,
  PlayerHandType,
  CommunityCardsType,
  EvaluationType,
} from "poker-hand-eval";

// Create an instance of the PokerHandEval class
const evaluator = new PokerHandEval();

// Define the hands of four players
const playerOneHand = [
  PlayingCardType.HT,
  PlayingCardType.H9,
] as PlayerHandType;
const playerTwoHand = [
  PlayingCardType.D8,
  PlayingCardType.H6,
] as PlayerHandType;
const playerThreeHand = [
  PlayingCardType.S9,
  PlayingCardType.C9,
] as PlayerHandType;
const playerFourHand = [
  PlayingCardType.DA,
  PlayingCardType.HA,
] as PlayerHandType;

// Define the community cards
const communityCards: CommunityCardsType = [
  PlayingCardType.D9,
  PlayingCardType.H9,
  PlayingCardType.CT,
  PlayingCardType.D7,
  PlayingCardType.C6,
];

// Evaluate each player's hand against the community cards
const playerOneResult: EvaluationType = evaluator.evaluate(
  playerOneHand,
  communityCards
);
const playerTwoResult: EvaluationType = evaluator.evaluate(
  playerTwoHand,
  communityCards
);
const playerThreeResult: EvaluationType = evaluator.evaluate(
  playerThreeHand,
  communityCards
);
const playerFourResult: EvaluationType = evaluator.evaluate(
  playerFourHand,
  communityCards
);

// Compare the hand results
console.log("Player One Rank: ", playerOneResult.result.rank);
console.log("Player Two Rank: ", playerTwoResult.result.rank);
console.log("Player Three Rank: ", playerThreeResult.result.rank);
console.log("Player Four Rank: ", playerFourResult.result.rank);
```

## Code Overview

### Initialization

An instance of the PokerHandEval class is instantiated.

### Hand Configuration

The hands of the players are specified using two PlayingCard values each (for example, HT signifies the 10 of hearts).

### Community Cards Setup

A set of five PlayingCard values are designated as the community cards.

### Hand Evaluation

The evaluate function is invoked for each player's hand along with the community cards to assess the hand's rank and category.

### Rank Comparison

The ranks of the evaluated hands are compared to determine the strongest hand.

## Supported Poker Hands

The PokerHandEval class is capable of assessing all primary poker hand categories, such as:

- High Card
- One Pair
- Two Pair
- Three of a Kind
- Straight
- Flush
- Full House
- Four of a Kind
- Straight Flush
- Royal Flush

## API Reference

### Methods

- **evaluate(playerHand: PlayerHand, communityCards: CommunityCards): Evaluation**
  - This method evaluates a player's hand together with the community cards.
  - It returns an Evaluation object, which contains details about the hand's rank and category.

### Types

- **PlayerHand**: Represents the player's hand with two PlayingCard values.
- **CommunityCards**: Consists of five PlayingCard values, representing the community cards.
- **Evaluation**: An object detailing the outcome of the hand evaluation, including:
  - **result.rank**: Indicates the hand's rank, with a lower number signifying a stronger hand.
  - **result.category**: Specifies the category of the hand (e.g., Full House, Straight).

## Conclusion

The poker-hand-eval package provides a simple and effective way to evaluate poker hands in Texas Hold'em games. With its easy-to-use API, you can determine the strength of each player's hand and compare hands to identify the winner.

**Note:** This package is intended for individuals already familiar with Texas Hold'em rules and the ranking of poker hands. A solid understanding of poker hand hierarchies is crucial for the effective utilization of this evaluation tool.

This `README.md` document offers a thorough overview of the project, encompassing setup procedures, illustrative examples, and in-depth explanations of the hand types and methods supported.
