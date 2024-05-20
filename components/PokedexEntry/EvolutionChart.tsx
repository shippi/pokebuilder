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
			return data;
		}
	});

  return (
    <div>
      
    </div>
  )
}

function formatEvolutionChain(data: any) {
  let evolutionChain: any[] = [];
  
  const formatStage = (data: any, evolutionChain: any[]) => {
    if (!data) return;

    const stage = {
      species: data.species.name,
      evolutionDetails: {
        evolutionBy: data.evolution_details[0].trigger.name,
        requirement: data.evolution_details[0].min_level
      }
    }

    evolutionChain.push(stage);

    data.evolves_to.forEach((item: any) => {
      formatStage(item, evolutionChain)
    });
  }

  formatStage(data, evolutionChain);

  return evolutionChain;
}

export default EvolutionChart