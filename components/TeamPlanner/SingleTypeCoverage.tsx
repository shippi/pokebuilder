import { TeamPlannerContext } from "@/context/TeamPlannerContext";
import { TYPE_CHART } from "@/helpers/consts";
import { PokemonMove } from "@/helpers/types";
import { capitalizeString } from "@/helpers/utils";
import { useContext } from "react";

interface Props {
  type: string
}

const validDamageClasses = ["physical", "special"];

function SingleTypeCoverage({ type } : Props) {
  const { selectedMoves } = useContext(TeamPlannerContext);
  const effectiveMoves: any[] = Array();

  if (type in TYPE_CHART) {
    const weaknesses = Object.entries(TYPE_CHART[type as keyof typeof TYPE_CHART]).filter(type => type[1] == 2).map(type => type[0]);

    for (const pokemon of selectedMoves) {
      if (!pokemon) continue;
      for (const move of pokemon.moves) {
        if (!move || !weaknesses.includes(move.type) || !validDamageClasses.includes(move.damageClass)) continue;
        let data: any = move;
        data.id = pokemon.id;
        effectiveMoves.push(data);
      }
    }
  }

  return (
    <div className="relative group">
      <div className={`${type} text-center w-32 min-w-10 text-clip text-white font-bold overflow-hidden`}>
        {capitalizeString(type)}
      </div>
      <div className={`text-center w-32 min-w-10 min-h-6 text-clip text-white overflow-hidden bg-stone-200 dark:bg-stone-900`}>
        {effectiveMoves.length > 0 ? <i className="bi bi-check-lg text-green-600 dark:text-green-500"/> : <i className="bi bi-x-lg text-red-600 dark:text-red-500"/>}
      </div>
      <div className="flex flex-col gap-y-2 absolute min-w-56 invisible group-hover:visible text-xs bg-stone-200 dark:bg-stone-900 p-3 border-stone-400 border-b-4  mt-1 z-10 rounded-xl dark:border-stone-500 drop-shadow-sm">
        <div>Super effective against <span className={`font-bold ${type}`}>{capitalizeString(type)}</span>:</div>
        <ul>
          { 
            effectiveMoves.length < 1 ? 
              <span className="font-medium">None</span>:
              effectiveMoves.map((move, i) => (
                <li key={i} className="flex justify-between items-center font-medium">
                  {capitalizeString(move.name)}
                  <img className="h-8 w-8" src={`${process.env.NEXT_PUBLIC_SPRITE_SRC}/${move.id}.png`}/>
                </li>
              ))
          }
        </ul>
      </div>
    </div>
  )
}

export default SingleTypeCoverage