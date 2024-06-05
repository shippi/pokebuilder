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
  const effectiveMoves: PokemonMove[] = Array();

  if (type in TYPE_CHART) {
    const weaknesses = Object.entries(TYPE_CHART[type as keyof typeof TYPE_CHART]).filter(type => type[1] == 2).map(type => type[0]);

    for (const pokemon of selectedMoves) {
      if (!pokemon) continue;
      for (const move of pokemon.moves) {
        if (!move || !weaknesses.includes(move.type) || !validDamageClasses.includes(move.damageClass)) continue;
        effectiveMoves.push(move);
      }
    }
  }
  
  return (
    <div>
      <div className={`${type} text-center w-32 min-w-10 text-clip text-white overflow-hidden`}>
        {capitalizeString(type)}
      </div>
      <div className={`text-center w-32 min-w-10 min-h-6 text-clip text-white overflow-hidden bg-stone-900`}>
        {effectiveMoves.length > 0 ? <i className="bi bi-check-lg text-green-500"/> : <i className="bi bi-x-lg text-red-500"/>}
      </div>
    </div>
  )
}

export default SingleTypeCoverage