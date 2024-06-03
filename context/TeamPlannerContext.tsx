'use client'

import { PropsWithChildren, ReactNode, createContext } from "react"

export const TeamPlannerContext = createContext<any>(null);

export const TeamPlannerContextProvider = ({ children }: PropsWithChildren) => {
	const values = {

	}

	return (
		<TeamPlannerContext.Provider value={values}>
			{ children }
		</TeamPlannerContext.Provider>
	)
}