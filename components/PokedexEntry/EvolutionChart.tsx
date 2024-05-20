import { capitalizeString } from "@/helpers/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
  
  const evolutionChain = formatEvolutionChain(data?.evolves_to)
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold">Evolutions</h1>
      <div className="w-full h-[1px] bg-stone-500 my-2"/>
      {
        data && 
        <div className="flex gap-x-12 items-center">
        <div className="flex flex-col items-center">
          {
            <>
            <img 
              className="w-36"
              src={`${process.env.NEXT_PUBLIC_OFFICIAL_SRC + data?.species.url.split("/").slice(-2)[0] + ".png"}`}
            />
            { capitalizeString(data?.species.name) }
            </>
          }
        </div>
        {
          evolutionChain.map((item: any, i: number) => {
            return (
              EvolutionStage(item)
            )
          })
        }
      </div>
      }
      
    </div>
  )
}

function formatEvolutionChain(data: any) {
  let evolutionChain: any[] = [];
  
  const formatStage = (data: any, evolutionChain: any[]) => {
    let chain: any[] = []
    
    if (!data) return;

    data.forEach((item: any) => {
      formatStage(item.evolves_to, evolutionChain);
      const stage = {
        species: item.species.name,
        id: item.species.url.split("/").slice(-2)[0]
      }
      
      chain.push(stage);
    });

    if (chain.length > 0) evolutionChain.push(chain);
  }

  formatStage(data, evolutionChain);

  return evolutionChain.reverse();
}

function EvolutionStage(children: any[]) {
  return (
    <div className="flex flex-col items-center gap-y-24">
      {
        children.map(item => (
          <div className="flex flex-col items-center">
            <img 
              className="w-36"
              src={`${process.env.NEXT_PUBLIC_OFFICIAL_SRC + item.id + ".png"}`}
            />
            {capitalizeString(item.species)}
          </div>
        ))
      }
    </div>
  )
}

export default EvolutionChart