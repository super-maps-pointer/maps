"use client";

import { useCallback, useState } from "react";
import Game from "@/components/game/game";
import Head from "next/head";
import { Level, getNextLevel } from "@/utils/rules";
import IntroductionScreen from "@/components/menu/introduction-screen";
import NextLevelScreen from "@/components/menu/next-level-screen";
import EndGameScreen from "@/components/menu/end-game-screen";
import RetryLevelScreen from "@/components/menu/retry-level-screen";

type ActiveState =
  | "introduction"
  | "nextLevel"
  | "retryLevel"
  | "endGame"
  | "game";

function Home() {
  const [activeState, setActiveState] = useState<ActiveState>("introduction");
  const [level, setLevel] = useState<Level>(Level.Easy);

  const handlePlay = useCallback(() => {
    setActiveState("game");
  }, []);

  const handleNextLevel = useCallback(() => {
    setActiveState(level === Level.Extreme ? "endGame" : "nextLevel");
    if (level !== Level.Extreme) {
      const nextLevel = getNextLevel(level);
      setLevel(nextLevel);
    }
  }, [level]);

  const handleFailLevel = useCallback(() => {
    setActiveState("retryLevel");
  }, []);

  return (
    <>
      <Head>
        <title>Super Maps Pointer</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {activeState === "introduction" && (
        <IntroductionScreen onPlay={handlePlay} />
      )}
      {activeState === "nextLevel" && (
        <NextLevelScreen level={level} onPlay={handlePlay} />
      )}
      {activeState === "retryLevel" && <RetryLevelScreen onPlay={handlePlay} />}
      {activeState === "endGame" && <EndGameScreen />}
      {activeState === "game" && (
        <Game
          level={level}
          onNextLevel={handleNextLevel}
          onFailLevel={handleFailLevel}
        />
      )}
    </>
  );
}

export default Home;
