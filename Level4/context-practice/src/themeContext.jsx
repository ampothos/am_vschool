import React from "react";

const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
    const [theme, setTheme] = React.useState("dark")

    function toggle() {
        setTheme(prev => prev === "dark" ? "light" : "dark")
    }

    return (
        
        <ThemeContext.Provider
            value = {{
                theme,
                toggle
            }}>
            {props.children}

        </ThemeContext.Provider>
        
    )
}

export {ThemeContext, ThemeContextProvider}