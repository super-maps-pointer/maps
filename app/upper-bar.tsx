import { SAMPLE_SIZE } from "@/app/game";
import { COLORS } from "@/utils/colors";
import { Country } from "@/utils/countries";
import { GeoProjection } from "@/utils/geo-projections";
import { Level, displayLevel } from "@/utils/rules";
import { Heading, Text, Box } from "@chakra-ui/react";
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
    <Box
      bg={COLORS.primary}
      className="absolute top-0 left-0 w-full px-4 py-2 border-b border-gray-400"
    >
      <div className="flex flex-col justify-between">
        <div className="flex items-center">
          <div className="flex-col flex-1">
            <Text className="text-left" color="white" fontSize="lg">
              Tries: {tries} / {SAMPLE_SIZE}
            </Text>
            <Text className="text-left" color="white" fontSize="lg">
              Projection: {geoProjection}
            </Text>
          </div>
          <div className="flex-3">
            <Heading as="h1" size="xl" color="white">
              Guess the Country on the Map!
            </Heading>
            <Text color="white" fontSize="lg" className="text-center">
              {countryToGuess !== null && renderCountryName(countryToGuess)}
            </Text>
          </div>
          <div className="flex-1">
            <Text color="white" className="text-right">
              {displayLevel(level)}
            </Text>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default UpperBar;
