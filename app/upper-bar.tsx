import { SAMPLE_SIZE } from "@/app/game";
import { FC } from "react";

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

export default UpperBar;
