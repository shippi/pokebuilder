import type { Metadata, Viewport } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import TanstackProvider from "@/context/TanstackProvider";

export const metadata: Metadata = {
  title: "PokéBuilder",
  description: "",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width'
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </head>
    <body className={inter.className + " flex flex-col items-center overflow-auto bg-[linear-gradient(to_top,rgba(229,231,235,0.98),rgba(249,250,251,1)),url('/halftone.svg')] bg-bottom h-screen dark:bg-[linear-gradient(to_top,rgba(9,9,11,0.9),rgba(38,38,38,1)),url('/halftone.svg')]"}>
      <ThemeProvider attribute="class" defaultTheme="system">
          <TanstackProvider>
            <NavBar/>
            {children}
          </TanstackProvider>
      </ThemeProvider>
    </body>
  </html>
  );
}
