import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "@/context/ThemeContext";
import Html from "@/components/Html";

export const metadata: Metadata = {
  title: "Pokébuilder",
  description: "",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <ThemeContextProvider>
        <Html children={children}/>
      </ThemeContextProvider>
      
  );
}
