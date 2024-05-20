import { PokemonStat } from "@/helpers/types"
import { capitalizeString } from "@/helpers/utils"

interface Props {
    stats: PokemonStat[]
}

const MAX = 190;

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
                  <th className="w-1/5">{capitalizeString(item.stat.name == "hp" ? "HP" : item.stat.name)}</th>
                  <td className="pr-10 w-1/12">{item.base_stat}</td>
                  <td>
                    <div className={`h-4 bg-white`} style={{width: `${((item.base_stat / MAX) * 100).toFixed(0)}%`}}/>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
    </div>
  )
}

export default PokemonStats