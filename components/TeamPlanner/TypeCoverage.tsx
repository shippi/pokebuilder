'use client'

import { TeamPlannerContext } from "@/context/TeamPlannerContext"
import { TYPE_CHART } from "@/helpers/consts";
import { useContext, useEffect } from "react"

export default function TypeCoverage() {
  const { selectedMoves } = useContext(TeamPlannerContext);
  console.log(TYPE_CHART.normal)
  
  return (
    <div className="flex flex-col justify-center w-full">
      <h1 className="text-2xl font-bold">Team Type Coverage</h1>
      <div className="w-full h-[1px] bg-stone-500 my-2"/>
    </div>
  )
}