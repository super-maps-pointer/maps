import { FC, useCallback } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { COLORS } from "@/utils/colors";

interface WorldMapProps {
  onCountryClick: (country: string) => void;
  selectedCountry: string | null;
  guessedCountries: string[];
  width: number;
  height: number;
}

interface GeographyProps {
  rsmKey: string;
  properties: {
    name: string;
  };
}

const WorldMap: FC<WorldMapProps> = ({
  onCountryClick,
  selectedCountry,
  guessedCountries,
  width,
  height,
}) => {
  const handleGeographyClick = useCallback(
    (geography: GeographyProps) => {
      const countryName = geography.properties.name;
      onCountryClick(countryName);
    },
    [onCountryClick]
  );

  const isGuessed = (country: string) => guessedCountries.includes(country);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: width / 5,
        }}
        width={width}
        height={height}
      >
        <ZoomableGroup zoom={1} center={[0, 20]}>
          <Geographies geography="/world-110m.json">
            {({ geographies }) =>
              geographies.map((geography) => {
                const countryName = geography.properties.name;
                const isCountryGuessed = isGuessed(countryName);

                return (
                  <Geography
                    key={geography.rsmKey}
                    geography={geography}
                    stroke="none"
                    onClick={() => handleGeographyClick(geography)}
                    style={{
                      default: {
                        fill: isCountryGuessed
                          ? COLORS.guessed
                          : COLORS.default,
                        stroke: COLORS.stroke,
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: isCountryGuessed ? COLORS.guessed : COLORS.hover,
                        stroke: COLORS.stroke,
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      pressed: {
                        fill: isCountryGuessed
                          ? COLORS.guessed
                          : COLORS.selected,
                        stroke: COLORS.stroke,
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
