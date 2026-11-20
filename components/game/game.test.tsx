import { fireEvent, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { renderWithProviders } from "@/test/render";
import { Level } from "@/utils/rules";
import Game from "./game";

vi.mock("@/components/world-map/world-map", () => ({
  default: () => null,
}));

vi.mock("use-sound", () => ({
  useSound: () => [vi.fn()],
}));

const targetCountryHeading = () => screen.getByRole("heading", { level: 1 });

describe("Game", () => {
  it("shows the Target country and Skip changes it", () => {
    renderWithProviders(
      <Game level={Level.Easy} onNextLevel={vi.fn()} onFailLevel={vi.fn()} />,
      "en",
    );
    const first = targetCountryHeading().textContent;
    expect(first).toMatch(/[A-Z]/);

    fireEvent.click(screen.getByRole("button", { name: "Skip" }));

    expect(targetCountryHeading().textContent).not.toBe(first);
  });
});
