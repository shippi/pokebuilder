import { capitalizeString } from "@/helpers/utils";

interface Props {
  data: any;
  speciesData: any;
}

function PokedexData({ data, speciesData } : Props) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Pokédex Data</h1>
      <table className="border-separate border-spacing-2 ml-[-8px]">
        <tbody className="text-left">
          <tr>
            <th>Typing</th>
            <td className="flex gap-x-2 h-[24px]">
              {
                data.types.map((type: any) => (
                  <div className={`${type.type.name} w-[64px] text-sm text-center`}>{capitalizeString(type.type.name)}</div>
                ))
              }
            </td>
          </tr>
          <tr>
            <th>Category</th>
            <td>{speciesData.genera[7].genus}</td>
          </tr>
          <tr>
            <th>Height</th>
            <td>{`${(data.height / 10)}m`}</td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>{`${(data.weight / 10)}kg`}</td>
          </tr>
          <tr>
            <th>Abilities</th>
            <td>
              {
                data.abilities.map((ability: any) => (
                  <div className={`${ability.is_hidden ? "text-sm" : "text-base"}`}>
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