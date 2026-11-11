"use client";

import { type ReactNode, useCallback, useState } from "react";
import Game from "@/components/game/game";
import EndGameScreen from "@/components/menu/end-game-screen";
import IntroductionScreen from "@/components/menu/introduction-screen";
import NextLevelScreen from "@/components/menu/next-level-screen";
import RetryLevelScreen from "@/components/menu/retry-level-screen";
import { Level, getNextLevel } from "@/utils/rules";

type ActiveState =
  "introduction" | "nextLevel" | "retryLevel" | "endGame" | "game";

export default function Home() {
  const [activeState, setActiveState] = useState<ActiveState>("introduction");
  const [level, setLevel] = useState<Level>(Level.Easy);

  const handlePlay = useCallback(() => {
    setActiveState("game");
  }, []);

  const handleNextLevel = useCallback(() => {
    if (level === Level.Extreme) {
      setActiveState("endGame");
      return;
    }
    setActiveState("nextLevel");
    setLevel(getNextLevel(level));
  }, [level]);

  const handleFailLevel = useCallback(() => {
    setActiveState("retryLevel");
  }, []);

  const screens: Record<ActiveState, ReactNode> = {
    introduction: <IntroductionScreen onPlay={handlePlay} />,
    nextLevel: <NextLevelScreen level={level} onPlay={handlePlay} />,
    retryLevel: <RetryLevelScreen onPlay={handlePlay} />,
    endGame: <EndGameScreen />,
    game: (
      <Game
        level={level}
        onNextLevel={handleNextLevel}
        onFailLevel={handleFailLevel}
      />
    ),
  };

  return screens[activeState];
}
