'use client'
import Dropdown from "@/components/UI/Dropdown"
import { GEN_COUNTS } from "@/helpers/consts"
import { useState } from "react";

function Pokedex() {
	const [currentGen, setCurrentGen] = useState(0);
	const currentGenText = currentGen == 0 ? "All Gens" : "Gen " + currentGen
	
  return (
    <main className="flex flex-col items-center w-[95vw] h-screen max-w-4xl min-w-[324px]">
        <header className="flex flex-wrap w-full items-center h-18 max-h-16 gap-6 p-4 rounded-t-xl bg-stone-200 dark:bg-stone-900">
            <h1 className="font-black text-3xl text-stone-700 dark:text-white">
                Pokédex
            </h1>
            <div className="h-[24px] w-[1px] bg-neutral-500 "/>
            <Dropdown 
                className="w-[110px]"
								selectedClassName="justify-between hover:bg-stone-200 dark:hover:bg-stone-900 dark:hover:text-indigo-300 hover:text-indigo-700"
                selected={[currentGenText]} 
                listItems = {[<button onClick={() => setCurrentGen(0)} className="w-full px-4 py-2 text-left">All Gens</button>, ...
                    Array(GEN_COUNTS.length)
                        .fill(<li></li>)
                        .map((item, i) => (
                            <button className="w-full px-4 py-2 text-left" onClick={() => setCurrentGen(i + 1)}>
															Gen {i+1}
														</button>
                        ))]} 
            />
            <div className="h-[24px] w-[1px] bg-neutral-500 "/>
						<label className="input flex items-center gap-2">
  						<input type="text" className="p-1 focus:outline-none border border-stone-300 focus:border-indigo-400" placeholder="Search" />
  						<button className="bg-indigo-400 hover:bg-indigo-500">
								<i className="fa fa-search p-[10px] text-white"/>
							</button>
						</label>
        </header>

    </main>
  )
}

export default Pokedex