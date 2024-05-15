'use client'
import { PropsWithChildren, createContext, useEffect, useState } from "react";

export const ThemeContext = createContext<any>(undefined);

export const ThemeContextProvider = ({ children }: PropsWithChildren<{}>) => {
    const [theme, setThemeContext] = useState("light");

    const setTheme = (theme: string) => {
        setThemeContext(theme);
        localStorage.setItem("theme", theme);
    }

    useEffect(() => {
        if (localStorage.getItem("theme")) {
            setTheme(localStorage.getItem("theme") || "light");
            return;
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        }
        else {
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    }, [])

    const value = {
        theme,
        setTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}