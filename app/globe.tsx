import useDeviceSize from "@/hooks/useDeviceSize";
import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const Globe = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [width, height] = useDeviceSize();

  const handleCountryClick = (geography) => {
    const countryName = geography.properties.name;
    setSelectedCountry(countryName);
    console.log(`Clicked on: ${countryName}`);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ComposableMap
        projectionConfig={{
          scale: 250,
        }}
        width={width}
        height={height}
      >
        <Geographies geography="/world-110m.json">
          {({ geographies }) =>
            geographies.map((geography) => {
              const countryName = geography.properties.name;
              const isCountrySelected = countryName === selectedCountry;
              const fill = isCountrySelected ? "#f00" : "#088";

              return (
                <Geography
                  key={geography.rsmKey}
                  geography={geography}
                  stroke="#fff"
                  fill={fill}
                  onClick={() => handleCountryClick(geography)}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default Globe;
