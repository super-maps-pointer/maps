import ReactCanvasConfetti from "react-canvas-confetti";
import type { CSSProperties } from "react";
import type { TOnInitComponentFn } from "react-canvas-confetti/dist/types";

const canvasStyles: CSSProperties = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

const SHOTS = [
  { particleRatio: 0.25, spread: 26, startVelocity: 55 },
  { particleRatio: 0.2, spread: 60 },
  { particleRatio: 0.35, spread: 100, decay: 0.91, scalar: 0.8 },
  { particleRatio: 0.1, spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 },
  { particleRatio: 0.1, spread: 120, startVelocity: 45 },
];

const fire: TOnInitComponentFn = ({ confetti }) => {
  for (const { particleRatio, ...options } of SHOTS) {
    void confetti({ ...options, origin: { y: 0.7 }, particleCount: Math.floor(200 * particleRatio) });
  }
};

/** Fires a single burst of confetti as soon as it mounts. */
export default function Confetti() {
  return <ReactCanvasConfetti onInit={fire} style={canvasStyles} />;
}
