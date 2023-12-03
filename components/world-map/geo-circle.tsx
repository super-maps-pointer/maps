import { useTheme } from "@chakra-ui/react";
import React, { useState } from "react";
import { Marker } from "react-simple-maps";

interface GeoCircleProps {
  isCountryGuessed: boolean;
  handleGeographyClick: (geography: any) => void;
  geography: any;
}

const Circle = ({
  isCountryGuessed,
  handleGeographyClick,
  geography,
}: GeoCircleProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();
  const { LABEL_X: cordinateX, LABEL_Y: cordinateY } = geography.properties;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const isFilled =
    isCountryGuessed || isHovered ? theme.colors.fifth.main : "white";

  return (
    <Marker coordinates={[cordinateX, cordinateY]}>
      <circle
        r={2}
        stroke="black"
        strokeWidth={0.5}
        onClick={() => handleGeographyClick(geography)}
        fill={isFilled}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </Marker>
  );
};

export default Circle;
