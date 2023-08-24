import React from "react" 

export default function Gradient(props) {
    const {angle, color1, color2} = props.gradient
    const gradientStyle = {background : `linear-gradient(${angle}deg, ${color1}, ${color2})`}
 
    return (
            <div className="gradient" style={gradientStyle}>
            </div>
    )
}