import { capitalizeString } from "@/helpers/utils";

interface Props {
  data: any;
  speciesData: any;
}

function PokedexData({ data, speciesData } : Props) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Pokédex Data</h1>
      <table className="border-separate border-spacing-2 ml-[-8px] text-sm">
        <tbody className="text-left">
          <tr>
            <th className="text-stone-400 font-semibold">Typing</th>
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
            <td>{speciesData.genera[7].genus}</td>
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
                data.abilities.map((ability: any, i: number) => (
                  <div key={i} className={`${ability.is_hidden && "text-xs"} pb-1`}>
                    {ability.slot && !ability.is_hidden && `${ability.slot}. `}
                    {capitalizeString(ability.ability.name)}
                    {ability.is_hidden && " (hidden ability)"}
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

export default PokedexData