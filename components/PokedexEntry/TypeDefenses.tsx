import { PokemonType } from "@/helpers/types"
import TypeTable from "./TypeTable"

interface Props {
  typing: PokemonType[]
}

function Typing({ typing } : Props) {
  return (
    <div className="flex flex-col gap-y-4 w-full">
			<h1 className="text-2xl font-bold">Type Defenses</h1>
      <div className="w-full h-[1px] bg-stone-500 my-2"/>
      <div className="flex-col gap-y-4 hidden sm:flex">
        <TypeTable typing={typing} endIndex={9}/>
        <TypeTable typing={typing} startIndex={9}/>
      </div>
      <div className="flex flex-col gap-y-4 sm:hidden">
        <TypeTable typing={typing} endIndex={6}/>
        <TypeTable typing={typing} startIndex={6} endIndex={12}/>
        <TypeTable typing={typing} startIndex={12}/>
      </div>
		</div>
  )
}

export default Typing