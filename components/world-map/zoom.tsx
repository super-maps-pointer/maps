import React, { FC } from "react";
import { IconButton } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

interface ZoomProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
}

const Zoom: FC<ZoomProps> = ({ onZoomIn, onZoomOut }) => {
  return (
    <div className="absolute top-1/2 left-5 transform -translate-y-1/2 flex flex-col items-center">
      <IconButton
        className="mb-2"
        rounded="full"
        variant="solid"
        colorScheme="secondary"
        onClick={onZoomIn}
        icon={<AddIcon />}
        aria-label={"zoomIn"}
      />
      <IconButton
        rounded="full"
        variant="solid"
        colorScheme="secondary"
        onClick={onZoomOut}
        icon={<MinusIcon />}
        aria-label={"zoomOut"}
      />
    </div>
  );
};

export default Zoom;
