"use client";
import Game from "@/app/game";
import Head from "next/head";
import { useEffect, useState } from "react";
import { sampleSize } from "lodash";
import { COUNTRIES } from "@/utils/countries";

const SAMPLE_SIZE = 1;

function Home() {
  const [countries, setCountries] = useState<string[]>([]);

  useEffect(() => {
    const randomSample = sampleSize(COUNTRIES, SAMPLE_SIZE);
    setCountries(randomSample);
  }, []);

  return (
    <>
      <Head>
        <title>Interactive World Map</title>
      </Head>
      <Game countries={countries} />
    </>
  );
}

export default Home;
