import { FC, useCallback, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  ZoomableGroup,
} from "react-simple-maps";
import { COLORS } from "@/utils/colors";
import { Country } from "@/utils/countries";
import { GeoAspect, getRotationFromGeoAspect } from "@/utils/geo-aspects";
import { GeoProjection } from "@/utils/geo-projections";
import { Sphere } from "react-simple-maps";
import Zoom from "@/app/zoom";

const getGeoStyle = (isCountryGuessed: boolean) => ({
  default: {
    fill: isCountryGuessed ? COLORS.guessed : COLORS.default,
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
    fill: isCountryGuessed ? COLORS.guessed : COLORS.selected,
    stroke: COLORS.stroke,
    strokeWidth: 0.5,
    outline: "none",
  },
});

interface Position {
  coordinates: [number, number];
  zoom: number;
}

interface WorldMapProps {
  onCountryClick: (code: string, name: string) => void;
  selectedCountry: Country | null;
  guessedCountries: Country[];
  width: number;
  height: number;
  geoProjection: GeoProjection;
  geoAspect: GeoAspect;
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
  geoProjection = "geoMercator",
  geoAspect = "European - Africa centric",
}) => {
  const [position, setPosition] = useState<Position>({
    coordinates: [0, 0],
    zoom: 1,
  });

  const handleGeographyClick = useCallback(
    (geography: GeographyProps) => {
      const { name, adm0_a3 } = geography.properties;
      onCountryClick(name, adm0_a3);
    },
    [onCountryClick]
  );

  const isGuessed = (countryCode: string) =>
    !!guessedCountries.find((country) => country.code === countryCode);

  const handleZoomIn = () => {
    if (position.zoom >= 4) return;
    setPosition((pos: Position) => ({ ...pos, zoom: pos.zoom * 2 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 0.7) return;
    setPosition((pos: Position) => ({ ...pos, zoom: pos.zoom / 2 }));
  };

  const handleMoveEnd = (position: Position) => {
    setPosition(position);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Zoom onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />
      <ComposableMap
        projection={geoProjection}
        projectionConfig={{
          scale: width / 5,
          rotate: getRotationFromGeoAspect(geoAspect),
        }}
        width={width}
        height={height}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
        >
          <Sphere id={"sphere"} fill="#FFF" stroke="#EAEAEC" strokeWidth={1} />
          <Graticule stroke="#EAEAEC" strokeWidth={0.5} />
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
                    style={getGeoStyle(isCountryGuessed)}
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
