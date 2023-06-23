import React from "react"
import SmallTime from "./buttonFuncs/SmallTime"
import Party from "./buttonFuncs/Party"
import Professional from "./buttonFuncs/Professional"
import BigTime from "./buttonFuncs/BigTime"

export default function Buttons(props) {
    
    return (
        <div className="buttons">
            <div className="row">
                <SmallTime 
                    setFunc = {props.setFunc}/> 
                <Party 
                    setFunc = {props.setFunc}/>
            </div>
            <Professional 
                setFunc = {props.setFunc}/>
            <BigTime
                setFunc = {props.setFunc}/>
        </div>
    )
}