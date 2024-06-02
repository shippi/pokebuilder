import { EvolutionRequirement, EvolutionStage, Link } from "@/helpers/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import EvolutionCard from "./EvolutionCard";
import Evolution from "./Evolution";

interface Props {
  speciesData: any
}

function EvolutionChart({ speciesData } : Props) {
  const { data, isLoading, isError } = useQuery({
		queryKey: ["evolutions"],
		queryFn: async() => {
      const { data } = await axios.get(speciesData.evolution_chain.url)
			return data.chain;
		}
	});

  const firstStage = {
    id: data?.species.url.split("/").slice(-2)[0],
    species: data?.species.name
  } as EvolutionStage;

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold">Evolutions</h1>
      <div className="w-full h-[1px] bg-stone-500 mt-2 mb-6"/>
          {
            data?.evolves_to.length < 1 ?
            "This Pokémon does not evolve." :
            <div className="flex gap-x-4 py-8 items-center w-full overflow-x-scroll text-sm">
            <EvolutionCard evolutionStage={firstStage}/>
            ⟶
            <div className="flex flex-wrap flex-col max-h-[780px] justify-center items-center gap-x-6 gap-y-12">
              {
                data?.evolves_to.map((evolution: any, i: number) => (
                  <Evolution key={i} evolutionData={evolution}/>
                ))
              }
              </div>
            </div>
          }
      </div>
  )
}

export default EvolutionChart