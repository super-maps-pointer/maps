export enum Level {
  Easy = "easy",
  Normal = "normal",
  Hard = "hard",
  Extreme = "extreme",
}

interface Rules {
  sampleSize: number;
  goal: number;
  tries: number;
}

const RULES: { [key: string]: Rules } = {
  easy: {
    sampleSize: 20,
    goal: 5,
    tries: 20,
  },
  normal: {
    sampleSize: 30,
    goal: 10,
    tries: 25,
  },
  hard: {
    sampleSize: 40,
    goal: 15,
    tries: 30,
  },
  extreme: {
    sampleSize: 50,
    goal: 20,
    tries: 40,
  },
};

export const displayLevel = (level: Level) => {
  switch (level) {
    case "easy":
      return "Level 1";
    case "normal":
      return "Level 2 🏴‍☠️";
    case "hard":
      return "Level 3 🤯";
    case "extreme":
      return "Level 4 🫡";
  }
};

export const getLevelRules = (level: Level) => {
  switch (level) {
    case "easy":
      return "You have 20 tries to find 5 countries to guess.";
    case "normal":
      return "You have 25 tries to find 10 countries to guess.\nNew challenge, the map have a new representation!";
    case "hard":
      return "You have 30 tries to find 15 countries to guess.";
    case "extreme":
      return "You have 40 tries to find 20 countries to guess.";
  }
};

export const getWinCondition = (level: Level) => {
  return RULES[level].goal;
};

export const getLossCondition = (level: Level) => {
  return RULES[level].tries;
};

export const getSampleSize = (level: Level) => {
  return RULES[level].sampleSize;
};

export function getNextLevel(currentLevel: Level): Level {
  const levelValues = Object.values(Level);
  const currentIndex = levelValues.findIndex((level) => level === currentLevel);
  const nextIndex = currentIndex + 1;

  if (nextIndex >= levelValues.length) {
    // Special case: Reached the last level, finish the game
    return currentLevel;
  }

  return levelValues[nextIndex] as Level;
}
