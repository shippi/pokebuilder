'use client'

import { PokemonData } from "@/helpers/types"

interface Props {
	data: PokemonData
}

function PokemonCard({data} : Props) {
  return (
    <div className="flex justify-center p-4 h-fit min-h-32 w-[31%] bg-stone-400">
			{data.name}
		</div>
  )
}

export default PokemonCard