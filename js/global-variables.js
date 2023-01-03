let relaxMode = false;
let movements = 0;
let chronometer;
let cardGroup = [
  ['🦄', '🤖'],
  ['🍔', '🎁'],
  ['🎃', '🚀', '🌙', '💀'],
  ['🍔', '💩', '🦄', '😼'],
  ['🎁', '🚀', '😽', '🤖'],
];
let currentLevel = 0;
let levels = [
  {
    cards: cardGroup[0],
    maxMovements: 3,
  },
  {
    cards: cardGroup[0].concat(cardGroup[1]),
    maxMovements: 8,
  },
  {
    cards: cardGroup[0].concat(cardGroup[1], cardGroup[2]),
    maxMovements: 12,
  },
  {
    cards: cardGroup[0].concat(cardGroup[1], cardGroup[2], cardGroup[3]),
    maxMovements: 25,
  },
  {
    cards: cardGroup[0].concat(cardGroup[1], cardGroup[2], cardGroup[3], cardGroup[4]),
    maxMovements: 60,
  },
];
