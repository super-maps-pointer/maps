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

const LEVEL_EMOJI: Record<Level, string> = {
  [Level.Easy]: "",
  [Level.Normal]: "🏴‍☠️",
  [Level.Hard]: "🤯",
  [Level.Extreme]: "🫡",
};

export const getLevelEmoji = (level: Level) => LEVEL_EMOJI[level];

export const introducesNewProjection = (level: Level) => level === Level.Normal;

export const getWinCondition = (level: Level) => {
  return RULES[level].goal;
};

export const getLossCondition = (level: Level) => {
  return RULES[level].tries;
};

export const getSampleSize = (level: Level) => {
  return RULES[level].sampleSize;
};

export const LEVEL_ORDER = [
  Level.Easy,
  Level.Normal,
  Level.Hard,
  Level.Extreme,
] as const;
export const getLevelNumber = (level: Level) => LEVEL_ORDER.indexOf(level) + 1;

export function getNextLevel(currentLevel: Level): Level {
  return LEVEL_ORDER[LEVEL_ORDER.indexOf(currentLevel) + 1] ?? currentLevel;
}
