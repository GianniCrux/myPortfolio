import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/navbar";
import RoadmapScrollbar from "./components/roadmapScrollbar";
import { Providers } from "./_components/providers";


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
      <body suppressHydrationWarning>  
      <Providers>     
        <main>
          <Navbar />
          <RoadmapScrollbar sections={sections} />
          {children}
        </main>
        </Providers>
      </body>
    </html>
  );
}
