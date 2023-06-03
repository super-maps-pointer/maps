import { FC, useCallback, useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  ZoomableGroup,
} from "react-simple-maps";
import { Country } from "@/utils/countries";
import { GeoAspect, getRotationFromGeoAspect } from "@/utils/geo-aspects";
import { GeoProjection } from "@/utils/geo-projections";
import { Sphere } from "react-simple-maps";
import Zoom from "@/app/zoom";
import Rotation from "@/app/rotation";
import { WithCSSVar, useTheme } from "@chakra-ui/react";

const getGeoStyle = (isCountryGuessed: boolean, theme: WithCSSVar<any>) => ({
  default: {
    fill: isCountryGuessed ? theme.colors.fifth.main : theme.colors.map.default,
    stroke: theme.colors.map.stroke,
    strokeWidth: 0.5,
    outline: "none",
  },
  hover: {
    fill: isCountryGuessed
      ? theme.colors.fifth.main
      : theme.colors.forth["600"],
    stroke: theme.colors.map.stroke,
    strokeWidth: 0.5,
    outline: "none",
  },
  pressed: {
    fill: isCountryGuessed
      ? theme.colors.fifth.main
      : theme.colors.forth["800"],
    stroke: theme.colors.map.stroke,
    strokeWidth: 0.5,
    outline: "none",
  },
});

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 4;

interface Position {
  coordinates: [number, number];
  zoom: number;
}

type Rotate = [number, number, number];

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
  const [rotation, setRotation] = useState<Rotate>(
    getRotationFromGeoAspect(geoAspect)
  );
  const theme = useTheme();

  useEffect(() => {
    setRotation(getRotationFromGeoAspect(geoAspect));
  }, [geoAspect]);

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
    if (position.zoom >= MAX_ZOOM) return;
    setPosition((pos: Position) => ({ ...pos, zoom: pos.zoom * 2 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= MIN_ZOOM) return;
    setPosition((pos: Position) => ({ ...pos, zoom: pos.zoom / 2 }));
  };

  const handleRotateClockwise = () => {
    setRotation((rot: Rotate) => [rot[0] + 10, rot[1], rot[2]]);
  };

  const handleRotateCounterClockwise = () => {
    setRotation((rot: Rotate) => [rot[0] - 10, rot[1], rot[2]]);
  };

  const handleMoveEnd = (position: Position) => {
    setPosition(position);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Zoom onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />
      <Rotation
        onRotateClockwise={handleRotateClockwise}
        onRotateCounterClockwise={handleRotateCounterClockwise}
      />
      <ComposableMap
        projection={geoProjection}
        projectionConfig={{
          scale: width / 5,
          rotate: rotation,
        }}
        width={width}
        height={height}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
          minZoom={MIN_ZOOM}
        >
          <Sphere
            id={"sphere"}
            fill="#FFF"
            stroke={theme.colors.map.graticules}
            strokeWidth={1}
          />
          <Graticule stroke={theme.colors.map.graticules} strokeWidth={0.5} />
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
                    style={getGeoStyle(isCountryGuessed, theme)}
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
