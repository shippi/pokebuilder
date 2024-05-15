'use client'
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NavBar from "./NavBar";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();

function Html({ children }: PropsWithChildren<{}>) {
  return (
		<html lang="en">
			<head>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"/>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
			</head>
			<body className={inter.className + " flex flex-col items-center bg-[linear-gradient(to_top,rgba(229,231,235,0.98),rgba(249,250,251,1)),url('/halftone.svg')] bg-bottom h-screen dark:bg-[linear-gradient(to_top,rgba(9,9,11,0.98),rgba(38,38,38,1)),url('/halftone.svg')]"}>
					<NavBar/>
					<QueryClientProvider client={queryClient}>
						{children}
					</QueryClientProvider>
			</body>
		</html>
  )
}

export default Html