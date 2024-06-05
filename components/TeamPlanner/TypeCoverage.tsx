'use client'

import { TeamPlannerContext } from "@/context/TeamPlannerContext"
import { useContext, useEffect } from "react"

export default function TypeCoverage() {
  const { selectedMoves } = useContext(TeamPlannerContext);
  console.log(selectedMoves)
  return (
    <div className="flex flex-col justify-center w-full">
      <h1 className="text-2xl font-bold">Team Type Coverage</h1>
      <div className="w-full h-[1px] bg-stone-500 my-2"/>
    </div>
  )
}