import React from "react" 

export default function Card(props) {
    let dollar = ""
    if (props.price < 500){
        dollar = "$"
    }
    else if (props.price < 1000) {
        dollar = "$$"
    }
    else {
        dollar = "$$$"
    }
    
    const colorclass = `card ${props.timeToGo}`
 
    return (
        <div className={colorclass}>
            <div className="card-container">
                <div className="place">{props.place}</div>
                <div className="price">{dollar}</div>
            </div>
        </div>

    )
}