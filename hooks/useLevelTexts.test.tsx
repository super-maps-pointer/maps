import { describe, expect, it } from "vitest";
import { renderHookWithProviders } from "@/test/render";
import { Level } from "@/utils/rules";
import { useLevelTexts } from "./useLevelTexts";

describe("useLevelTexts", () => {
  it("names levels in French with their emoji", () => {
    const { result } = renderHookWithProviders(useLevelTexts, "fr");

    expect(result.current.name(Level.Easy)).toBe("Niveau 1");
    expect(result.current.name(Level.Normal)).toBe("Niveau 2 🏴‍☠️");
  });

  it("describes a level goal from its rules", () => {
    const { result } = renderHookWithProviders(useLevelTexts, "en");

    expect(result.current.goal(Level.Extreme)).toBe(
      "Find 20 countries in 40 tries.",
    );
  });

  it("translates the new projection notice", () => {
    const { result } = renderHookWithProviders(useLevelTexts, "fr");

    expect(result.current.newProjection).toBe(
      "Nouveau défi, la carte change de projection !",
    );
  });
});
