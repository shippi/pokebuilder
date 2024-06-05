'use client'

import { PropsWithChildren, ReactNode, createContext, useState } from "react"

export const TeamPlannerContext = createContext<any>(null);

export const TeamPlannerContextProvider = ({ children }: PropsWithChildren) => {
	const [selectedMoves, setSelectedMoves] = useState<any[]>(Array(6).fill(null));

	const values = {
		selectedMoves,
		setSelectedMoves
	}

	return (
		<TeamPlannerContext.Provider value={values}>
			{ children }
		</TeamPlannerContext.Provider>
	)
}