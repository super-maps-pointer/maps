import { Level } from "@/app/page";
import UpperBar from "@/app/upper-bar";
import WorldMap from "@/app/world-map";
import useDeviceSize from "@/hooks/useDeviceSize";
import { getCountries } from "@/utils/countries";
import { FC, useCallback, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const SAMPLE_SIZE = 5;

interface GaugeProps {
  score: number;
  winCondition: number;
}

const Gauge: FC<GaugeProps> = ({ score, winCondition }) => {
  const gaugeScore = (score / winCondition) * 100;

  return (
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-center">
      <div className="flex flex-col items-center">
        <div
          className="h-64 w-4 bg-gray-300 mb-4"
          style={{ marginBottom: "4px" }}
        >
          <div
            className="h-full bg-blue-500"
            style={{
              height: `${gaugeScore}%`,
              transformOrigin: "bottom",
            }}
          ></div>
        </div>
        <p>
          {score} / {winCondition}
        </p>
      </div>
    </div>
  );
};

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

  const isGameWon = guessedCountries.length >= winCondition;
  const isGameLost = attempts >= SAMPLE_SIZE;
  const isGameOver = isGameWon || isGameLost;

  return (
    <div className="relative">
      <UpperBar
        tries={attempts}
        countryToGuess={countries[currentCountryIndex]}
      />
      <Gauge score={guessedCountries.length} winCondition={winCondition} />
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
        selectedCountry={guessedCountries[guessedCountries.length - 1]}
        guessedCountries={guessedCountries}
        width={width}
        height={height}
      />
    </div>
  );
};

export default Game;
