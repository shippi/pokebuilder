import { Ability, Genus } from "@/helpers/types";
import { capitalizeString } from "@/helpers/utils";
import AbilityDescription from "./AbilityDescription";

interface Props {
  data: any;
  speciesData: any;
  className?: string
}

function PokedexData({ data, speciesData, className } : Props) {
  return (
    <div className={className}>
      <h1 className="text-2xl font-bold">Pokédex Data</h1>
      <table className="w-full border-separate border-spacing-2 ml-[-8px] text-sm">
        <tbody className="text-left">
          <tr>
            <th className="w-20 text-stone-400 font-semibold">Typing</th>
            <td className="flex gap-x-2 h-[24px]">
              {
                data.types.map((type: any) => (
                  <div 
                    key={type.type.name} 
                    className={`${type.type.name} w-[64px] font-semibold text-sm text-center text-white`}
                    >
                      {capitalizeString(type.type.name)}
                    </div>
                ))
              }
            </td>
          </tr>
          <tr>
            <th className="text-stone-400 font-semibold">Category</th>
            <td>{getGenus(speciesData.genera)}</td>
          </tr>
          <tr>
            <th className="text-stone-400 font-semibold">Height</th>
            <td>{`${(data.height / 10)}m`}</td>
          </tr>
          <tr>
            <th className="text-stone-400 font-semibold">Weight</th>
            <td>{`${(data.weight / 10)}kg`}</td>
          </tr>
          <tr>
            <th className="text-stone-400 font-semibold">Abilities</th>
            <td>
              {
                filterAbilities(data.abilities).map((ability: Ability, i: number) => (
                  <div key={i} className={`${ability.is_hidden ? "text-xs " : ""}pb-1 group relative`}>
                    {ability.slot && !ability.is_hidden && `${ability.slot}. `}
                    <span 
                      className="text-blue-600 group-hover:underline dark:text-blue-300"
                    >
                      {capitalizeString(ability.ability.name)}
                    </span>
                    {ability.is_hidden && " (hidden ability)"}
                    <AbilityDescription 
                      className="absolute invisible group-hover:visible text-xs bg-stone-200 dark:bg-stone-900 p-3 border-b-4 border-stone-400 dark:border-stone-500 mt-1 z-10 rounded-xl drop-shadow-sm" 
                      ability={ability}
                    />
                  </div>
                ))
              }
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function filterAbilities(data: Ability[]) {
  let abilities = [];
  let invalid: string[] = [];
  
  for (let i = 0; i < data.length; i++) {
    if (!invalid.includes(data[i].ability.name)) {
      abilities.push(data[i]);
      invalid.push(data[i].ability.name);
    }
  }

  return abilities;
}

function getGenus(data: Genus[]) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].language.name === "en") return data[i].genus;
  }
  return "";
}

export default PokedexData