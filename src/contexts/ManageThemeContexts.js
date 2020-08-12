import React, {useContext, useState} from 'react'


const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext ()

export function getTheme () {
    return useContext(ThemeContext)
}

export function updateTheme () {
    return useContext(ThemeUpdateContext)
}

export function Themer ({ children }) {
    const [darkTheme, setDarkTheme] = useState(true)

    function toggleTheme() {
        setDarkTheme (prevDarkTheme => !prevDarkTheme)

    }
return (
    <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdateContext.Provider value={toggleTheme}>
            {children}
        </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
)

}