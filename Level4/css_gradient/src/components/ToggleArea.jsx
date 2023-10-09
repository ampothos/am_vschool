import React from "react" 
import { SketchPicker } from 'react-color'

export default function ToggleArea(props) {
    function change(event) {
        
        const name = event.target.id 
        const value = event.target.value
        console.log(value)
        props.setGradient(prev => {
            return({...prev, 
                    [name] : value})
        })
    }

    function color1Change(color) {
       
        props.setGradient(prev => {
            return({...prev,
                    "color1" : color.hex})
        })
    }

    function color2Change(color, event) {

        props.setGradient(prev => {
            return({...prev,
                    "color2" : color.hex})
        })
    }
    const [isPicking, setIsPicking] = React.useState(
        {"color1" : false,
        "color2" : false})

    function togglePicking(e) {
        const whichPicking = e.target.id
        const oldVal = isPicking[whichPicking]

        setIsPicking(prev => {
            return ({...prev, 
                    [whichPicking] : !oldVal})
        })
 
    }
    console.log(props.gradient)
    return (
    <div className="togglearea">
        <div className="colorsection">
            <div className="colorlabel">Color 1</div>
            <div className="colorvalue">{props.gradient.color1}</div> 
            <div onClick={togglePicking} id="color1" className="colorbox" style={{backgroundColor : props.gradient.color1}}>
                {isPicking.color1 && <SketchPicker
                                        className="picker"
                                        color={props.gradient.color1}
                                        onChange={(color) => color1Change(color)}/>}
            </div>
            
        </div>
        <div className="colorsection">
            <div className="colorlabel">Color 2</div>
            <div className="colorvalue">{props.gradient.color1}</div>
            <div onClick={togglePicking} id="color2"className="colorbox" style={{backgroundColor : props.gradient.color2}}>
                {isPicking.color2 && <SketchPicker
                                        
                                        className="picker"
                                        color={props.gradient.color2}
                                        onChange={(color) => color2Change(color)}/>}
            </div>
            
        
        </div>
        <div className="anglecontainer">
            <label htmlFor="angle">Angle: </label>
            <input 
                type="number" 
                value={props.gradient.angle} 
                id="angle"
                onChange={(e) => change(e)}/>
        </div>
        
    </div>

    )
}