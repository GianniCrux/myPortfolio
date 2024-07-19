import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/navbar";
import RoadmapScrollbar from "./components/roadmapScrollbar";
import AOSInit from "./_components/AOSInit";
import { ThemeProvider } from "next-themes";


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
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-white dark:bg-black">  
      <ThemeProvider attribute="class">   
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
