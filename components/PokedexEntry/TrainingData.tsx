import { EffortValue, PokemonStat } from "@/helpers/types";
import { capitalizeString } from "@/helpers/utils";

interface Props {
  data: any;
  speciesData: any;
  className?: string
}

export default function TrainingData({ data, speciesData, className } : Props) {
  const effortValues = getEffortValues(data.stats).map(ev => `${ev.amount} ${capitalizeString(ev.name)}`);
  return (
    <div className={className}>
      <h1 className="text-2xl font-bold">Training</h1>
      <table className="w-full border-separate border-spacing-2 ml-[-8px] text-sm">
        <tbody className="text-left">
          <tr>
            <th className="w-32 text-stone-400 font-semibold">EV Yield</th>
            <td>
               { effortValues.join(", ") }
            </td>
          </tr>
          <tr>
            <th className="text-stone-400 font-semibold">Catch Rate</th>
            <td>{speciesData.capture_rate}</td>
          </tr>
          <tr>
            <th className="text-stone-400 font-semibold">Base Friendship</th>
            <td>{speciesData.base_happiness}</td>
          </tr>
          <tr>
            <th className="text-stone-400 font-semibold">Base Experience</th>
            <td>{data.base_experience}</td>
          </tr>
          <tr>
            <th className="text-stone-400 font-semibold">Growth Rate</th>
            <td>{capitalizeString(speciesData.growth_rate.name)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function getEffortValues(stats: PokemonStat[]) {
  let effortValues: EffortValue[] = [];
  stats?.forEach(stat => {
    if (stat.effort) {
      effortValues.push({
        name: mapStatName(stat.stat.name),
        amount: stat.effort
      })
    }
  });
  return effortValues;
}

function mapStatName(stat: string) {
  if (stat == "special-defense") return "Sp. Def";
  if (stat == "special-attack") return "Sp. Atk";
  return stat;
}
