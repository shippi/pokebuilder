'use client'

import Link from "next/link"
import Dropdown from "./UI/Dropdown";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function NavBar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="flex items-center my-6 max-w-[700px] min-w-[324px] w-[90vw] h-12 max-h-10 bg-white z-20 rounded-full border-2 drop-shadow-md dark:bg-stone-900 dark:text-white dark:border-stone-700">
      <Link href="/" className="flex items-center justify-center px-8 h-full rounded-l-full hover:bg-gray-200  dark:hover:bg-stone-700">Home</Link>
      <Link href="/pokedex" className="flex items-center px-8 justify-center h-full hover:bg-gray-200  dark:hover:bg-stone-700">Pokédex</Link>
      <Link href="/planner" className="flex items-center px-8 justify-center h-full hover:bg-gray-200  dark:hover:bg-stone-700">Team Planner</Link>
      
      <div className="flex items-center h-full ml-auto">
        <div className="h-[24px] w-[1px] mx-2 bg-neutral-200 "/>
        <Dropdown 
          listItemClassName="justify-center text-lg"
          selected={[
            resolvedTheme == "dark" && mounted ? <i key="selected" className="bi bi-moon text-xl"/> : mounted ? <i key="selected" className="bi bi-sun text-xl"/> : <i key="selected" className="w-5 h-7"/>
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