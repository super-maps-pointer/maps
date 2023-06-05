import React, { FC } from "react";
import { IconButton } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

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
        <IconButton
          className="mr-2"
          rounded="full"
          variant="solid"
          colorScheme="secondary"
          onClick={onRotateClockwise}
          icon={<ArrowLeftIcon />}
          aria-label={"rotateClockwise"}
        />
        <IconButton
          rounded="full"
          colorScheme="secondary"
          variant="solid"
          onClick={onRotateCounterClockwise}
          icon={<ArrowRightIcon />}
          aria-label={"rotateCounterClockwise"}
        />
      </div>
    </div>
  );
};

export default Rotation;
