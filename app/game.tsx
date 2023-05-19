import { Level } from "@/app/page";
import UpperBar from "@/app/upper-bar";
import WorldMap from "@/app/world-map";
import { COUNTRIES, EASIEST_COUNTRIES } from "@/utils/countries";
import { sampleSize } from "lodash";
import { FC, useCallback, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const SAMPLE_SIZE = 20;

const getCountries = (level: Level) => {
  let countryPool: string[] = [];

  switch (level) {
    case Level.One:
      countryPool = EASIEST_COUNTRIES;
      break;
    default:
      countryPool = COUNTRIES;
      break;
  }

  const randomSample = sampleSize(countryPool, SAMPLE_SIZE);
  return randomSample;
};
interface GameProps {
  level: Level;
}

const Game: FC<GameProps> = ({ level }) => {
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);
  const [guessedCountry, setGuessedCountry] = useState<string | null>(null);
  const [guessResult, setGuessResult] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [countries, setCountries] = useState<string[]>(getCountries(level));
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
    setCountries(getCountries(level));
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
