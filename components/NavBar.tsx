'use client'

import Link from "next/link"
import Dropdown from "./UI/Dropdown";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <nav className="flex items-center absolute top-[20px] left-1/2 transform -translate-x-1/2 max-w-[700px] min-w-[324px] w-[90vw] h-12 bg-white z-20 rounded-full border-2 drop-shadow-md dark:bg-stone-900 dark:text-white dark:border-stone-700">
      <Link href="" className="flex items-center justify-center w-[150px] h-full rounded-l-full hover:bg-gray-200  dark:hover:bg-stone-700">Pokédex</Link>
      <Link href="" className="flex items-center justify-center w-[150px] h-full hover:bg-gray-200  dark:hover:bg-stone-700">Team Builder</Link>
      
      <div className="flex items-center h-full ml-auto">
        <div className="h-[24px] w-[1px] mx-2 bg-neutral-200 "/>
        <Dropdown 
          selected={[
            theme == "dark" ? <i key="selected" className="bi bi-moon dark:text-white"/> : <i key="selected" className="bi bi-sun dark:text-white"/>
          ]}
          listItems={[
            <li key="light">
              <button className="flex justify-center w-full px-4 py-2 text-lg hover:bg-gray-100 dark:hover:bg-stone-700" onClick={() => setTheme("light")}>
                <i className="bi bi-sun "/>
              </button>
            </li>,
            <li key="dark">
              <button className="flex justify-center w-full px-4 py-2 text-lg hover:bg-gray-100 dark:hover:bg-stone-700" onClick={() => {setTheme("dark")}}>
                <i className="bi bi-moon"/>
              </button>
            </li>
          ]}
        />
        <Link href="https://github.com/shippi" target="_blank" className="flex items-center justify-center w-[70px] h-full rounded-r-full text-xl hover:bg-gray-200  dark:hover:bg-stone-700">
          <i className="bi bi-github text-stone-500 dark:text-white"/>
        </Link>
      </div>


    </nav>
    </>

  )
}

export default NavBar