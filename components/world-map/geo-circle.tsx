import { Marker } from "react-simple-maps";
import type { CountryGeography } from "@/utils/geography";

const SCREEN_RADIUS = { hitArea: 14, dot: 4 } as const;

interface GeoCircleProps {
  isCountryGuessed: boolean;
  onClick: (geography: CountryGeography) => void;
  geography: CountryGeography;
  layer: keyof typeof SCREEN_RADIUS;
  zoom: number;
}

export default function GeoCircle({
  isCountryGuessed,
  onClick,
  geography,
  layer,
  zoom,
}: GeoCircleProps) {
  const { LABEL_X, LABEL_Y } = geography.properties;

  return (
    <Marker coordinates={[LABEL_X, LABEL_Y]}>
      <circle
        r={SCREEN_RADIUS[layer] / zoom}
        className={layer === "dot" ? "micro-country" : "micro-country-hit-area"}
        data-guessed={isCountryGuessed}
        onClick={() => {
          onClick(geography);
        }}
      />
    </Marker>
  );
}
