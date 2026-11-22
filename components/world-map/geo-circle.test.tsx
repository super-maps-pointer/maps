import { fireEvent, render } from "@testing-library/react";
import { ComposableMap } from "react-simple-maps";
import { describe, expect, it, vi } from "vitest";
import type { CountryGeography } from "@/utils/geography";
import GeoCircle from "./geo-circle";

const monaco = {
  rsmKey: "geo-MCO",
  properties: { NAME: "Monaco", ADM0_A3: "MCO", LABEL_X: 7.4, LABEL_Y: 43.7 },
} as unknown as CountryGeography;

const renderCircle = (props: {
  layer: "hitArea" | "dot";
  zoom: number;
  onClick?: (geography: CountryGeography) => void;
}) =>
  render(
    <ComposableMap>
      <GeoCircle
        geography={monaco}
        isCountryGuessed={false}
        onClick={props.onClick ?? vi.fn()}
        layer={props.layer}
        zoom={props.zoom}
      />
    </ComposableMap>,
  ).container.querySelector("circle");

describe("GeoCircle", () => {
  it("keeps the same on-screen size whatever the zoom", () => {
    const atOne = Number(
      renderCircle({ layer: "dot", zoom: 1 })?.getAttribute("r"),
    );
    const atFour = Number(
      renderCircle({ layer: "dot", zoom: 4 })?.getAttribute("r"),
    );

    expect(atFour).toBeCloseTo(atOne / 4);
  });

  it("gives the hit area a finger-sized radius, larger than the dot", () => {
    const hitArea = Number(
      renderCircle({ layer: "hitArea", zoom: 1 })?.getAttribute("r"),
    );
    const dot = Number(
      renderCircle({ layer: "dot", zoom: 1 })?.getAttribute("r"),
    );

    expect(hitArea * 2).toBeGreaterThanOrEqual(24);
    expect(hitArea).toBeGreaterThan(dot);
  });

  it("reports the country when the hit area is tapped", () => {
    const onClick = vi.fn();
    const circle = renderCircle({ layer: "hitArea", zoom: 1, onClick });

    if (circle === null) throw new Error("circle not rendered");
    fireEvent.click(circle);

    expect(onClick).toHaveBeenCalledWith(monaco);
  });
});
