'use client'
import { Inter } from "next/font/google";
import { PropsWithChildren, useContext } from "react";
import NavBar from "./NavBar";
import { ThemeContext } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

function Html({ children }: PropsWithChildren<{}>) {
	const { theme } = useContext(ThemeContext);

  return (
		<html lang="en" className={theme}>
			<body className={inter.className + " bg-[linear-gradient(to_top,rgba(229,231,235,0.98),rgba(249,250,251,1)),url('/halftone.svg')] bg-bottom h-screen dark:bg-[linear-gradient(to_top,rgba(9,9,11,0.98),rgba(38,38,38,1)),url('/halftone.svg')]"}>
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"/>
				<NavBar/>
				{children}
			</body>
		</html>
  )
}

export default Html