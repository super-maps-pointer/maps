import { fireEvent, screen } from "@testing-library/react";
import { useState } from "react";
import { describe, expect, it, vi } from "vitest";
import { renderWithProviders } from "@/test/render";
import { type RunAction, createRun } from "@/utils/run";
import Game from "./game";

vi.mock("@/components/world-map/world-map", () => ({
  default: () => null,
}));

vi.mock("use-sound", () => ({
  useSound: () => [vi.fn()],
}));

const run = createRun(Math.random);

function PlayingGame() {
  const [state, setState] = useState(
    () => run.dispatch(run.start(), { type: "play" }).state,
  );
  if (state.screen !== "playing") return null;
  const dispatch = (action: RunAction) => {
    const transition = run.dispatch(state, action);
    setState(transition.state);
    return transition.outcome;
  };
  return <Game run={state} dispatch={dispatch} />;
}

const targetCountryHeading = () => screen.getByRole("heading", { level: 1 });

describe("Game", () => {
  it("shows the Target country and Skip changes it", () => {
    renderWithProviders(<PlayingGame />, "en");
    const first = targetCountryHeading().textContent;
    expect(first).toMatch(/[A-Z]/);

    fireEvent.click(screen.getByRole("button", { name: "Skip" }));

    expect(targetCountryHeading().textContent).not.toBe(first);
  });
});
