"use client";

import { useCallback, useState } from "react";
import Game from "@/components/game/game";
import EndGameScreen from "@/components/menu/end-game-screen";
import IntroductionScreen from "@/components/menu/introduction-screen";
import NextLevelScreen from "@/components/menu/next-level-screen";
import RetryLevelScreen from "@/components/menu/retry-level-screen";
import { type RunAction, createRun } from "@/utils/run";

const run = createRun(Math.random);

export default function Home() {
  const [runState, setRunState] = useState(run.start);

  const dispatch = useCallback(
    (action: RunAction) => {
      const { state, outcome } = run.dispatch(runState, action);
      setRunState(state);
      return outcome;
    },
    [runState],
  );

  const handlePlay = useCallback(() => {
    dispatch({ type: "play" });
  }, [dispatch]);

  const handleRetry = useCallback(() => {
    dispatch({ type: "retry" });
  }, [dispatch]);

  switch (runState.screen) {
    case "introduction":
      return <IntroductionScreen onPlay={handlePlay} />;
    case "levelWon":
      return (
        <NextLevelScreen
          level={runState.level}
          projection={runState.projection}
          onPlay={handlePlay}
        />
      );
    case "retry":
      return <RetryLevelScreen onPlay={handleRetry} />;
    case "finished":
      return <EndGameScreen />;
    case "playing":
      return <Game run={runState} dispatch={dispatch} />;
  }
}
