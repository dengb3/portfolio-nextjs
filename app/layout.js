"use client";
import { ThemeProvider } from "./Context/ThemeProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./Components/NavBar.jsx";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Deng Benjamin | Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>
          <Head>
            <title>Deng Benjamin | Portfolio</title>
          </Head>
          <NavBar />
          <main>{children}</main>
        </body>
      </ThemeProvider>
    </html>
  );
}
