'use client'


import PokemonStats from "@/components/PokedexEntry/PokemonStats";
import { capitalizeString } from "@/helpers/utils";
import useCalculateSectionHeight from "@/hooks/usCalculateSectionHeight";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PokedexData from "@/components/PokedexEntry/PokedexData";
import TypeDefenses from "@/components/PokedexEntry/TypeDefenses";
import { useEffect } from "react";
import EvolutionChart from "@/components/PokedexEntry/EvolutionChart";
import TrainingData from "@/components/PokedexEntry/TrainingData";

interface Props {
  params: {
    id: string
  }
}

function PokemonInfo({params: {id}}: Props) {
  const { data, isLoading, error, isError } = useQuery({
		queryKey: ["currPokemon"],
		queryFn: async() => {
			const { data } = await axios.get(process.env.NEXT_PUBLIC_POKEMON_API + `pokemon/${id}`);
			return data;
		}
	});

  const species = useQuery({
    queryKey: ["species"],
    queryFn: async() => {
			const { data } = await axios.get(process.env.NEXT_PUBLIC_POKEMON_API + `pokemon-species/${id}`);
			return data;
		}
  });

  const sectionHeight = useCalculateSectionHeight();

  useEffect(() => {
    if (data) document.title = `${capitalizeString(data.name)} | PokéBuilder`
  }, [data])
  return (
      <main className="flex flex-col items-center w-[95vw] h-screen max-w-5xl min-w-[324px]">
        <header className="flex flex-wrap w-full items-center h-18 gap-x-6 gap-y-2 p-4 rounded-t-xl bg-stone-200 dark:bg-stone-900">
          <h1 className="font-black text-3xl text-stone-700 dark:text-white">
            { 
              (!isLoading && data) ? capitalizeString(data.species.name) : 
              (isError) ? "Not Found" :
              "..."
            }
          </h1>
          <h2 className="text-stone-500">
            { (!isLoading && data) ? `#${id.padStart(4, "0")}` : "#????"}
          </h2>
        </header>
        <section className={`flex flex-wrap items-center justify-center overflow-scroll w-full gap-x-4 gap-y-12 px-8 py-8 bg-stone-100 dark:bg-stone-800 ${isLoading && "justify-center items-center"}`} style={{maxHeight: sectionHeight}}>
            {
              (!isLoading && !species.isLoading && data && species.data) &&
              <>
                <img className="h-80" src={`${process.env.NEXT_PUBLIC_OFFICIAL_SRC + id + ".png"}`}/>
                <PokedexData className="self-start grow" data={data} speciesData={species.data}/>
                <TrainingData className="self-start grow" data={data} speciesData={species.data}/>
                <TypeDefenses typing={data.types} abilities={data.abilities}/>
                <PokemonStats stats={data.stats}/>
                <EvolutionChart speciesData={species.data}/>
              </>
            }
        </section>
      </main>
  )
}

export default PokemonInfo