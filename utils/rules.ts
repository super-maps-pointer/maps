export enum Level {
  Easy = "easy",
  Normal = "normal",
  Hard = "hard",
  Extreme = "extreme",
}

export const LEVEL_ORDER = [
  Level.Easy,
  Level.Normal,
  Level.Hard,
  Level.Extreme,
] as const;

interface LevelDefinition {
  goal: number;
  tries: number;
  sampleSize: number;
  emoji: string;
  introducesNewProjection: boolean;
}

export interface LevelRules extends LevelDefinition {
  level: Level;
  number: number;
  nextLevel: Level | undefined;
}

const LEVEL_DEFINITIONS: Record<Level, LevelDefinition> = {
  [Level.Easy]: {
    goal: 5,
    tries: 20,
    sampleSize: 20,
    emoji: "",
    introducesNewProjection: false,
  },
  [Level.Normal]: {
    goal: 10,
    tries: 25,
    sampleSize: 30,
    emoji: "🏴‍☠️",
    introducesNewProjection: true,
  },
  [Level.Hard]: {
    goal: 15,
    tries: 30,
    sampleSize: 40,
    emoji: "🤯",
    introducesNewProjection: false,
  },
  [Level.Extreme]: {
    goal: 20,
    tries: 40,
    sampleSize: 50,
    emoji: "🫡",
    introducesNewProjection: false,
  },
};

export const getLevelRules = (level: Level): LevelRules => {
  const position = LEVEL_ORDER.indexOf(level);
  return {
    ...LEVEL_DEFINITIONS[level],
    level,
    number: position + 1,
    nextLevel: LEVEL_ORDER[position + 1],
  };
};
