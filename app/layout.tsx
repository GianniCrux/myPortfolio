import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { ThemeProvider } from 'next-themes'


export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Giovanni Di Stefano's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider attribute="class">        
        <main>
          <Navbar />
          {children}
        </main>
      </ThemeProvider>
      </body>
    </html>
  );
}
