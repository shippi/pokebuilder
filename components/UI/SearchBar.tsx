'use client'

import useOnKeyPress from "@/hooks/useOnKeyPress";
import { useRef, useState } from "react";

interface Props {
  setSearchFn: Function
}

function SearchBar({ setSearchFn }: Props) {
  const [search, setSearch] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  useOnKeyPress(["Enter"], () => { if (document.activeElement === searchRef.current) setSearchFn(search) });
  
  return (
  	<label className="input flex items-center gap-2">
      <input 
        type="text" 
        className="duration-0 p-1 focus:outline-none border border-stone-300 dark:border-stone-600 focus:border-indigo-400 dark:focus:border-indigo-400" 
        placeholder="Search"
        onChange={e => setSearch(e.target.value)} 
        ref={searchRef}
      />
      <button 
        className="duration-0 bg-indigo-400 hover:bg-indigo-500"
        onClick={() => setSearchFn(search)}
      >
        <i className="fa fa-search p-[9px] text-white"/>
      </button>
    </label>
  )
}

export default SearchBar