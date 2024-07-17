import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { ThemeProvider } from 'next-themes'
import AOSInit from "./_components/AOSInit";
import RoadmapScrollbar from "./components/roadmapScrollbar";


export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Giovanni Di Stefano's Portfolio",
};

const sections = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider attribute="class">   
        <AOSInit />     
        <main>
          <Navbar />
          <RoadmapScrollbar sections={sections} />
          {children}
        </main>
      </ThemeProvider>
      </body>
    </html>
  );
}
