import { useCallback, useEffect, useState } from "react";
import useSound from "use-sound";
import UpperBar from "@/components/game/upper-bar";
import { toaster } from "@/components/ui/toaster";
import WorldMap from "@/components/world-map/world-map";
import useDeviceSize from "@/hooks/useDeviceSize";
import { type Country, getCountries } from "@/utils/countries";
import { colorVar } from "@/utils/css-var";
import type { GeoAspect } from "@/utils/geo-aspects";
import type { GeoProjection } from "@/utils/geo-projections";
import { type Level, getLossCondition, getWinCondition } from "@/utils/rules";
import { SOUNDS } from "@/utils/sounds";

interface GameProps {
  level: Level;
  onNextLevel: () => void;
  onFailLevel: () => void;
}

const TOAST_DURATION = 2000;

export default function Game({ level, onNextLevel, onFailLevel }: GameProps) {
  const [countries] = useState<Country[]>(() => getCountries(level));
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [guessedCountries, setGuessedCountries] = useState<Country[]>([]);
  const [width, height] = useDeviceSize();
  // Projection and aspect are fixed for now: changing them after each country was too much
  const geoProjection: GeoProjection = "geoMercator";
  const geoAspect: GeoAspect = "European - Africa centric";
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [playGoodSound] = useSound(SOUNDS.good, { soundEnabled: isSoundEnabled });
  const [playBadSound] = useSound(SOUNDS.bad, { soundEnabled: isSoundEnabled });
  const [playStartSound] = useSound(SOUNDS.start, { soundEnabled: isSoundEnabled });

  useEffect(() => {
    playStartSound();
  }, [playStartSound]);

  const countryToGuess = countries[currentCountryIndex];

  const setNextCountry = useCallback(
    (guessed: Country[]) => {
      setCurrentCountryIndex((prevIndex) => {
        // Walk forward (wrapping around) to the next country not guessed yet
        for (let step = 1; step <= countries.length; step++) {
          const index = (prevIndex + step) % countries.length;
          const country = countries[index];
          if (country !== undefined && !guessed.includes(country)) return index;
        }
        return prevIndex;
      });
    },
    [countries],
  );

  const handleCountryClick = useCallback(
    (name: string, code: string) => {
      setAttempts((prevAttempts) => prevAttempts + 1);
      if (countryToGuess === undefined) return;

      if (code === countryToGuess.code) {
        playGoodSound();
        toaster.create({ title: "Good!", type: "success", duration: TOAST_DURATION, closable: true });
        const nextGuessed = [...guessedCountries, countryToGuess];
        setGuessedCountries(nextGuessed);
        setNextCountry(nextGuessed);
      } else {
        playBadSound();
        toaster.create({
          title: "Wrong!",
          type: "error",
          description: `You clicked ${name}`,
          duration: TOAST_DURATION,
          closable: true,
        });
      }
    },
    [countryToGuess, guessedCountries, playBadSound, playGoodSound, setNextCountry],
  );

  const handleSkipClick = useCallback(() => {
    setNextCountry(guessedCountries);
  }, [guessedCountries, setNextCountry]);

  const winCondition = getWinCondition(level);
  const losingCondition = getLossCondition(level);
  const score = guessedCountries.length;
  const isGameWon = score >= winCondition;
  const isGameLost = attempts >= losingCondition;

  useEffect(() => {
    if (isGameWon) onNextLevel();
    else if (isGameLost) onFailLevel();
  }, [isGameWon, isGameLost, onNextLevel, onFailLevel]);

  return (
    <div className="relative" style={{ backgroundColor: colorVar("game.bg") }}>
      <UpperBar
        tries={attempts}
        countryToGuess={countryToGuess}
        geoProjection={geoProjection}
        level={level}
        losingCondition={losingCondition}
        winCondition={winCondition}
        score={score}
        onSoundToggle={() => {
          setIsSoundEnabled((enabled) => !enabled);
        }}
        isSoundEnabled={isSoundEnabled}
        onClickSkip={handleSkipClick}
      />
      <WorldMap
        onCountryClick={handleCountryClick}
        guessedCountries={guessedCountries}
        width={width}
        height={height}
        geoProjection={geoProjection}
        geoAspect={geoAspect}
      />
    </div>
  );
}
