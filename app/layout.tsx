import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Super Maps Pointer",
  description: "Guess the country while the map is changing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
