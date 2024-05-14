'use client'

import Link from "next/link"
import Dropdown from "./UI/Dropdown";

function NavBar() {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
      <nav className="flex items-center absolute top-[20px] left-1/2 transform -translate-x-1/2 max-w-[700px] min-w-[324px] w-[90vw] h-12 bg-white z-20 rounded-full border-2 drop-shadow-md">
      <Link href="" className="flex items-center justify-center w-[150px] h-full rounded-l-full hover:bg-gray-200">Pokédex</Link>
      <Link href="" className="flex items-center justify-center w-[150px] h-full hover:bg-gray-200">Team Builder</Link>
      
      <div className="flex items-center h-full ml-auto">
        <div className="h-[24px] w-[1px] mx-2 bg-neutral-200 "/>
        <Dropdown 
          selected={[
            <i key="selected" className="bi bi-sun"/>
          ]}
          listItems={[
            <li key="light">
              <button className="flex justify-center w-full px-4 py-2 text-lg hover:bg-gray-100">
                <i className="bi bi-sun "/>
              </button>
            </li>,
            <li key="dark">
              <button className="flex justify-center w-full px-4 py-2 text-lg hover:bg-gray-100">
                <i className="bi bi-moon"/>
              </button>
            </li>
          ]}
        />
        <Link href="https://github.com/shippi" target="_blank" className="flex items-center justify-center w-[70px] h-full rounded-r-full text-xl hover:bg-gray-200">
          <i className="bi bi-github text-stone-500"/>
        </Link>
      </div>


    </nav>
    </>

  )
}

export default NavBar