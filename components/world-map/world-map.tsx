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
import { WithCSSVar, useTheme } from "@chakra-ui/react";
import Zoom from "@/components/world-map/zoom";
import Rotation from "@/components/world-map/rotation";

const WORLD_MAP_FILE = "/ne_50m_countries.json";
const OCEAN_MAP_FILE = "/ne_50m_ocean.json";

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 4;
const DEFAULT_POSITION: Position = {
  coordinates: [0, 10],
  zoom: 1,
};

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
    NAME: string;
    ADM0_A3: string;
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
  const [position, setPosition] = useState<Position>(DEFAULT_POSITION);
  const [rotation, setRotation] = useState<Rotate>(
    getRotationFromGeoAspect(geoAspect)
  );
  const theme = useTheme();

  useEffect(() => {
    setRotation(getRotationFromGeoAspect(geoAspect));
    setPosition(DEFAULT_POSITION);
  }, [geoAspect]);

  const handleGeographyClick = useCallback(
    (geography: GeographyProps) => {
      const { NAME, ADM0_A3 } = geography.properties;
      onCountryClick(NAME, ADM0_A3);
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
          <Geographies geography={OCEAN_MAP_FILE}>
            {({ geographies }) =>
              geographies.map((geography) => {
                return (
                  <Geography
                    key={geography.rsmKey}
                    geography={geography}
                    fill={theme.colors.map.ocean}
                    stroke="none"
                    style={{
                      default: {
                        outline: "none",
                      },
                      hover: {
                        outline: "none",
                      },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
          <Graticule stroke={theme.colors.map.graticules} strokeWidth={0.5} />

          <Geographies geography={WORLD_MAP_FILE}>
            {({ geographies }) => {
              return geographies.map((geography) => {
                const countryCode = geography.properties.ADM0_A3;
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
