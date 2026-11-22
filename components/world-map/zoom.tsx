import { IconButton } from "@chakra-ui/react";
import { Minus, Plus } from "lucide-react";

interface ZoomProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
}

const BUTTON_SIZE = { base: "lg", md: "md" } as const;

export default function Zoom({ onZoomIn, onZoomOut }: ZoomProps) {
  return (
    <div className="absolute right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1.5rem,env(safe-area-inset-bottom))] flex flex-col items-center gap-3 md:top-1/2 md:right-auto md:bottom-auto md:left-5 md:-translate-y-1/2 md:gap-2">
      <IconButton
        size={BUTTON_SIZE}
        rounded="full"
        variant="solid"
        colorPalette="secondary"
        onClick={onZoomIn}
        aria-label="Zoom in"
      >
        <Plus />
      </IconButton>
      <IconButton
        size={BUTTON_SIZE}
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
