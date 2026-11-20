import { act, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { renderWithProviders } from "@/test/render";
import Timer from "./timer";

const elapse = (seconds: number) => {
  act(() => {
    vi.advanceTimersByTime(seconds * 1000);
  });
};

describe("Timer", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("starts at 00:00", () => {
    renderWithProviders(<Timer maxTime={3600} />, "en");

    expect(screen.getByText("00:00")).toBeInTheDocument();
  });

  it("zero-pads seconds under ten", () => {
    renderWithProviders(<Timer maxTime={3600} />, "en");

    elapse(7);

    expect(screen.getByText("00:07")).toBeInTheDocument();
  });

  it("rolls seconds over into minutes", () => {
    renderWithProviders(<Timer maxTime={3600} />, "en");

    elapse(65);

    expect(screen.getByText("01:05")).toBeInTheDocument();
  });

  it("shows two-digit minutes", () => {
    renderWithProviders(<Timer maxTime={3600} />, "en");

    elapse(12 * 60 + 34);

    expect(screen.getByText("12:34")).toBeInTheDocument();
  });

  it("stops at the maximum time", () => {
    renderWithProviders(<Timer maxTime={90} />, "en");

    elapse(200);

    expect(screen.getByText("01:30")).toBeInTheDocument();
  });
});
