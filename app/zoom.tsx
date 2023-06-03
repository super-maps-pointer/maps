import React, { FC } from "react";

interface ZoomProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
}

const Zoom: FC<ZoomProps> = ({ onZoomIn, onZoomOut }) => {
  return (
    <div className="absolute top-1/2 left-5 transform -translate-y-1/2 flex flex-col items-center">
      <button
        className="w-10 h-10 mb-2 rounded-full inline-flex items-center justify-center bg-gray-200 text-2xl font-bold"
        onClick={onZoomIn}
      >
        +
      </button>
      <button
        className="w-10 h-10 rounded-full inline-flex items-center justify-center bg-gray-200 text-2xl font-bold"
        onClick={onZoomOut}
      >
        -
      </button>
    </div>
  );
};

export default Zoom;
