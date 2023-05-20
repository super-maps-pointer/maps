import Gauge from "@/app/gauge";
import UpperBar from "@/app/upper-bar";
import WorldMap from "@/app/world-map";
import useDeviceSize from "@/hooks/useDeviceSize";
import { Level, getCountries } from "@/utils/countries";
import { FC, useCallback, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const SAMPLE_SIZE = 20;

interface GameProps {
  level: Level;
}

const Game: FC<GameProps> = ({ level }) => {
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);
  const [countries, setCountries] = useState<string[]>(getCountries(level));
  const [attempts, setAttempts] = useState(0);
  const [guessedCountries, setGuessedCountries] = useState<string[]>([]);
  const [width, height] = useDeviceSize();

  const handleCountryClick = useCallback(
    (country: string) => {
      setAttempts((prevAttempts) => prevAttempts + 1);

      if (country === countries[currentCountryIndex]) {
        toast.success("Good!");
        setGuessedCountries((prevGuessedCountries) => [
          ...prevGuessedCountries,
          country,
        ]);
      } else {
        toast.error(`Wrong! You clicked ${country}`);
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
    setCountries(getCountries(level));
  };

  const score = guessedCountries.length;
  const isGameWon = score >= winCondition;
  const isGameLost = attempts >= SAMPLE_SIZE;
  const isGameOver = isGameWon || isGameLost;

  return (
    <div className="relative">
      <UpperBar
        tries={attempts}
        countryToGuess={countries[currentCountryIndex]}
      />
      <Gauge score={score} winCondition={winCondition} />
      {isGameOver && (
        <div className="fixed inset-0 flex items-center justify-center">
          {isGameWon ? (
            <p>Congratulations! You won!</p>
          ) : (
            <p>Game over! You failed.</p>
          )}
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
            onClick={handlePlayAgain}
          >
            Play Again
          </button>
        </div>
      )}
      <WorldMap
        onCountryClick={handleCountryClick}
        selectedCountry={guessedCountries[score - 1]}
        guessedCountries={guessedCountries}
        width={width}
        height={height}
      />
    </div>
  );
};

export default Game;
