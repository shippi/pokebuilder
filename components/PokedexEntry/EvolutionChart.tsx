import { EvolutionRequirement, EvolutionStage } from "@/helpers/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import EvolutionCard from "./EvolutionCard";

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
  
  const evolutionChain = formatEvolutionChain(data?.evolves_to);

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold">Evolutions</h1>
      <div className="w-full h-[1px] bg-stone-500 mt-2 mb-6"/>
        {
          (data && evolutionChain.length > 0) ? 
          <div className="flex gap-x-4 py-8 items-center w-full overflow-x-scroll text-sm">
            <EvolutionCard evolutionStage={{id: data.species.url.split("/").slice(-2)[0], species: data.species.name}} />
            {
              evolutionChain.map((item: any) => {
                return (
                  <>
                  <span className="text-4xl">⟶</span>
                  { EvolutionBranch(item) }
                  </>
              )})
            }
          </div>
          :
          <>This Pokémon does not evolve.</>
        }
      </div>
  )
}

function formatEvolutionChain(data: any) {
  let evolutionChain: any[] = [];
  
  const formatRequirments = (data: any) => {
    let requirements: EvolutionRequirement[] = [];
    let invalidTriggers = ["location", "min_affection"];
    data.forEach((details: any) => {
      details = Object.entries(details);
      details.slice(0, -2).forEach((element: string[]) => {
        if (element[1] && !invalidTriggers.includes(element[0])) {
          if (Object.entries(element[1]).length > 1) element[1] = Object.entries(element[1])[0][1];
          requirements.push({
            trigger: element[0],
            value: element[1]
          })
          invalidTriggers.push(element[0]);       
        }
      });

      if (requirements.length < 1 && details[16][1].name != "level-up") requirements.push({trigger: details[16][1].name, value: ""})
    });

    return requirements;
  }

  const formatStage = (data: any, evolutionChain: any[]) => {
    if (!data) return;

    let chain: any[] = [];

    data.forEach((item: any) => {
      formatStage(item.evolves_to, evolutionChain);
      const stage = {
        species: item.species.name,
        id: item.species.url.split("/").slice(-2)[0],
        requirements: formatRequirments(item.evolution_details)
      }

      chain.push(stage);
    });

    if (chain.length > 0) evolutionChain.unshift(chain);
  }

  formatStage(data, evolutionChain);

  return evolutionChain;
}

function EvolutionBranch(children: EvolutionStage[]) {
  return (
    <div className="flex flex-wrap flex-col max-h-[780px] justify-center items-center gap-x-6 gap-y-12">
      {
        children.map(item => (
          <EvolutionCard key={item.id} evolutionStage={item}/>
        ))
      }
    </div>
  )
}


export default EvolutionChart