import { PokemonStat } from "@/helpers/types"
import { capitalizeString } from "@/helpers/utils"

interface Props {
    stats: PokemonStat[]
}

const MAX = 255;

function PokemonStats({ stats } : Props) {
  return (
    <div className="w-full">
        <h1 className="text-2xl font-bold">Base Stats</h1>
        <div className="w-full h-[1px] bg-stone-500 my-2"/>
        <table className="w-full border-separate border-spacing-y-2 text-left">
          <tbody className="w-full">
            {
              stats.map((item, i) => (
                <tr key={item.stat.name}>
                  <th className="w-[128px] text-sm sm:text-base sm:w-[192px]">{capitalizeString(item.stat.name == "hp" ? "HP" : item.stat.name)}</th>
                  <td className="pr-10 w-1/12">{item.base_stat}</td>
                  <td>
                    <div className={`h-4 bg-white rounded-md ${mapStatRating(item.base_stat)}`} style={{width: `${((item.base_stat / MAX) * 100).toFixed(0)}%`, minWidth: "2px"}}/>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
    </div>
  )
}

function mapStatRating(stat: number) {
  if (stat < 25) return "horrible";
  if (stat < 50) return "bad";
  if (stat < 75) return "poor";
  if (stat < 100) return "below-avg";
  if (stat < 125) return "above-avg";
  if (stat < 150) return "good";
  return "very-good";
}

export default PokemonStats