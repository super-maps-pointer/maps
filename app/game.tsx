import EndGameScreen from "@/app/end-game-screen";
import Gauge from "@/app/gauge";
import UpperBar from "@/app/upper-bar";
import WorldMap from "@/app/world-map";
import useDeviceSize from "@/hooks/useDeviceSize";
import { Country, getCountries } from "@/utils/countries";
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

      setCurrentCountryIndex((prevIndex) => prevIndex + 1);
    },
    [countries, currentCountryIndex]
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
  const countryToGuess = countries[currentCountryIndex];
  const isGameWon = score >= winCondition;
  const isGameLost = attempts >= SAMPLE_SIZE;
  const isGameOver = isGameWon || isGameLost;

  return (
    <div className="relative">
      <UpperBar
        tries={attempts}
        countryToGuess={countryToGuess}
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
      />
    </div>
  );
};

export default Game;
