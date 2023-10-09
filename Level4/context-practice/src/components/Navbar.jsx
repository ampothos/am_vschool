import React from "react"
import { ThemeContext } from "../themeContext"

export default function Navbar() {

    const {theme, toggle} = React.useContext(ThemeContext)

    return (
        <ul className={`${theme} nav`}>
            <li className={`${theme} navitem`}>Home</li>
            <li className={`${theme} navitem`}>About</li>
            <li className={`${theme} navitem`}>Contact</li>
        </ul>
    )
}