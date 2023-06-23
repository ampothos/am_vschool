import React from "react"

export default function Professional(props) {
    function leftBlue() {
        props.setFunc(prev => {
            return [prev[0], prev[1], "blue", prev[3]]
        })
    }
    function rightBlue() {
        props.setFunc(prev => {
            return [prev[0], prev[1], prev[2], "blue"]
        })
    }

    return (
        <div className="row">
            <button onClick={leftBlue} className="professional leftcol">Professional DJ</button>
            <button onClick={rightBlue} className="professional rightcol">Professional DJ</button>
        </div>
        
    )
}