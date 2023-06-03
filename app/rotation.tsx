import React, { FC } from "react";

interface RotationProps {
  onRotateClockwise: () => void;
  onRotateCounterClockwise: () => void;
}

const Rotation: FC<RotationProps> = ({
  onRotateClockwise,
  onRotateCounterClockwise,
}) => {
  return (
    <div className="fixed top-[90px] left-0 w-full flex justify-center">
      <div className="flex flex-row justify-center">
        <button
          className="mb-2 px-4 py-2 bg-gray-200 rounded"
          onClick={onRotateClockwise}
          style={{ marginRight: "8px", height: "40px" }}
        >
          Rotate Clockwise
        </button>
        <button
          className="px-4 py-2 bg-gray-200 rounded"
          onClick={onRotateCounterClockwise}
          style={{ height: "40px" }}
        >
          Rotate Counter-Clockwise
        </button>
      </div>
    </div>
  );
};

export default Rotation;
