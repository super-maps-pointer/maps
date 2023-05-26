export enum Level {
  Easy = "easy",
  Normal = "normal",
  Hard = "hard",
}

export const displayLevel = (level: Level) => {
  switch (level) {
    case "easy":
      return "Level 1";
    case "normal":
      return "Level 2 🏴‍☠️";
    case "hard":
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
