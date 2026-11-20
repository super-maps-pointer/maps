import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { renderWithProviders } from "@/test/render";
import { Level } from "@/utils/rules";
import NextLevelScreen from "./next-level-screen";

vi.mock("@/components/game/confetti", () => ({
  default: () => null,
}));

describe("NextLevelScreen", () => {
  it("names the new Projection", () => {
    renderWithProviders(
      <NextLevelScreen
        level={Level.Hard}
        projection="geoTransverseMercator"
        onPlay={vi.fn()}
      />,
      "en",
    );

    expect(
      screen.getByText("New projection: Transverse Mercator"),
    ).toBeInTheDocument();
  });

  it("names the new Projection in French", () => {
    renderWithProviders(
      <NextLevelScreen
        level={Level.Normal}
        projection="geoEqualEarth"
        onPlay={vi.fn()}
      />,
      "fr",
    );

    expect(
      screen.getByText("Nouvelle projection : Equal Earth"),
    ).toBeInTheDocument();
  });
});
