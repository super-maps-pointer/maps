export enum Level {
  One = 1,
  Two,
  Three,
}

export const displayLevel = (level: Level) => {
  switch (level) {
    case Level.One:
      return "Level 1";
    case Level.Two:
      return "Level 2 🏴‍☠️";
    case Level.Three:
      return "Level 3 🤯";
  }
};

export function getNextLevel(currentLevel: Level): Level {
  const levelValues = Object.values(Level);
  const currentIndex = levelValues.findIndex((level) => level === currentLevel);
  const nextIndex = currentIndex + 1;

  if (nextIndex >= levelValues.length) {
    // Special case: Reached the last level, finish the game
    return currentLevel; // or you can return any other value indicating the end of the game
  }

  return levelValues[nextIndex] as Level;
}
