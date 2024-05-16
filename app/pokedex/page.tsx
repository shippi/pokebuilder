'use client'
import { GEN_COUNTS } from "@/helpers/consts"
import { RefObject, useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { PokemonData } from "@/helpers/types";
import axios from "axios";
import Dropdown from "@/components/UI/Dropdown"
import Spinner from "@/components/UI/Spinner";
import PokemonCard from "@/components/UI/PokemonCard";
import useWindowSizeChange from "@/hooks/useWindowSizeChange";

function Pokedex() {
	const [currentGen, setCurrentGen] = useState(0);
	const [sectionHeight, setSectionHeight] = useState("100px");

	const { data, isLoading, isError } = useQuery({
		queryKey: ["pokemon"],
		queryFn: async() => {
			const { data } = await axios.get(process.env.NEXT_PUBLIC_POKEMON_API + "pokemon?limit=" + GEN_COUNTS.reduce((a, b) => a + b, 0));
			return data.results as PokemonData[];
		}
	});

	const listRef = useRef<HTMLElement>(null);

	const currentGenText = currentGen == 0 ? "All Gens" : "Gen " + currentGen
	const currentGenStart = [...GEN_COUNTS].slice(0, currentGen).reduce((a, b) => a + b, 0);
	const currentGenEnd = currentGenStart + GEN_COUNTS[currentGen] || GEN_COUNTS.reduce((a, b) => a + b, 0);

	const calculateSectionHeight = () => {
		const bottom = document.getElementsByTagName("html")[0].getBoundingClientRect().bottom;
		const top = document.getElementsByTagName("section")[0].getBoundingClientRect().top;
		console.log(`${bottom-top}px`)
		return `${bottom-top}px`;
	}

	const scrollToRef = (ref: RefObject<HTMLElement>) => {
		if (ref?.current) {
			ref.current.scroll({
				top: 0,
				behavior: "smooth"
			})
		}
	}

	useWindowSizeChange(() => {	setSectionHeight(calculateSectionHeight()) })

	useEffect(() => {
		setSectionHeight(calculateSectionHeight());
	}, []);

	useEffect(() => {
		scrollToRef(listRef);
	}, [currentGen]);

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
                    Array(GEN_COUNTS.length - 1)
                        .fill(<li></li>)
                        .map((item, i) => (
                            <button className="w-full px-4 py-2 text-left" onClick={() => setCurrentGen(i + 1)}>
															Gen {i+1}
														</button>
                        ))]} 
            />
            <div className="h-[24px] w-[1px] bg-neutral-500 "/>
						<label className="input flex items-center gap-2">
  						<input type="text" className="duration-0 p-1 focus:outline-none border border-stone-300 dark:border-stone-600 focus:border-indigo-400 dark:focus:border-indigo-400" placeholder="Search" />
  						<button className="duration-0 bg-indigo-400 hover:bg-indigo-500">
								<i className="fa fa-search p-[9px] text-white"/>
							</button>
						</label>
        </header>
				<section className={`flex flex-wrap overflow-scroll justify-around w-full gap-x-2 gap-y-12 p-4 bg-stone-800 sm:gap-x-6 ${isLoading && "justify-center items-center"}`} style={{height: sectionHeight}} ref={listRef}>
					{
						isLoading ? 
						<Spinner/>
						:
						data?.slice(currentGenStart, currentGenEnd).map(item => <PokemonCard pokemonData={item}/>)
					}			
				</section>
    </main>
  )
}

export default Pokedex