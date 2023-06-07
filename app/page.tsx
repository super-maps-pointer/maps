"use client";

import { useCallback, useState } from "react";
import Game from "@/components/game/game";
import Head from "next/head";
import { Level, getNextLevel } from "@/utils/rules";
import IntroductionScreen from "@/components/menu/introduction-screen";
import NextLevelScreen from "@/components/menu/next-level-screen";
import EndGameScreen from "@/components/menu/end-game-screen";
import RetryLevelScreen from "@/components/menu/retry-level-screen";

function Home() {
  const [showIntroduction, setShowIntroduction] = useState(true);
  const [showNextLevel, setShowNextLevel] = useState(false);
  const [showEndGame, setShowEndGame] = useState(false);
  const [showRetryLevel, setShowRetryLevel] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [level, setLevel] = useState(Level.Easy);

  const handlePlay = useCallback(() => {
    setShowIntroduction(false);
    setShowNextLevel(false);
    setShowRetryLevel(false);
    setShowEndGame(false);
    setShowGame(true);
  }, []);

  const handleNextLevel = useCallback(() => {
    setShowGame(false);
    if (level === Level.Extreme) {
      setShowEndGame(true);
    } else {
      const nextLevel = getNextLevel(level);
      setLevel(nextLevel);
      setShowNextLevel(true);
    }
  }, [level]);

  const handleFailLevel = useCallback(() => {
    setShowGame(false);
    setShowRetryLevel(true);
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
      {showIntroduction && <IntroductionScreen onPlay={handlePlay} />}
      {showNextLevel && <NextLevelScreen level={level} onPlay={handlePlay} />}
      {showRetryLevel && <RetryLevelScreen onPlay={handlePlay} />}
      {showEndGame && <EndGameScreen />}
      {showGame && (
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
