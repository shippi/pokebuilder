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

function getEffect(data: any) {
  for (let i = data.flavor_text_entries.length - 1; i >= 0; i--) {
    if (data.flavor_text_entries[i].language.name === "en") return data.flavor_text_entries[i].flavor_text;
  }
  return "";
}

export default AbilityDescription