import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const Globe = () => {
  const handleCountryClick = (geography: any) => {
    console.log("geography", geography);
    const countryName = geography.properties.NAME;
    console.log(`Clicked on: ${countryName}`);
  };

  return (
    <ComposableMap
      projectionConfig={{
        scale: 250,
      }}
      width={800}
      height={600}
    >
      <Geographies geography="/world-110m.json">
        {({ geographies }) =>
          geographies.map((geography) => (
            <Geography
              key={geography.rsmKey}
              geography={geography}
              stroke="#fff"
              fill="#088"
              onClick={() => handleCountryClick(geography)}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default Globe;
