import useDeviceSize from "@/hooks/useDeviceSize";
import { Country, getCountries } from "@/utils/countries";
import { GeoAspect, getRandomGeoAspect } from "@/utils/geo-aspects";
import { GeoProjection, getRandomGeoProjection } from "@/utils/geo-projections";
import {
  Level,
  getLossCondition,
  getSampleSize,
  getWinCondition,
} from "@/utils/rules";
import { FC, useCallback, useState, useEffect, useRef } from "react";
import { useTheme, useToast } from "@chakra-ui/react";
import UpperBar from "@/components/game/upper-bar";
import WorldMap from "@/components/world-map/world-map";
import useSound from "use-sound";
import { SOUNDS } from "@/utils/sounds";

interface GameProps {
  level: Level;
  onNextLevel: () => void;
  onFailLevel: () => void;
}

const Game: FC<GameProps> = ({ level, onNextLevel, onFailLevel }) => {
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);
  const [countries, _] = useState<Country[]>(getCountries(level));
  const [attempts, setAttempts] = useState(0);
  const [guessedCountries, setGuessedCountries] = useState<Country[]>([]);
  const [width, height] = useDeviceSize();
  const [geoProjection, setGeoProjection] =
    useState<GeoProjection>("geoMercator");
  const [geoAspect, setGeoAspect] = useState<GeoAspect>(
    "European - Africa centric"
  );
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [playGoodSound] = useSound(SOUNDS.good, {
    soundEnabled: isSoundEnabled,
  });
  const [playBadSound] = useSound(SOUNDS.bad, { soundEnabled: isSoundEnabled });
  const [playStartSound] = useSound(SOUNDS.start, {
    soundEnabled: isSoundEnabled,
  });
  const toast = useToast();
  const theme = useTheme();

  useEffect(() => {
    playStartSound();
  }, [playStartSound]);

  const generateNewGeoProjection = useCallback(() => {
    let newGeoProjection: GeoProjection;

    do {
      newGeoProjection = getRandomGeoProjection();
    } while (newGeoProjection === geoProjection);
    setGeoProjection(newGeoProjection);
  }, [geoProjection]);

  const generateNewGeoAspects = useCallback(() => {
    let newGeoAspects: GeoAspect;

    do {
      newGeoAspects = getRandomGeoAspect();
    } while (newGeoAspects === geoAspect);
    setGeoAspect(newGeoAspects);
  }, [geoAspect]);

  const handleCountryClick = useCallback(
    (name: string, code: string) => {
      setAttempts((prevAttempts) => prevAttempts + 1);

      if (code === countries[currentCountryIndex].code) {
        const country = countries[currentCountryIndex];

        playGoodSound();
        toast({
          title: "Good!",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "bottom-left",
        });
        setGuessedCountries((prevGuessedCountries) => [
          ...prevGuessedCountries,
          country,
        ]);
      } else {
        playBadSound();
        toast({
          title: "Wrong!",
          status: "error",
          description: `You clicked ${name}`,
          duration: 2000,
          isClosable: true,
          position: "bottom-left",
        });
      }

      // A new GeoProjection after each country is too much
      // generateNewGeoProjection();
      // generateNewGeoAspects();
      setCurrentCountryIndex((prevIndex) => prevIndex + 1);
    },
    [countries, currentCountryIndex, playBadSound, playGoodSound, toast]
  );

  useEffect(() => {
    if (currentCountryIndex >= countries.length) {
      const sampleSize = getSampleSize(level);
      setAttempts(sampleSize);
    }
  }, [currentCountryIndex, countries, level]);

  const winCondition = getWinCondition(level);
  const losingCondition = getLossCondition(level);
  const score = guessedCountries.length;
  const countryToGuess =
    countries.length > 0 ? countries[currentCountryIndex] : null;
  const isGameWon = score >= winCondition;
  const isGameLost = attempts >= losingCondition;

  useEffect(() => {
    if (isGameWon) {
      onNextLevel();
    }
    if (isGameLost) {
      onFailLevel();
    }
  }, [isGameWon, isGameLost, onNextLevel, onFailLevel]);

  return (
    <div
      className="relative"
      style={{ backgroundColor: theme.colors.third.main }}
    >
      <UpperBar
        tries={attempts}
        countryToGuess={countryToGuess}
        geoProjection={geoProjection}
        level={level}
        losingCondition={losingCondition}
        winCondition={winCondition}
        score={score}
        onSoundToggle={() => setIsSoundEnabled(!isSoundEnabled)}
        isSoundEnabled={isSoundEnabled}
      />
      <WorldMap
        onCountryClick={handleCountryClick}
        selectedCountry={countryToGuess}
        guessedCountries={guessedCountries}
        width={width}
        height={height}
        geoProjection={geoProjection}
        geoAspect={geoAspect}
      />
    </div>
  );
};

export default Game;
