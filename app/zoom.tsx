import React, { FC } from "react";

interface ZoomProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
}

const Zoom: FC<ZoomProps> = ({ onZoomIn, onZoomOut }) => {
  return (
    <div className="absolute top-1/2 left-5 transform -translate-y-1/2 flex flex-col items-center">
      <button className="mb-2 px-4 py-2 bg-gray-200 rounded" onClick={onZoomIn}>
        Zoom +
      </button>
      <button className="px-4 py-2 bg-gray-200 rounded" onClick={onZoomOut}>
        Zoom -
      </button>
    </div>
  );
};

export default Zoom;
