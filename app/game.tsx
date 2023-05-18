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
    }
  }, [currentCountryIndex, countries]);

  return (
    <div>
      <h1>Guess the Country on the Map!</h1>
      <p>{countries[currentCountryIndex]}</p>
      {guessResult && <p>{guessResult}</p>}
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
