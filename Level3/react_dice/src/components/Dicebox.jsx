import React from "react" 
import Die from "./Die"

export default function Dicebox() {
    const [dice, setDice] = React.useState([0, 0, 0, 0, 0])
    
    function makeRandom() {
        const nums = setDice(dice => {
            return dice.map(() => Math.ceil(Math.random() * 6))
        })
        console.log(nums)
    }

    
    return (
        <div className="dicebox">
            <div className="dicebox-container">
                <Die num={dice[0]}/>
                <Die num={dice[1]}/>    
                <Die num={dice[2]}/>
                <Die num={dice[3]}/>
                <Die num={dice[4]}/>
            </div>
            <button onClick={makeRandom}>Roll the dice</button>
        </div>
    )
}