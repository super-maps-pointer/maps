import useDeviceSize from "@/hooks/useDeviceSize";
import { Country, getCountries } from "@/utils/countries";
import { GeoAspect, getRandomGeoAspect } from "@/utils/geo-aspects";
import { GeoProjection, getRandomGeoProjection } from "@/utils/geo-projections";
import { Level, getNextLevel } from "@/utils/rules";
import { FC, useCallback, useState, useEffect } from "react";
import { useTheme, useToast } from "@chakra-ui/react";
import Gauge from "@/components/game/gauge";
import UpperBar from "@/components/game/upper-bar";
import EndGameScreen from "@/components/menu/end-game-screen";
import WorldMap from "@/components/world-map/world-map";

export const SAMPLE_SIZE = 20;

interface GameProps {
  level: Level;
}

const Game: FC<GameProps> = ({ level }) => {
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);
  const [countries, setCountries] = useState<Country[]>(getCountries(level));
  const [attempts, setAttempts] = useState(0);
  const [guessedCountries, setGuessedCountries] = useState<Country[]>([]);
  const [width, height] = useDeviceSize();
  const [currentLevel, setCurrentLevel] = useState(level);
  const [geoProjection, setGeoProjection] =
    useState<GeoProjection>("geoMercator");
  const [geoAspect, setGeoAspect] = useState<GeoAspect>(
    "European - Africa centric"
  );
  const toast = useToast();
  const theme = useTheme();

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
        toast({
          title: "Wrong!",
          status: "error",
          description: `You clicked ${name}`,
          duration: 2000,
          isClosable: true,
          position: "bottom-left",
        });
      }

      generateNewGeoProjection();
      generateNewGeoAspects();
      setCurrentCountryIndex((prevIndex) => prevIndex + 1);
    },
    [
      countries,
      currentCountryIndex,
      generateNewGeoAspects,
      generateNewGeoProjection,
      toast,
    ]
  );

  useEffect(() => {
    if (currentCountryIndex >= countries.length) {
      setAttempts(SAMPLE_SIZE);
    }
  }, [currentCountryIndex, countries]);

  const winCondition = Math.round(SAMPLE_SIZE * 0.7);

  const handlePlayAgain = () => {
    setCurrentCountryIndex(0);
    setAttempts(0);
    setGuessedCountries([]);
    setCountries(getCountries(currentLevel));
  };

  const handleNextLevel = () => {
    const nextLevel = getNextLevel(currentLevel);
    setCurrentLevel(nextLevel);
    setCurrentCountryIndex(0);
    setAttempts(0);
    setGuessedCountries([]);
    setCountries(getCountries(nextLevel));
  };

  const score = guessedCountries.length;
  const countryToGuess =
    countries.length > 0 ? countries[currentCountryIndex] : null;
  const isGameWon = score >= winCondition;
  const isGameLost = attempts >= SAMPLE_SIZE;
  const isGameOver = isGameWon || isGameLost;

  return (
    <div
      className="relative "
      style={{ backgroundColor: theme.colors.third.main }}
    >
      <UpperBar
        tries={attempts}
        countryToGuess={countryToGuess}
        geoProjection={geoProjection}
        level={currentLevel}
      />
      <Gauge score={score} winCondition={winCondition} />
      {isGameOver && (
        <div className="fixed inset-0 flex items-center justify-center">
          <EndGameScreen
            isGameWon={isGameWon}
            handleNextLevel={handleNextLevel}
            handlePlayAgain={handlePlayAgain}
          />
        </div>
      )}
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