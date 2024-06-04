'use client'
import { GEN_COUNTS } from "@/helpers/consts"
import { RefObject, useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { PokemonData } from "@/helpers/types";
import axios from "axios";
import Dropdown from "@/components/UI/Dropdown"
import Spinner from "@/components/UI/Spinner";
import PokemonCard from "@/components/UI/PokemonCard";
import SearchBar from "@/components/UI/SearchBar";
import useCalculateSectionHeight from "@/hooks/usCalculateSectionHeight";

function Pokedex() {
	const [currentGen, setCurrentGen] = useState(0);
	const [search, setSearch] = useState("");

	const { data, isLoading, isError } = useQuery({
		queryKey: ["pokemon"],
		queryFn: async() => {
			const { data } = await axios.get(process.env.NEXT_PUBLIC_POKEMON_API + "pokemon?limit=" + GEN_COUNTS.reduce((a, b) => a + b, 0));
			return data.results as PokemonData[];
		}
	});

	const sectionHeight = useCalculateSectionHeight();
	const listRef = useRef<HTMLElement>(null);

	const currentGenText = currentGen == 0 ? "All Gens" : "Gen " + currentGen
	const currentGenStart = [...GEN_COUNTS].slice(0, currentGen).reduce((a, b) => a + b, 0);
	const currentGenEnd = currentGenStart + GEN_COUNTS[currentGen] || GEN_COUNTS.reduce((a, b) => a + b, 0);

	const scrollToRef = (ref: RefObject<HTMLElement>) => {
		if (ref?.current) {
			ref.current.scroll({
				top: 0,
				behavior: "smooth"
			})
		}
	}
	
	useEffect(() => {
		document.title = `Pokédex | PokéBuilder`
	}, []);

	useEffect(() => {
		scrollToRef(listRef);
	}, [currentGen, search]);

  return (
    <main className="flex flex-col items-center w-[95vw] h-screen max-w-4xl min-w-[324px]">
      <header className="flex flex-wrap w-full justify-between items-center h-18 gap-x-6 gap-y-2 p-4 rounded-t-xl bg-stone-200 dark:bg-stone-900">
				<h1 className="font-black text-3xl text-stone-700 dark:text-white">
					Pokédex
				</h1>
            
				<div className="flex flex-wrap  items-center gap-x-6 gap-y-3">
					<Dropdown 
						className="min-w-[100px]"
						selectedClassName="min-w-[100px] justify-between px-2 hover:bg-transparent hover:text-indigo-700 dark:hover:bg-transparent dark:hover:text-indigo-300 "
						selected={[currentGenText]} 
						listItems = {[<button onClick={() => setCurrentGen(0)} className="w-full px-4 py-2 text-left">All Gens</button>, ...
							Array(GEN_COUNTS.length - 1)
								.fill(<li></li>)
								.map((item, i) => (
									<button key={i} className="w-full px-4 py-2 text-left" onClick={() => setCurrentGen(i + 1)}>
										Gen {i+1}
									</button>
						))]} 
					/>
					<div className="h-[24px] w-[1px] bg-neutral-500 "/>
					<SearchBar setSearchFn={setSearch}/>
				</div>
      </header>
			<section className={`flex flex-wrap overflow-scroll justify-around w-full gap-x-4 gap-y-12 px-8 py-8 bg-stone-100 dark:bg-stone-800 ${isLoading && "justify-center items-center"}`} style={{maxHeight: sectionHeight}} ref={listRef}>
				{
					isLoading ? 
					<Spinner/>
					:
					data?.
						slice(currentGenStart, currentGenEnd)
						.filter(item => item.name.includes(search.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()) || search.replace(/\D/g,'') && item.url.split("/").slice(-2, -1)[0].includes(search.replace(/\D/g,'')))
						.map(item => <PokemonCard key={item.name} pokemonData={item}/>)
				}			
			</section>
    </main>
  )
}

export default Pokedex