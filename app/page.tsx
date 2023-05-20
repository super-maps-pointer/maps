"use client";
import { useCallback, useState } from "react";
import Game from "@/app/game";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IntroductionScreen from "@/app/introduction-screen";
import { Level } from "@/utils/countries";

function Home() {
  const [showIntroduction, setShowIntroduction] = useState(true);

  const handlePlay = useCallback(() => {
    setShowIntroduction(false);
  }, []);

  return (
    <>
      <ToastContainer position="bottom-left" autoClose={2000} hideProgressBar />
      <Head>
        <title>Interactive World Map</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {showIntroduction ? (
        <IntroductionScreen onPlay={handlePlay} />
      ) : (
        <Game level={Level.One} />
      )}
    </>
  );
}

export default Home;
