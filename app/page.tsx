"use client";
import Game from "@/app/game";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Interactive World Map</title>
      </Head>
      <Game />
    </>
  );
}

export default Home;
