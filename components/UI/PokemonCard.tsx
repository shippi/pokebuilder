'use client'

import { PokemonData } from "@/helpers/types"
import { capitalizeString } from "@/helpers/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Props {
	pokemonData: PokemonData
}

function PokemonCard({ pokemonData } : Props) {
  const { data, isLoading, isError } = useQuery({
		queryKey: [pokemonData.name],
		queryFn: async() => {
			const { data } = await axios.get(process.env.NEXT_PUBLIC_POKEMON_API + `pokemon/${pokemonData.name}`);
			return { name: data.species.name, types: data.types, id: data.id };
		}
	});

  return (
    <div className="flex flex-col grow gap-2 items-center justify-center rounded-md p-4 h-fit min-h-32 min-w-36 max-w-52 w-[20%] bg-gradient-to-b from-stone-300 to-stone-00 hover:bg-stone-300 dark:from-stone-600 hover:cursor-pointer hover:animate-cardHover dark:hover:bg-stone-600" style={{animationFillMode: "forwards"}}>
			{
        !isLoading &&
        <>
          <img loading="lazy" className="h-20 w-20" src={`${process.env.NEXT_PUBLIC_IMG_SRC}/${data?.id}.png`}/>
          <div className="w-full h-[1px] bg-stone-400"/>
          <div className="flex justify-between w-full text-sm text-stone-700 dark:text-white">
            {capitalizeString(data?.name)}
            <span className="text-stone-400">{`#${data?.id}`}</span>
          </div>
          <div className="flex justify-center gap-2 w-full mt-1">   
          {
            data?.types.map((item: any) => {
              const type = item.type.name;
              return <div key={type} className={`type ${type} w-[26px] rounded-full`}><img loading="lazy" src={`/types_icons/${type}.svg`}/></div>
            })
          }
          </div>
        </>
      }

		</div>
  )
}

export default PokemonCard