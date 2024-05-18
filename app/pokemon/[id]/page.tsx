'use client'

import { capitalizeString } from "@/helpers/utils";
import useCalculateSectionHeight from "@/hooks/usCalculateSectionHeight";
import useSetSectionHeight from "@/hooks/usCalculateSectionHeight";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Props {
  params: {
    id: string
  }
}

function PokemonInfo({params: {id}}: Props) {
  const { data, isLoading, isError } = useQuery({
		queryKey: ["currPokemon"],
		queryFn: async() => {
			const { data } = await axios.get(process.env.NEXT_PUBLIC_POKEMON_API + `pokemon/${id}`);
			return data;
		}
	});

  const sectionHeight = useCalculateSectionHeight();

  return (
      <main className="flex flex-col items-center w-[95vw] h-screen max-w-4xl min-w-[324px]">
        <header className="flex flex-wrap w-full items-center h-18 gap-x-6 gap-y-2 p-4 rounded-t-xl bg-stone-300 dark:bg-stone-900">
          <h1 className="font-black text-3xl text-stone-700 dark:text-white">
            { 
              (!isLoading && data) ? capitalizeString(data.species.name) : 
              (!isLoading && !data) ? "Not Found" :
              "..."
            }
          </h1>
          <h2 className="text-stone-500">
            { (!isLoading && data) && `#${id.padStart(4, "0")}`}
          </h2>
        </header>
        <section className={`flex flex-wrap overflow-scroll justify-around w-full gap-x-4 gap-y-12 px-8 py-8 bg-neutral-200 dark:bg-stone-800 ${isLoading && "justify-center items-center"}`} style={{height: sectionHeight}}>
        </section>
      </main>
  )
}

export default PokemonInfo