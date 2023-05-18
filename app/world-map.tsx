import { FC, useCallback } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

interface WorldMapProps {
  onCountryClick: (country: string) => void;
  selectedCountry: string | null;
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
  width,
  height,
}) => {
  const getCountryStyle = useCallback(
    (countryName: string) => {
      const isCountrySelected = countryName === selectedCountry;
      const fill = isCountrySelected ? "#f00" : "#088";

      return { fill };
    },
    [selectedCountry]
  );

  const handleGeographyClick = useCallback(
    (geography: GeographyProps) => {
      const countryName = geography.properties.name;
      onCountryClick(countryName);
    },
    [onCountryClick]
  );

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
        <Geographies geography="/world-110m.json">
          {({ geographies }) =>
            geographies.map((geography) => (
              <Geography
                key={geography.rsmKey}
                geography={geography}
                stroke="#fff"
                onClick={() => handleGeographyClick(geography)}
                style={{
                  default: getCountryStyle(geography.properties.name),
                  hover: { fill: "#888" },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
