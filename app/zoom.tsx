import React, { FC } from "react";
import { Button } from "@chakra-ui/react";

interface ZoomProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
}

const Zoom: FC<ZoomProps> = ({ onZoomIn, onZoomOut }) => {
  return (
    <div className="absolute top-1/2 left-5 transform -translate-y-1/2 flex flex-col items-center">
      <Button
        className="mb-2"
        rounded="full"
        variant="solid"
        colorScheme="teal"
        onClick={onZoomIn}
      >
        <p className="text-2xl">+</p>
      </Button>
      <Button
        rounded="full"
        variant="solid"
        colorScheme="teal"
        onClick={onZoomOut}
      >
        <p className="text-2xl">-</p>
      </Button>
    </div>
  );
};

export default Zoom;
