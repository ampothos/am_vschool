import React from "react" 

export default function ColorBlock() {
    const [color, setColor] = React.useState("")

    React.useEffect(() => {
        console.log("effect")
        fetch("https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}")
            .then(res => res.json())
            .then(col => console.log(col))
    }, [])
    return (
        <div className="color">
            
        </div>
    )
}