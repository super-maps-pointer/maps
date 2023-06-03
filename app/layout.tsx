"use client";
import "./globals.css";
import { Raleway } from "next/font/google";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const raleway = Raleway({ weight: "400", subsets: ["latin"] });

const theme = extendTheme({
  fonts: {
    body: raleway.style.fontFamily,
    heading: raleway.style.fontFamily,
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </body>
    </html>
  );
}
