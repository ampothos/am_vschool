import React from "react" 
import { SketchPicker } from 'react-color'

export default function ToggleArea(props) {
    const [color1, setColor1] = React.useState(false)
    const [color2, setColor2] = React.useState(false)

    function toggleColorPicker(colorSetter) {
        colorSetter(prev => !prev)
    }

    function colorChange1(color) {
        props.setGradient(prev => {
            return ({...prev, 
                    color1 : color})
        })
    }

    function colorChange2(color) {
        props.setGradient(prev => {
            return ({...prev, 
                    color2 : color})
        })
    }

    return (
    <>
        <div>
            <div className="colorlabel">Color 1</div>
            <div className="colorvalue">{props.gradient.color1}</div>
            <div className="colorbar" onClick={(setColor1) => toggleColorPicker(setColor1)} style={`backgroundColor : ${props.gradient.color1}`}></div>
            {color1 && <SketchPicker
                            key = {0}
                            color = {props.gradient.color1}
                            onChange = {(color) => colorChange1(color)}/>}
        </div>
        <div>
            <div classname="colorlabel">Color 2</div>
            <div className="colorvalue">{props.gradient.color1}</div>
            <div className="colorbar" onClick={(setColor2) => toggleColorPicker(setColor2)} style={`backgroundColor : ${props.gradient.color1}`}></div>
            {color1 && <SketchPicker
                            key = {1}
                            color = {props.gradient.color2}
                            onChange = {(color) => colorChange2(color)}/>}
        </div>
        
    </>

    )
}