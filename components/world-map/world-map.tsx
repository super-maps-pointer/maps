import { useCallback, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
  ZoomableGroup,
} from "react-simple-maps";
import type { ZoomPanCallbackProps } from "react-simple-maps";
import GeoCircle from "@/components/world-map/geo-circle";
import Zoom from "@/components/world-map/zoom";
import { type Country, isMicroCountry } from "@/utils/countries";
import { colorVar } from "@/utils/css-var";
import type { GeoProjection } from "@/utils/geo-projections";
import { type CountryGeography, isCountryGeography } from "@/utils/geography";

const WORLD_MAP_FILE = "/ne_50m_countries.json";
const OCEAN_MAP_FILE = "/ne_50m_ocean.json";

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 4;

interface Position {
  coordinates: [number, number];
  zoom: number;
}

const DEFAULT_POSITION: Position = { coordinates: [0, 10], zoom: 1 };

interface WorldMapProps {
  onCountryClick: (name: string, code: string) => void;
  foundCountries: readonly Country[];
  width: number;
  height: number;
  geoProjection: GeoProjection;
}

export default function WorldMap({
  onCountryClick,
  foundCountries,
  width,
  height,
  geoProjection,
}: WorldMapProps) {
  const [position, setPosition] = useState<Position>(DEFAULT_POSITION);

  const handleGeographyClick = useCallback(
    (geography: CountryGeography) => {
      const { NAME, ADM0_A3 } = geography.properties;
      onCountryClick(NAME, ADM0_A3);
    },
    [onCountryClick],
  );

  const isFound = (countryCode: string) =>
    foundCountries.some((country) => country.code === countryCode);

  const handleZoomIn = () => {
    if (position.zoom >= MAX_ZOOM) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= MIN_ZOOM) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  };

  const handleMoveEnd = ({ coordinates, zoom }: ZoomPanCallbackProps) => {
    if (coordinates === undefined || zoom === undefined) return;
    setPosition({ coordinates, zoom });
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Zoom onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />
      <ComposableMap
        projection={geoProjection}
        projectionConfig={{ scale: width / 5 }}
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
            id="sphere"
            style={{
              fill: colorVar("map.sphere"),
              stroke: colorVar("map.graticules"),
            }}
            strokeWidth={1}
          />
          <Geographies geography={OCEAN_MAP_FILE}>
            {({ geographies }) =>
              geographies.map((geography) => (
                <Geography
                  key={geography.rsmKey}
                  geography={geography}
                  style={{
                    fill: colorVar("map.ocean"),
                    stroke: "none",
                    outline: "none",
                  }}
                />
              ))
            }
          </Geographies>
          <Graticule
            style={{ stroke: colorVar("map.graticules") }}
            strokeWidth={0.5}
          />
          <Geographies geography={WORLD_MAP_FILE}>
            {({ geographies }) => {
              const countries = geographies.filter(isCountryGeography);
              const microCountries = countries.filter((geography) =>
                isMicroCountry(geography.properties.ADM0_A3),
              );
              const microCountryLayer = (layer: "hitArea" | "dot") =>
                microCountries.map((geography) => (
                  <GeoCircle
                    key={`${layer}-${geography.rsmKey}`}
                    isCountryGuessed={isFound(geography.properties.ADM0_A3)}
                    onClick={handleGeographyClick}
                    geography={geography}
                    layer={layer}
                    zoom={position.zoom}
                  />
                ));

              return (
                <>
                  {microCountryLayer("hitArea")}
                  {countries.map((geography) => (
                    <Geography
                      key={geography.rsmKey}
                      geography={geography}
                      className="country"
                      data-guessed={isFound(geography.properties.ADM0_A3)}
                      onClick={() => {
                        handleGeographyClick(geography);
                      }}
                    />
                  ))}
                  {microCountryLayer("dot")}
                </>
              );
            }}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
