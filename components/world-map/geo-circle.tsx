import { Marker } from "react-simple-maps";
import type { CountryGeography } from "@/utils/geography";

interface GeoCircleProps {
  isCountryGuessed: boolean;
  onClick: (geography: CountryGeography) => void;
  geography: CountryGeography;
}

export default function GeoCircle({ isCountryGuessed, onClick, geography }: GeoCircleProps) {
  const { LABEL_X, LABEL_Y } = geography.properties;

  return (
    <Marker coordinates={[LABEL_X, LABEL_Y]}>
      <circle
        r={2}
        className="micro-country"
        data-guessed={isCountryGuessed}
        onClick={() => {
          onClick(geography);
        }}
      />
    </Marker>
  );
}
