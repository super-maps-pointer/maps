"use client";
import Game from "@/app/game";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
      <Head>
        <title>Interactive World Map</title>
      </Head>
      <Game />
    </>
  );
}

export default Home;
