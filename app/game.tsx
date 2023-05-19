import { Level } from "@/app/page";
import UpperBar from "@/app/upper-bar";
import WorldMap from "@/app/world-map";
import useDeviceSize from "@/hooks/useDeviceSize";
import { getCountries } from "@/utils/countries";
import { FC, useCallback, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const SAMPLE_SIZE = 20;
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
  const [tries, setTries] = useState(0);
  const [width, height] = useDeviceSize();

  const handleCountryClick = useCallback(
    (country: string) => {
      setTries(tries + 1);

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
    [countries, currentCountryIndex, guessedCountries, score, tries]
  );

  useEffect(() => {
    if (currentCountryIndex >= countries.length) {
      setGameOver(true);
    } else {
      setGuessResult("");
    }
  }, [currentCountryIndex, countries]);

  const percentageCorrect = (score / SAMPLE_SIZE) * 100;

  let gameResult = "";

  if (percentageCorrect >= 70) {
    gameResult = "Congratulations! You won!";
  } else if (tries >= SAMPLE_SIZE) {
    gameResult = "Game over! You failed.";
  }

  const handlePlayAgain = () => {
    setCurrentCountryIndex(0);
    setGuessedCountry(null);
    setGuessResult("");
    setGameOver(false);
    setScore(0);
    setGuessedCountries([]);
    setTries(0);
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
      <div className="absolute top-1/2 right-0 transform translate-y-1/2 text-center">
        {gameResult && <p>{gameResult}</p>}
        {gameResult && <p>Final Score: {percentageCorrect.toFixed(2)}%</p>}
        {!gameResult && (
          <div className="flex flex-col items-center">
            <div
              className="h-64 w-4 bg-gray-300 mb-4"
              style={{ marginBottom: "4px" }}
            >
              <div
                className="h-full bg-blue-500"
                style={{
                  height: `${percentageCorrect}%`,
                  transformOrigin: "bottom",
                }}
              ></div>
            </div>
            <p>
              {score} / {SAMPLE_SIZE} correct guesses
            </p>
          </div>
        )}
        {gameResult && (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
            onClick={handlePlayAgain}
          >
            Play Again
          </button>
        )}
      </div>
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
