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
        <ZoomableGroup zoom={1} center={[0, 20]}>
          <Geographies geography="/world-110m.json">
            {({ geographies }) =>
              geographies.map((geography) => (
                <Geography
                  key={geography.rsmKey}
                  geography={geography}
                  stroke="none"
                  onClick={() => handleGeographyClick(geography)}
                  style={{
                    default: {
                      fill: COLORS.default,
                      stroke: "none",
                      outline: "none",
                    },
                    hover: {
                      fill: COLORS.hover,
                      stroke: "none",
                      outline: "none",
                    },
                    pressed: {
                      fill: COLORS.selected,
                      stroke: "none",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
