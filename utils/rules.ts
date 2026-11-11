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

const RULES: Record<Level, Rules> = {
  [Level.Easy]: {
    sampleSize: 20,
    goal: 5,
    tries: 20,
  },
  [Level.Normal]: {
    sampleSize: 30,
    goal: 10,
    tries: 25,
  },
  [Level.Hard]: {
    sampleSize: 40,
    goal: 15,
    tries: 30,
  },
  [Level.Extreme]: {
    sampleSize: 50,
    goal: 20,
    tries: 40,
  },
};

export const displayLevel = (level: Level) => {
  switch (level) {
    case Level.Easy:
      return "Level 1";
    case Level.Normal:
      return "Level 2 🏴‍☠️";
    case Level.Hard:
      return "Level 3 🤯";
    case Level.Extreme:
      return "Level 4 🫡";
  }
};

export const getLevelRules = (level: Level) => {
  switch (level) {
    case Level.Easy:
      return "You have 20 tries to find 5 countries to guess.";
    case Level.Normal:
      return "You have 25 tries to find 10 countries to guess.\nNew challenge, the map have a new representation!";
    case Level.Hard:
      return "You have 30 tries to find 15 countries to guess.";
    case Level.Extreme:
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

const LEVEL_ORDER = [Level.Easy, Level.Normal, Level.Hard, Level.Extreme] as const;

/** Next level, or the current one when the last level is reached. */
export function getNextLevel(currentLevel: Level): Level {
  return LEVEL_ORDER[LEVEL_ORDER.indexOf(currentLevel) + 1] ?? currentLevel;
}
