import { POKEMON_TYPES, TYPE_CHART } from "@/helpers/consts";
import { PokemonType } from "@/helpers/types";
import { capitalizeString } from "@/helpers/utils";

interface Props {
	typing: PokemonType[],
	startIndex?: number,
	endIndex?: number
}

function TypeTable({ typing, startIndex, endIndex } : Props) {
  return (
		<table className="border-separate border-spacing-x-2 ml-[-8px] font-semibold text-xs sm:text-sm">
			<tbody>
				<tr>
				{
					POKEMON_TYPES.slice(startIndex, endIndex).map(type => (
						<th className={`${type} w-16 min-w-10 text-clip overflow-hidden`}>{capitalizeString(type)}</th>
					))
				}
				</tr>
				<tr>
					{
						POKEMON_TYPES.slice(startIndex, endIndex).map((type, i) => {
							const val = Object.entries(TYPE_CHART[typing[0].type.name as keyof typeof TYPE_CHART]).slice(startIndex, endIndex)[i][1];
							const val2 = typing.length > 1 ? Object.entries(TYPE_CHART[typing[1].type.name as keyof typeof TYPE_CHART]).slice(startIndex, endIndex)[i][1] : undefined;
							const finalVal = val2 ? val * val2 : val

							return (
								<td className="text-center bg-stone-600">
									{ finalVal != 1 && (finalVal == 0.25 ? "1/4" : finalVal == 0.5 ? "1/2" : finalVal) }
								</td>
							)
						})
					}
				</tr>
			</tbody>
    </table>
  )
}

export default TypeTable