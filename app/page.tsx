"use client";
import Head from "next/head";
import Globe from "@/app/globe";

function Home() {
  return (
    <>
      <Head>
        <title>Interactive World Map</title>
      </Head>
      <Globe />
    </>
  );
}

export default Home;
