import { fireEvent, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { renderWithProviders } from "@/test/render";
import IntroductionScreen from "./introduction-screen";

describe("IntroductionScreen", () => {
  it("renders in the locale it is given", () => {
    renderWithProviders(<IntroductionScreen onPlay={vi.fn()} />, "fr");

    expect(
      screen.getByRole("heading", {
        name: "Bienvenue sur Super Maps Pointer\u00a0!",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Comment jouer" }),
    ).toBeInTheDocument();
  });

  it("lists every level with its goal", () => {
    renderWithProviders(<IntroductionScreen onPlay={vi.fn()} />, "en");

    const levels = screen.getAllByRole("listitem");
    expect(levels).toHaveLength(4);
    expect(
      screen.getByText("Find 5 countries in 20 tries.").closest("li"),
    ).toHaveTextContent("Level 1");
  });

  it("only announces the projection change on level 2", () => {
    renderWithProviders(<IntroductionScreen onPlay={vi.fn()} />, "en");

    const notices = screen.getAllByText(
      "New challenge, the map changes projection!",
    );
    expect(notices).toHaveLength(1);
    expect(notices[0]?.closest("li")).toHaveTextContent("Level 2");
  });

  it("starts the game from the hero button", () => {
    const onPlay = vi.fn();
    renderWithProviders(<IntroductionScreen onPlay={onPlay} />, "en");

    fireEvent.click(screen.getByRole("button", { name: "Start Level 1" }));

    expect(onPlay).toHaveBeenCalledOnce();
  });
});
