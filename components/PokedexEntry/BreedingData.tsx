import { capitalizeString } from "@/helpers/utils"

interface Props {
  speciesData: any
	className?: string
}
  

export default function BreedingData({ speciesData, className } : Props) {
  const eggGroups = speciesData.egg_groups.map((group: any) => capitalizeString(group.name)).join(", ")
  return (
    <div className={className}>
      <h1 className="text-2xl font-bold">Breeding</h1>
      <table className="w-full border-separate border-spacing-2 ml-[-8px] text-sm">
        <tbody className="text-left">
          <tr>
            <th className="w-24 text-stone-400 font-semibold">Egg Group</th>
            <td>
               { eggGroups }
            </td>
          </tr>
          <tr>
            <th className="w-24 text-stone-400 font-semibold">Gender</th>
            <td className="whitespace-pre">
               {
                speciesData.gender_rate < 0 ?
                "Undetermined" :
                `${(1 - speciesData.gender_rate/8) * 100}% Male\n${(speciesData.gender_rate/8) * 100}% Female`
              }
            </td>
          </tr>
          <tr>
            <th className="w-24 text-stone-400 font-semibold">Egg Cycles</th>
            <td>
              {speciesData.hatch_counter}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
