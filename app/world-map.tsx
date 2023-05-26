import { FC, useCallback } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { COLORS } from "@/utils/colors";
import { Country } from "@/utils/countries";

interface WorldMapProps {
  onCountryClick: (code: string, name: string) => void;
  selectedCountry: Country | null;
  guessedCountries: Country[];
  width: number;
  height: number;
}

interface GeographyProps {
  rsmKey: string;
  properties: {
    name: string;
    adm0_a3: string;
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
      const { name, adm0_a3 } = geography.properties;
      onCountryClick(name, adm0_a3);
    },
    [onCountryClick]
  );

  const isGuessed = (countryCode: string) =>
    !!guessedCountries.find((country) => country.code === countryCode);

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
          <Geographies geography="/middle-res-world-map.geo.json">
            {({ geographies }) => {
              return geographies.map((geography) => {
                const countryCode = geography.properties.adm0_a3;
                const isCountryGuessed = isGuessed(countryCode);

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
              });
            }}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
