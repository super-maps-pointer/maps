import EndGameScreen from "@/app/end-game-screen";
import Gauge from "@/app/gauge";
import UpperBar from "@/app/upper-bar";
import WorldMap from "@/app/world-map";
import useDeviceSize from "@/hooks/useDeviceSize";
import { COLORS } from "@/utils/colors";
import { Country, getCountries } from "@/utils/countries";
import { GeoAspect, getRandomGeoAspect } from "@/utils/geo-aspects";
import { GeoProjection, getRandomGeoProjection } from "@/utils/geo-projections";
import { IMAGES } from "@/utils/images";
import { Level, getNextLevel } from "@/utils/rules";
import { FC, useCallback, useState, useEffect } from "react";
import { toast } from "react-toastify";

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

        toast.success("Good!");
        setGuessedCountries((prevGuessedCountries) => [
          ...prevGuessedCountries,
          country,
        ]);
      } else {
        toast.error(`Wrong! You clicked ${name}`);
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
    <div className="relative " style={{ backgroundColor: COLORS.background }}>
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
