import { Ability, AbilityEffect } from "@/helpers/types"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface Props {
		className?: string
    ability: Ability
}
function AbilityDescription({ className, ability } : Props) {
  const {data, isLoading, isError} = useQuery({
		queryKey: [ability.ability.name],
		queryFn: async () => {
			const { data } = await axios.get(ability.ability.url)

			return data;
		}
	})
  return (
    <div className={className}>
			{data && getEffect(data)}
    </div>
  )
}

function getEffect(data: AbilityEffect) {
  for (let i = 0; i < data.effect_entries.length; i++) {
    if (data.effect_entries[i].language.name === "en") return data.effect_entries[i].effect
  }
  return "";
}

export default AbilityDescription