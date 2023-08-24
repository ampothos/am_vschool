import React from "react"
import { ThemeContext } from "../themeContext"

export default function Blurb() {
    const {theme, toggle} = React.useContext(ThemeContext)

    return(
        <div className={`${theme} blurb`}>You are currrently in {theme} mode</div>
    )
}