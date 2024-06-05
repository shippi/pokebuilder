import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Dropdown from "../UI/Dropdown";
import { useContext, useEffect, useState } from "react";
import { capitalizeString } from "@/helpers/utils";
import { TeamPlannerContext } from "@/context/TeamPlannerContext";

interface Props {
	name: string
	id: number
	selectedIndex: number
	index: number
}

export default function MoveSelect({ name, id, selectedIndex, index } : Props) {
	const { data, isLoading, isError } = useQuery({
		queryKey: [`${name}Moves`],
		queryFn: async() => {
			if (id <= 0) return [];
			const { data } = await axios.get(process.env.NEXT_PUBLIC_POKEMON_API + `pokemon/${id}`);
			return data.moves || [];
		}
	});

	const { selectedMoves, setSelectedMoves } = useContext(TeamPlannerContext);

	const [selected, setSelected] = useState(-1);

	useEffect(() => {
		setSelected(-1);
	}, [name, id])

	useEffect(() => {
		let newSelectedMoves =  [...selectedMoves];
		if (selected == -1) return;
		
		axios
			.get(data[selected].move.url)
			.then(res => {
				newSelectedMoves[selectedIndex].moves[index] = {
					name: res.data.name,
					type: res.data.type.name,
					damageClass: res.data.damage_class.name
				}
				setSelectedMoves(newSelectedMoves);
			});

		
	}, [selected]);

  return (
		!isLoading && data?.length > 0 ? 
		<Dropdown 
			className="h-96 min-w-52 overflow-y-scroll translate-y-8"
			selectedClassName="min-w-52 justify-between px-2 py-1 border-b border-stone-500 text-sm duration-100 hover:!bg-stone-600"
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