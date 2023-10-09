import React from "react";
import { ThemeContext } from "../themeContext";

export default function Button() {
    const {theme, toggle} = React.useContext(ThemeContext)

    return (
        <button onClick={toggle} className={`${theme} button`}>Change Theme</button>
    )
}