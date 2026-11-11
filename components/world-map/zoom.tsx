import { IconButton } from "@chakra-ui/react";
import { Minus, Plus } from "lucide-react";

interface ZoomProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
}

export default function Zoom({ onZoomIn, onZoomOut }: ZoomProps) {
  return (
    <div className="absolute top-1/2 left-5 flex -translate-y-1/2 flex-col items-center">
      <IconButton
        className="mb-2"
        rounded="full"
        variant="solid"
        colorPalette="secondary"
        onClick={onZoomIn}
        aria-label="Zoom in"
      >
        <Plus />
      </IconButton>
      <IconButton
        rounded="full"
        variant="solid"
        colorPalette="secondary"
        onClick={onZoomOut}
        aria-label="Zoom out"
      >
        <Minus />
      </IconButton>
    </div>
  );
}
