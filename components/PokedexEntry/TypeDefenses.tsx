import { POKEMON_TYPES, TYPE_CHART } from "@/helpers/consts"
import { capitalizeString } from "@/helpers/utils"

interface Props {
  typing: any[]
}
function Typing({ typing } : Props) {
  return (
    <div>
			<h1 className="text-2xl font-bold">Type Defenses</h1>
      <table>
        <tbody>
          <tr>
          {
            POKEMON_TYPES.map(type => (
              <th className="w-10">{capitalizeString(type).slice(0,3)}</th>
            ))
          }
          </tr>
          <tr>
            {
              POKEMON_TYPES.map((type, i) => {
                const val = Object.entries(TYPE_CHART[typing[0].type.name as keyof typeof TYPE_CHART])[i][1];
                const val2 = typing.length > 1 ? Object.entries(TYPE_CHART[typing[1].type.name as keyof typeof TYPE_CHART])[i][1] : undefined;
                const finalVal = val2 ? val * val2 : val
                if(type == "fairy") console.log(finalVal) 
                return (
                  <td className="text-center">
                    { finalVal != 1 && (finalVal == 0.25 ? "1/4" : finalVal == 0.5 ? "1/2" : finalVal) }
                  </td>
                )
              })
            }
          </tr>
        </tbody>
      </table>
		</div>
  )
}

export default Typing