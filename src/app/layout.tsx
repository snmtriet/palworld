import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "../components";

export const metadata: Metadata = {
  title: "Palworld Database and Tools",
  description:
    "The most comprehensive Palworld database and wiki with all informations on Pals, breeding, items, weapons, structures, an interactive map and much more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="main-layout">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
