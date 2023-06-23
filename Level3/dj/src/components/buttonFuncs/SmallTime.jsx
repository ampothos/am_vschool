import React from "react" 

export default function SmallTime(props) {
    function changeColor() {
        props.setFunc(prevColors => {
            if (prevColors[0] == "white") {
                return ["black", "black", "black", "black"] 
            }
            else {
                return ["white", "white", "white", "white"]
            }
        })
    }
    return (
        <button onClick={changeColor} className="smalltime">Small Time DJ</button>
    )
}