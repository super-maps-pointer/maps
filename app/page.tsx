"use client";
import Game from "@/app/game";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Interactive World Map</title>
      </Head>
      <Game countries={["France", "Bangladesh", "Turkey"]} />
    </>
  );
}

export default Home;
