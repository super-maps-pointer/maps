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
    goal: 10,
    tries: 20,
  },
  normal: {
    sampleSize: 30,
    goal: 15,
    tries: 25,
  },
  hard: {
    sampleSize: 40,
    goal: 20,
    tries: 30,
  },
  extreme: {
    sampleSize: 50,
    goal: 30,
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
