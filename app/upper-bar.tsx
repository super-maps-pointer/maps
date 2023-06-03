import { SAMPLE_SIZE } from "@/app/game";
import { Country } from "@/utils/countries";
import { GeoProjection } from "@/utils/geo-projections";
import { Level, displayLevel } from "@/utils/rules";
import { FC } from "react";

interface UpperBarProps {
  tries: number;
  countryToGuess: Country | null;
  level: Level;
  geoProjection: GeoProjection;
}

const renderCountryName = (country: Country) => {
  const { name } = country;
  return <h2 className="text-2xl font-bold">{name.toUpperCase()}</h2>;
};

const UpperBar: FC<UpperBarProps> = ({
  tries,
  countryToGuess,
  level,
  geoProjection,
}) => {
  return (
    <div className="absolute top-0 left-0 w-full bg-gray-300 px-4 py-2 border-b border-gray-400">
      <div className="flex flex-col justify-between">
        <div className="flex items-center">
          <div className="flex-col flex-1">
            <h3 className="text-left text-lg font-semibold">
              Tries: {tries} / {SAMPLE_SIZE}
            </h3>
            <h3 className="text-left text-lg font-semibold">
              Projection: {geoProjection}
            </h3>
          </div>
          <div className="flex-1">
            <h1 className="text-center text-2xl font-bold">
              Guess the Country on the Map!
            </h1>
            <p className="text-center">
              {countryToGuess !== null && renderCountryName(countryToGuess)}
            </p>
          </div>
          <div className="flex-1">
            <p className="text-right">{displayLevel(level)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperBar;
