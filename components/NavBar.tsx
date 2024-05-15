'use client'

import Link from "next/link"
import Dropdown from "./UI/Dropdown";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <nav className="flex items-center my-6 max-w-[700px] min-w-[324px] w-[90vw] h-12 max-h-10 bg-white z-20 rounded-full border-2 drop-shadow-md dark:bg-stone-900 dark:text-white dark:border-stone-700">
      <Link href="/" className="flex items-center justify-center px-8 h-full rounded-l-full hover:bg-gray-200  dark:hover:bg-stone-700">Home</Link>
      <Link href="/pokedex" className="flex items-center px-8 justify-center h-full hover:bg-gray-200  dark:hover:bg-stone-700">Pokédex</Link>
      <Link href="/planner" className="flex items-center px-8 justify-center h-full hover:bg-gray-200  dark:hover:bg-stone-700">Team Builder</Link>
      
      <div className="flex items-center h-full ml-auto">
        <div className="h-[24px] w-[1px] mx-2 bg-neutral-200 "/>
        <Dropdown 
          listItemClassName="justify-center text-lg"
          selected={[
            theme == "dark" ? <i key="selected" className="bi bi-moon text-xl"/> : <i key="selected" className="bi bi-sun text-xl"/>
          ]}
          listItems={[
              <button className="w-full py-2" onClick={() => setTheme("light")}>
                <i className="bi bi-sun "/>
              </button>
            ,
              <button className="w-full py-2" onClick={() => {setTheme("dark")}}>
                <i className="bi bi-moon"/>
              </button>
          ]}
        />
        <Link href="https://github.com/shippi" target="_blank" className="flex items-center justify-center w-[70px] h-full rounded-r-full text-xl hover:bg-gray-200  dark:hover:bg-stone-700">
          <i className="bi bi-github text-stone-500 dark:text-white"/>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar