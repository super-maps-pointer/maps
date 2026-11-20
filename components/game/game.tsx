import { useCallback, useEffect, useState } from "react";
import { useSound } from "use-sound";
import UpperBar from "@/components/game/upper-bar";
import { toaster } from "@/components/ui/toaster";
import WorldMap from "@/components/world-map/world-map";
import useDeviceSize from "@/hooks/useDeviceSize";
import { useTranslation } from "@/i18n/client";
import { colorVar } from "@/utils/css-var";
import type { GeoProjection } from "@/utils/geo-projections";
import type { Level } from "@/utils/rules";
import { type GuessOutcome, type RunAction, createRun } from "@/utils/run";
import { SOUNDS } from "@/utils/sounds";

interface GameProps {
  level: Level;
  onNextLevel: () => void;
  onFailLevel: () => void;
}

const TOAST_DURATION = 2000;

const run = createRun(Math.random);

export default function Game({ level, onNextLevel, onFailLevel }: GameProps) {
  const { t } = useTranslation();
  const [runState, setRunState] = useState(() => run.start(level));
  const [width, height] = useDeviceSize();
  const geoProjection: GeoProjection = "geoMercator";
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [playGoodSound] = useSound(SOUNDS.good, {
    soundEnabled: isSoundEnabled,
  });
  const [playBadSound] = useSound(SOUNDS.bad, { soundEnabled: isSoundEnabled });
  const [playStartSound] = useSound(SOUNDS.start, {
    soundEnabled: isSoundEnabled,
  });

  useEffect(() => {
    playStartSound();
  }, [playStartSound]);

  const announce = useCallback(
    (outcome: GuessOutcome) => {
      if (outcome.kind === "correct") {
        playGoodSound();
        toaster.create({
          title: t("game.good"),
          type: "success",
          duration: TOAST_DURATION,
          closable: true,
        });
        return;
      }
      playBadSound();
      toaster.create({
        title: t("game.wrong"),
        type: "error",
        description: t("game.youClicked", { name: outcome.clickedName }),
        duration: TOAST_DURATION,
        closable: true,
      });
    },
    [playBadSound, playGoodSound, t],
  );

  const dispatch = useCallback(
    (action: RunAction) => {
      const { state, outcome } = run.dispatch(runState, action);
      setRunState(state);
      if (outcome !== undefined) announce(outcome);
    },
    [announce, runState],
  );

  const handleCountryClick = useCallback(
    (name: string, code: string) => {
      dispatch({ type: "guess", code, name });
    },
    [dispatch],
  );

  const handleSkipClick = useCallback(() => {
    dispatch({ type: "skip" });
  }, [dispatch]);

  const { status } = runState.levelRun;

  useEffect(() => {
    if (status === "won") onNextLevel();
    else if (status === "lost") onFailLevel();
  }, [status, onNextLevel, onFailLevel]);

  return (
    <div className="relative" style={{ backgroundColor: colorVar("game.bg") }}>
      <UpperBar
        run={runState}
        geoProjection={geoProjection}
        onSoundToggle={() => {
          setIsSoundEnabled((enabled) => !enabled);
        }}
        isSoundEnabled={isSoundEnabled}
        onClickSkip={handleSkipClick}
      />
      <WorldMap
        onCountryClick={handleCountryClick}
        foundCountries={runState.levelRun.foundCountries}
        width={width}
        height={height}
        geoProjection={geoProjection}
      />
    </div>
  );
}
