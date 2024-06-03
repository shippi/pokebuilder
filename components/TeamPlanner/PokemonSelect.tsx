import { Link } from "@/helpers/types"
import Dropdown from "../UI/Dropdown"
import { capitalizeString } from "@/helpers/utils"
import { useState } from "react"
import MoveSelect from "./MoveSelect"

interface Props {
	pokemonList: Link[]
}

export default function PokemonSelect({ pokemonList } : Props) {
	const [selected, setSelected] = useState(-1);

  return (
    <div className="flex gap-4 items-center">
			<img 
				className="h-36 w-36"
				src = {
					selected < 0 ?
					"" :
					`${process.env.NEXT_PUBLIC_HOME_SRC}${pokemonList[selected].url.split("/").slice(-2)[0]}.png`
			}/>
			<div className="flex flex-col h-fit">
				<Dropdown 
					className="h-96 w-52 overflow-y-scroll translate-y-9"
					selectedClassName="justify-between px-2 py-1 border-b border-stone-500 "
					selected={selected < 0 ? "None" : capitalizeString(pokemonList[selected].name)} 
					listItems={
						pokemonList.map((pokemon, i) => (
							<div className="w-full flex items-center gap-x-2 px-2 py-1" key={i} onClick={() => setSelected(i)}>
								<img loading="lazy" className="h-8 w-8" src={`${process.env.NEXT_PUBLIC_SPRITE_SRC}/${pokemon.url.split("/").slice(-2)[0]}.png`}/>
								{ capitalizeString(pokemon.name) }
							</div>
						))} 
					/>
					<div className="h-4"/>
					<MoveSelect name={pokemonList[selected]?.name || ""} id={selected + 1} />
					<MoveSelect name={pokemonList[selected]?.name || ""} id={selected + 1} />
					<MoveSelect name={pokemonList[selected]?.name || ""} id={selected + 1} />
					<MoveSelect name={pokemonList[selected]?.name || ""} id={selected + 1} />
				</div>
		</div>
  )
}