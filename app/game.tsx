import WorldMap from "@/app/world-map";
import { FC, useCallback, useState, useEffect } from "react";

interface GameProps {
  countries: string[];
}

const Game: FC<GameProps> = ({ countries }) => {
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);
  const [guessedCountry, setGuessedCountry] = useState<string | null>(null);
  const [guessResult, setGuessResult] = useState("");
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
        setGuessResult("Good!");
        setGuessedCountry(country);
        setCurrentCountryIndex(currentCountryIndex + 1);
      } else {
        setGuessResult("Wrong!");
      }
    },
    [currentCountryIndex, countries]
  );

  useEffect(() => {
    if (currentCountryIndex >= countries.length) {
      setGuessResult("Game Over!");
    } else {
      setGuessResult("");
    }
  }, [currentCountryIndex, countries]);

  return (
    <div className="relative">
      <h1 className="text-center absolute top-4 left-1/2 transform -translate-x-1/2">
        Guess the Country on the Map!
      </h1>
      {currentCountryIndex < countries.length && (
        <h2 className="absolute top-12 left-1/2 transform -translate-x-1/2">
          {countries[currentCountryIndex]}
        </h2>
      )}
      {guessResult && (
        <p className="absolute top-16 left-1/2 transform -translate-x-1/2">
          {guessResult}
        </p>
      )}
      <WorldMap
        onCountryClick={handleCountryClick}
        selectedCountry={guessedCountry}
        width={width}
        height={height}
      />
    </div>
  );
};

export default Game;
