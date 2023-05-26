import { SAMPLE_SIZE } from "@/app/game";
import { Country } from "@/utils/countries";
import { Level, displayLevel } from "@/utils/rules";
import { FC } from "react";

interface UpperBarProps {
  tries: number;
  countryToGuess: Country;
  level: Level;
}

const UpperBar: FC<UpperBarProps> = ({
  tries,
  countryToGuess: { name },
  level,
}) => {
  return (
    <div className="absolute top-0 left-0 w-full bg-gray-300 px-4 py-2 border-b border-gray-400">
      <h1 className="text-2xl font-bold text-center">
        Guess the Country on the Map!
      </h1>
      <h2 className="text-2xl font-bold">{name}</h2>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">
            Tries: {tries} / {SAMPLE_SIZE}
          </h3>
        </div>
        <div>{displayLevel(level)}</div>
      </div>
    </div>
  );
};

export default UpperBar;
