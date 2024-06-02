import { EvolutionStage, Link } from "@/helpers/types";
import EvolutionCard from "./EvolutionCard";

interface Props {
  evolutionData: any
}

export default function Evolution({ evolutionData } : Props) {
  const id = evolutionData.species.url.split("/").slice(-2)[0];
  const name = evolutionData.species.name;
  const requirements = formatRequirments(evolutionData.evolution_details);
  
  const evolutionStage = {
    id: id,
    species: name,
    requirements: requirements
  } as EvolutionStage;

  return (
    <div className="flex items-center gap-x-4">
      <EvolutionCard evolutionStage={evolutionStage}/>
      { evolutionData.evolves_to.length > 0 && "⟶" }
      {
        evolutionData.evolves_to?.map((evolution: any, i: number) => (
          <Evolution key={i} evolutionData={evolution}/>
        ))
      }
    </div>
  )
}

const formatRequirments = (data: any) => {
  let requirements: any[] = [];
  let invalidTriggers = ["location"];

  for (const details of data) {
    if (details.location) continue;

    const detailsEntries = Object.entries(details).filter(value => !invalidTriggers.includes(value[0]) && value[1]);
    if (detailsEntries.length < 1) continue;
    
    let req: any = {};
    for (const detail of detailsEntries) {
      if (Object.keys(req).length > 0 && detail[0] == "trigger") continue;
      if (typeof detail[1] == "number" || typeof detail[1] == "string") {
        req[detail[0]] = detail[1];
      }
      else {
        req[detail[0]] = (detail[1] as Link).name;
      }
      
    }
    requirements.push(req)
  }
  return requirements;
}
