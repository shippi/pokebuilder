import { Link } from "@/helpers/types"
import Dropdown from "../UI/Dropdown"
import { capitalizeString } from "@/helpers/utils"
import { useContext, useEffect, useState } from "react"
import { TeamPlannerContext } from "@/context/TeamPlannerContext"
import MoveSelect from "./MoveSelect"

interface Props {
	pokemonList: Link[]
	index: number
}

export default function PokemonSelect({ pokemonList, index } : Props) {
	const { selectedMoves, setSelectedMoves } = useContext(TeamPlannerContext);
	const [selected, setSelected] = useState(-1);
	
	useEffect(() => {
		let newSelectedMoves = [...selectedMoves];

		if (selected == -1) {
			newSelectedMoves[index] = null;
			setSelectedMoves(newSelectedMoves);
			return;
		}
		
		newSelectedMoves[index] = {
			pokemonName: pokemonList[selected].name,
			id: pokemonList[selected].url.split("/").slice(-2)[0],
			moves: Array(4).fill("")
		}
		setSelectedMoves(newSelectedMoves);
	}, [selected]);

  return (
    <div className="flex flex-wrap gap-4 items-center justify-center p-5 rounded-xl bg-stone-300 dark:bg-stone-900">
			<img 
				className="h-36 w-36"
				src = {
					selected < 0 ?
					"/questionmark.png" :
					`${process.env.NEXT_PUBLIC_HOME_SRC}${pokemonList[selected].url.split("/").slice(-2)[0]}.png`
			}/>
			<div className="flex flex-col h-fit">
				<Dropdown 
					className="h-96 min-w-52 overflow-y-scroll translate-y-9"
					selectedClassName="justify-between px-2 py-1 border-b border-stone-500 dark-hover:!bg-stone-600 text-sm"
					selected={selected < 0 ? "None" : capitalizeString(pokemonList[selected].name)} 
					listItems={[
						<div className="w-full flex items-center gap-x-2 px-2 py-1" onClick={() => setSelected(-1)}>
							<img className="h-8 w-8" src="/questionmark.png"/>
							None
						</div>,
						...pokemonList.map((pokemon, i) => (
							<div className="w-full flex items-center gap-x-2 px-2 py-1" key={i} onClick={() => setSelected(i)}>
								<img loading="lazy" className="h-8 w-8" src={`${process.env.NEXT_PUBLIC_SPRITE_SRC}/${pokemon.url.split("/").slice(-2)[0]}.png`}/>
								{ capitalizeString(pokemon.name) }
							</div>
						))]} 
					/>
					<div className="h-4"/>
					{
						[...Array(4)].map((value, i) => (
							<MoveSelect key={i} index={i} selectedIndex={index} name={pokemonList[selected]?.name || ""} id={selected + 1} />
						))
					}
				</div>
		</div>
  )
}