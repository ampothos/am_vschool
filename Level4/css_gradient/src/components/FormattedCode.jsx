import React from "react" 

export default function FormattedCode(props) {
    const {angle, color1, color2} = props.gradient

    const formattedCode = `background: linear-gradient(${angle}deg, ${color1}, ${color2});
-moz-background: linear-gradient(${angle}deg, ${color1}, ${color2});
-webkit: linear-gradient(${angle}deg, ${color1}, ${color2});`

    return(
        <textarea className="code" readOnly value={formattedCode}></textarea>
        
    )
}