'use client'
import Dropdown from "@/components/UI/Dropdown";
import { TeamPlannerContextProvider } from "@/context/TeamPlannerContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PokemonSelect from "./PokemonSelect";
import Spinner from "../UI/Spinner";
import { Link } from "@/helpers/types";
import { GEN_COUNTS } from "@/helpers/consts";
import useCalculateSectionHeight from "@/hooks/usCalculateSectionHeight";

export default function TeamPlanner() {
  const { data, isLoading, isError } = useQuery({
		queryKey: ["pokemon"],
		queryFn: async() => {
			const { data } = await axios.get(process.env.NEXT_PUBLIC_POKEMON_API + "pokemon?limit=" + GEN_COUNTS.reduce((a, b) => a + b, 0));
			return data.results as Link[];
		}
	});
  const sectionHeight = useCalculateSectionHeight();

  return (
    <main className="flex flex-col items-center w-[95vw] h-screen max-w-5xl min-w-[324px]">
      <header className="flex flex-wrap w-full items-center h-18 gap-x-6 gap-y-2 p-4 rounded-t-xl bg-stone-200 dark:bg-stone-900">
          <h1 className="font-black text-3xl text-stone-700 dark:text-white">
            Team Planner
          </h1>
        </header>
        <section 
					className={`flex flex-wrap items-center justify-center gap-x-8 overflow-scroll w-full gap-x-4 gap-y-12 px-8 py-8 bg-stone-100 dark:bg-stone-800`} 
					style={{maxHeight: sectionHeight}}
				>
          {
						isLoading ?
						<Spinner/> :
						<TeamPlannerContextProvider>
							<PokemonSelect pokemonList={data || []}/>
          	</TeamPlannerContextProvider>
					}
        </section>
    </main>
  )
}