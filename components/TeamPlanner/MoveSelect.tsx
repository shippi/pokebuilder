import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Dropdown from "../UI/Dropdown";
import { useEffect, useState } from "react";
import { capitalizeString } from "@/helpers/utils";

interface Props {
	name: string
	id: number
}

export default function MoveSelect({ name, id } : Props) {
	const { data, isLoading, isError } = useQuery({
		queryKey: [`${name}Moves`],
		queryFn: async() => {
			if (id < 0) return [];
			const { data } = await axios.get(process.env.NEXT_PUBLIC_POKEMON_API + `pokemon/${id}`);
			return data.moves || [];
		}
	});

	const [selected, setSelected] = useState(-1);
	
	useEffect(() => {
		setSelected(-1);
	}, [name, id])

  return (
		!isLoading && data?.length > 0 ? 
		<Dropdown 
			className="h-96 min-w-52 overflow-y-scroll translate-y-8"
			selectedClassName="min-w-52 justify-between px-2 py-1 border-b border-stone-500 text-sm duration-100"
			selected={selected < 0 ? "--" : capitalizeString(data[selected].move.name)} 
			listItems={[
				<div className="w-full flex items-center gap-x-2 px-2 py-1" onClick={() => setSelected(-1)}>
					--
				</div>,
				...data?.map((moveDetails: any, i: any) => (
					<div className="w-full flex items-center gap-x-2 px-2 py-1" key={i} onClick={() => setSelected(i)}>
						{ capitalizeString(moveDetails.move.name) }
					</div>
				))] || []} 
		/>
		:
		<Dropdown 
			disabled={true}
			className="h-96 min-w-52 translate-y-8"
			selectedClassName="min-w-52 justify-between px-2 py-1 border-b border-stone-500 text-sm text-stone-500"
				selected={"--"} 
				listItems={[]} 
		/>
  )
}