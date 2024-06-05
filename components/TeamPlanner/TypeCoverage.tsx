'use client'

import { TeamPlannerContext } from "@/context/TeamPlannerContext"
import { TYPE_CHART } from "@/helpers/consts";
import { PokemonMove } from "@/helpers/types";
import { useContext, useEffect } from "react"

const validDamageClasses = ["physical", "special"]

export default function TypeCoverage() {
  const { selectedMoves } = useContext(TeamPlannerContext);

  useEffect(() => {
    const type = "normal";

    if (type in TYPE_CHART) {
      const weaknesses = Object.entries(TYPE_CHART[type]).filter(type => type[1] == 2).map(type => type[0]);
      const effectiveMoves: PokemonMove[] = [];
  
      for (const pokemon of selectedMoves) {
        if (!pokemon) continue;
        for (const move of pokemon.moves) {
          if (!move || !weaknesses.includes(move.type) || !validDamageClasses.includes(move.damageClass)) continue;
          effectiveMoves.push(move);
        }
      }
      console.log(effectiveMoves)
    }
  }, [selectedMoves])
  return (
    <div className="flex flex-col justify-center w-full">
      <h1 className="text-2xl font-bold">Team Type Coverage</h1>
      <div className="w-full h-[1px] bg-stone-500 my-2"/>
    </div>
  )
}