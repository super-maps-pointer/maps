import { useCallback, useEffect, useState } from "react";
import { useSound } from "use-sound";
import UpperBar from "@/components/game/upper-bar";
import { toaster } from "@/components/ui/toaster";
import WorldMap from "@/components/world-map/world-map";
import useDeviceSize from "@/hooks/useDeviceSize";
import { useTranslation } from "@/i18n/client";
import { colorVar } from "@/utils/css-var";
import type { GuessOutcome, PlayingRunState, RunAction } from "@/utils/run";
import { SOUNDS } from "@/utils/sounds";

interface GameProps {
  run: PlayingRunState;
  dispatch: (action: RunAction) => GuessOutcome | undefined;
}

const TOAST_DURATION = 2000;

export default function Game({ run, dispatch }: GameProps) {
  const { t } = useTranslation();
  const [width, height] = useDeviceSize();
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

  const handleCountryClick = useCallback(
    (name: string, code: string) => {
      const outcome = dispatch({ type: "guess", code, name });
      if (outcome !== undefined) announce(outcome);
    },
    [announce, dispatch],
  );

  const handleSkipClick = useCallback(() => {
    dispatch({ type: "skip" });
  }, [dispatch]);

  return (
    <div className="relative" style={{ backgroundColor: colorVar("game.bg") }}>
      <UpperBar
        run={run}
        onSoundToggle={() => {
          setIsSoundEnabled((enabled) => !enabled);
        }}
        isSoundEnabled={isSoundEnabled}
        onClickSkip={handleSkipClick}
      />
      <WorldMap
        onCountryClick={handleCountryClick}
        foundCountries={run.levelRun.foundCountries}
        width={width}
        height={height}
        geoProjection={run.projection}
      />
    </div>
  );
}
