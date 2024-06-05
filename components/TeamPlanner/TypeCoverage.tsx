'use client'

import { TeamPlannerContext } from "@/context/TeamPlannerContext"
import { TYPE_CHART } from "@/helpers/consts";
import { useContext, useEffect } from "react"
import SingleTypeCoverage from "./SingleTypeCoverage";



export default function TypeCoverage() {
  const { selectedMoves } = useContext(TeamPlannerContext);
  return (
    <div className="flex flex-col justify-center w-full">
      <h1 className="text-2xl font-bold">Team Type Coverage</h1>
      <div className="w-full h-[1px] bg-stone-500 my-2"/>
      <div className="flex flex-wrap justify-center gap-8 p-2">
      {
        Object.entries(TYPE_CHART).map((type, i) => (
          <SingleTypeCoverage key={i} type={type[0]}/>
        ))
      }
      </div>
    </div>
  )
}