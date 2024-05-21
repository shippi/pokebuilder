import { POKEMON_TYPES, TYPE_CHART } from "@/helpers/consts";
import { Ability, PokemonType } from "@/helpers/types";
import { capitalizeString } from "@/helpers/utils";

interface Props {
	typing: PokemonType[],
	abilities: Ability[]
	startIndex?: number,
	endIndex?: number
}

function TypeTable({ typing, abilities, startIndex, endIndex } : Props) {
  return (
		<table className="border-separate border-spacing-x-2 ml-[-8px] font-semibold text-xs sm:text-sm">
			<tbody>
				<tr>
				{
					POKEMON_TYPES.slice(startIndex, endIndex).map(type => (
						<th 
							key={type} 
							className={`${type} w-16 min-w-10 text-clip text-white overflow-hidden`}
						>
							{capitalizeString(type)}
						</th>
					))
				}
				</tr>
				<tr>
					{
						POKEMON_TYPES.slice(startIndex, endIndex).map((type, i) => {
							const val = Object.entries(TYPE_CHART[typing[0].type.name as keyof typeof TYPE_CHART]).slice(startIndex, endIndex)[i][1];
							const val2 = typing.length > 1 ? Object.entries(TYPE_CHART[typing[1].type.name as keyof typeof TYPE_CHART]).slice(startIndex, endIndex)[i][1] : undefined;
							let finalVal =  val2 ? val * val2 : val;
							if (checkImmune(abilities, type, finalVal)) finalVal = 0;

							return (
								<td key={type} className="text-center bg-stone-200 dark:bg-stone-600">
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

function checkImmune(abilities: Ability[], type: string, typeValue: number) {
	for (let i = 0; i < abilities.length; i++) {
		if (abilities[i].ability.name == "levitate" && type == "ground") return true;
		if (abilities[i].ability.name == "wonder-guard" && typeValue < 2) return true;
	}
	return false;
}

export default TypeTable