import { EvolutionRequirement, EvolutionStage } from "@/helpers/types"
import { capitalizeString } from "@/helpers/utils"

interface Props {
  evolutionStage: EvolutionStage,
  requirementsIndex?: number
}

export default function EvolutionCard({ evolutionStage, requirementsIndex } : Props) {
  const reqs = evolutionStage.requirements ? Object.entries(evolutionStage.requirements[requirementsIndex || 0]) : undefined;
  console.log(reqs)
  return (
    <a href={`/pokemon/${evolutionStage.id}`}>
      <div className="flex flex-col gap-y-2 items-center p-4 w-[200px] rounded-3xl bg-gradient-to-t from-stone-300 dark:from-stone-900 hover:animate-cardHover" style={{animationFillMode: "forwards"}}>
        {
          <ul className="h-10">
          {
            reqs?.map((requirement: string[], i: number) => (
              <li key={i} className="py-[2px] text-xs text-center">
                <span className="font-bold">
                  {
                    mapTrigger(requirement[0])
                  }
                </span>
                  {
                    mapValue(requirement[1], requirement[0])
                  }
              </li>
            ))
          }
          </ul>
        }
        <img 
          className="max-w-20"
          src={`${process.env.NEXT_PUBLIC_OFFICIAL_SRC + evolutionStage.id + ".png"}`}
        />

        <span className="font-semibold text-blue-600 hover:underline dark:text-blue-300">
          {capitalizeString(evolutionStage.species)}
        </span>
    </div>
    </a>
  )
}

function mapTrigger(trigger: string) {
  switch (trigger) {
    case "min_level":
      return "Level: "
    case "min_happiness":
      return "Friendship: "
    case "min_affection":
      return "Affection: "
    case "time_of_day":
      return "Time of Day: "
    case "item":
      return "Item: "
    case "known_move_type":
      return "Move Type Learned: "
    case "held_item":
      return "Held Item: "
    case "gender":
      return "Gender: "
    case "shed":
      return (
        <>
          Level: <span className="font-normal">20, empty spot in party, and Pokéball in bag</span>
        </>
      )
    case "relative_physical_stats":
      return "";
    default: 
      return capitalizeString(trigger)
  }
}

function mapValue(value: string | number, type?: string) {
  if (value == 1 && type == "gender") return "Female";
  if (value == 2 && type == "gender") return "Male";
  if (value == -1 && type == "relative_physical_stats") return "Attack < Defense";
  if (value == 1 && type == "relative_physical_stats") return "Attack > Defense";
  if (value == "d") return "Daytime";
  if (value == "n") return "Nighttime";
  if (value == "f") return "Full Moon";
  if (type == "min_affection" && typeof value == "number") return "❤".repeat(value);
  if (typeof value == 'number') return value

  return (capitalizeString(value))
}