import { EvolutionRequirement } from "@/helpers/types";
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
  
  const evolutionChain = formatEvolutionChain(data?.evolves_to);

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold">Evolutions</h1>
      <div className="w-full h-[1px] bg-stone-500 mt-2 mb-6"/>
        {
          data && 
          <div className="flex gap-x-4 items-center w-full overflow-x-scroll text-sm">
          <div className="flex flex-col items-center gap-y-2 p-4 w-[200px] rounded-3xl bg-gradient-to-t from-stone-300 dark:from-stone-900">
            {
              <>
              <div className="h-[20px]"/>
              <img 
                className="min-w-20 w-20"
                src={`${process.env.NEXT_PUBLIC_OFFICIAL_SRC + data?.species.url.split("/").slice(-2)[0] + ".png"}`}
              />
              <span className="font-semibold">{ capitalizeString(data?.species.name) }</span>
              </>
            }
          </div>
          {
            evolutionChain.map((item: any) => {
              return (
                <>
                <span className="text-4xl">⟶</span>
                {EvolutionStage(item)}
                </>
            )})
          }
        </div>
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
          invalidTriggers.push(element[0])
        }
      })

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

    if (chain.length > 0) evolutionChain.push(chain);
  }

  formatStage(data, evolutionChain);

  return evolutionChain.reverse();
}

function EvolutionStage(children: any[]) {
  return (
    <div className="flex flex-wrap flex-col max-h-[780px] justify-center items-center gap-x-6 gap-y-12 pb-8">
      {
        children.map(item => (
          <div className="flex flex-col gap-y-2 items-center p-4 w-[200px] rounded-3xl bg-gradient-to-t from-stone-300 dark:from-stone-900">
            {
              <ul className="h-10">
              {
                item.requirements.map((requirement: any) => (
                  <li className="py-[2px] text-xs">
                    <span className="font-bold">
                    {
                      `${mapTrigger(requirement.trigger)}: `
                    }
                    </span>
                    {
                      mapValue(requirement.value)
                    }
                  </li>
                ))
              }
              </ul>
            }
            <img 
              className="max-w-20"
              src={`${process.env.NEXT_PUBLIC_OFFICIAL_SRC + item.id + ".png"}`}
            />
            <span className="font-semibold">{capitalizeString(item.species)}</span>
          </div>
        ))
      }
    </div>
  )
}

function mapTrigger(trigger: string) {
  switch (trigger) {
    case "min_level":
      return "Level"
    case "min_happiness":
      return "Friendship"
    case "time_of_day":
      return "Time of Day"
    case "item":
      return "Item"
    case "known_move_type":
      return "Move Type Learned"
    case "held_item":
      return "Held Item"
    case "gender":
      return "Gender"
    default: 
      return trigger
  }
}

function mapValue(value: string | number) {
  if (value == '1') return "Female";
  if (value == '2') return "Male";
  if (typeof value == 'number') return value
  if (value == "d") return "Daytime";
  if (value == "n") return "Nighttime";
  
  return (capitalizeString(value))
}

export default EvolutionChart