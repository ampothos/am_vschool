import React from "react"
import { ThemeContext } from "../themeContext"

export default function Footer() {
    const {theme, toggle} = React.useContext(ThemeContext)

    return (
        <footer className={`${theme} footer`}>This is the footer</footer>
    )
}