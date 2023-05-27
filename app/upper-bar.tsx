import { SAMPLE_SIZE } from "@/app/game";
import { Country } from "@/utils/countries";
import { GeoProjection } from "@/utils/geo-projections";
import { Level, displayLevel } from "@/utils/rules";
import { FC } from "react";

interface UpperBarProps {
  tries: number;
  countryToGuess: string;
  level: Level;
  geoProjection: GeoProjection;
}

const UpperBar: FC<UpperBarProps> = ({
  tries,
  countryToGuess,
  level,
  geoProjection,
}) => {
  return (
    <div className="absolute top-0 left-0 w-full bg-gray-300 px-4 py-2 border-b border-gray-400">
      <div>
        <h1 className="text-2xl font-bold text-center">
          Guess the Country on the Map!
        </h1>
        <h2 className="text-2xl font-bold">{countryToGuess}</h2>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">
            Tries: {tries} / {SAMPLE_SIZE}
          </h3>
          <h3 className="text-lg font-semibold">Projection: {geoProjection}</h3>
        </div>
        <div>{displayLevel(level)}</div>
      </div>
    </div>
  );
};

export default UpperBar;
