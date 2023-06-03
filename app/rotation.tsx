import React, { FC } from "react";
import { Button } from "@chakra-ui/react";

interface RotationProps {
  onRotateClockwise: () => void;
  onRotateCounterClockwise: () => void;
}

const Rotation: FC<RotationProps> = ({
  onRotateClockwise,
  onRotateCounterClockwise,
}) => {
  return (
    <div className="fixed bottom-20 left-0 w-full flex justify-center">
      <div className="flex flex-row justify-center">
        <Button
          className="mr-2"
          rounded="full"
          variant="solid"
          colorScheme="secondary"
          onClick={onRotateClockwise}
        >
          Rotate Clockwise
        </Button>
        <Button
          rounded="full"
          colorScheme="secondary"
          variant="solid"
          onClick={onRotateCounterClockwise}
        >
          Rotate Counter-Clockwise
        </Button>
      </div>
    </div>
  );
};

export default Rotation;
