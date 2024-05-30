import { EvolutionRequirement, EvolutionStage } from "@/helpers/types"
import { capitalizeString } from "@/helpers/utils"

interface Props {
  evolutionStage: EvolutionStage
}

export default function EvolutionCard({ evolutionStage } : Props) {
  return (
    <a href={`/pokemon/${evolutionStage.id}`}>
      <div className="flex flex-col gap-y-2 items-center p-4 w-[200px] rounded-3xl bg-gradient-to-t from-stone-300 dark:from-stone-900">
        {
          <ul className="h-10">
          {
            evolutionStage.requirements?.map((requirement: EvolutionRequirement, i: number) => (
              <li key={i} className="py-[2px] text-xs text-center">
                <span className="font-bold">
                {
                  mapTrigger(requirement.trigger)
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
    default: 
      return capitalizeString(trigger)
  }
}

function mapValue(value: string | number) {
  if (value == '1') return "Female";
  if (value == '2') return "Male";
  if (typeof value == 'number') return value
  if (value == "d") return "Daytime";
  if (value == "n") return "Nighttime";
  if (value == "f") return "Full Moon";

  return (capitalizeString(value))
}