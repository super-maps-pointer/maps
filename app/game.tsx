import WorldMap from "@/app/world-map";
import { COUNTRIES } from "@/utils/countries";
import { sampleSize } from "lodash";
import { FC, useCallback, useState, useEffect } from "react";
import { toast } from "react-toastify";

const SAMPLE_SIZE = 5;

const getCountries = () => {
  const randomSample = sampleSize(COUNTRIES, SAMPLE_SIZE);
  return randomSample;
};

interface UpperBarProps {
  score: number;
  countryToGuess: string;
}

const UpperBar: FC<UpperBarProps> = ({ score, countryToGuess }) => {
  return (
    <div className="absolute top-0 left-0 w-full bg-gray-300 px-4 py-2 border-b border-gray-400">
      <h1 className="text-2xl font-bold text-center">
        Guess the Country on the Map!
      </h1>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">
            Score: {score} / {SAMPLE_SIZE}
          </h3>
        </div>
        <h2 className="text-2xl font-bold">{countryToGuess}</h2>
      </div>
    </div>
  );
};

interface GameProps {}

const Game: FC<GameProps> = () => {
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);
  const [guessedCountry, setGuessedCountry] = useState<string | null>(null);
  const [guessResult, setGuessResult] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [countries, setCountries] = useState<string[]>(getCountries());
  const [score, setScore] = useState(0);
  const [guessedCountries, setGuessedCountries] = useState<string[]>([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const handleCountryClick = useCallback(
    (country: string) => {
      if (country === countries[currentCountryIndex]) {
        toast.success("Good!");
        setScore(score + 1);
        setGuessedCountries([...guessedCountries, country]);
      } else {
        toast.error(`Wrong! You clicked ${country}`);
      }

      setGuessedCountry(country);
      setCurrentCountryIndex(currentCountryIndex + 1);
    },
    [countries, currentCountryIndex, guessedCountries, score]
  );

  useEffect(() => {
    if (currentCountryIndex >= countries.length) {
      setGameOver(true);
    } else {
      setGuessResult("");
    }
  }, [currentCountryIndex, countries]);

  const handlePlayAgain = () => {
    setCurrentCountryIndex(0);
    setGuessedCountry(null);
    setGuessResult("");
    setGameOver(false);
    setScore(0);
    setGuessedCountries([]);
    setCountries(getCountries());
  };

  return (
    <div className="relative">
      <UpperBar score={score} countryToGuess={countries[currentCountryIndex]} />
      {guessResult && (
        <p className="absolute top-20 left-1/2 transform -translate-x-1/2 text-lg">
          {guessResult}
        </p>
      )}
      {gameOver && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p>Game Over!</p>
          <p>
            Final Score: {score} / {SAMPLE_SIZE}
          </p>
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
        selectedCountry={guessedCountry}
        guessedCountries={guessedCountries}
        width={width}
        height={height}
      />
    </div>
  );
};

export default Game;
