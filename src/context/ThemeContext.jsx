import { createContext, useContext, useEffect, useState } from "react";


const ThemeContext = createContext()

export function ThemeProvider ({children}){

    const [isDarkMode, setIsDarkMode] = useState(

    localStorage.getItem("theme") === "dark"
    )

    useEffect (()=>{
        localStorage.setItem ("theme", isDarkMode? "dark" : "light")
    }, [isDarkMode])


    const toggleTheme =()=>{
        setIsDarkMode((prevMode)=>!prevMode)
    }


    return (
        <ThemeContext.Provider value ={{isDarkMode, toggleTheme}}>

            {children}

        </ThemeContext.Provider>
    )

}

//custom hook for easy access

export function useTheme(){
    return useContext(ThemeContext)
}