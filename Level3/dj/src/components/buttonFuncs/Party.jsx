import React from "react" 

export default function Party(props) {
    function changeColor(){
        props.setFunc(prevElem => {
            return ["purple", "purple", prevElem[2], prevElem[3]]
        })
    }
    return(
        <button onClick={changeColor} className="party right">Party DJ</button>
    )
}