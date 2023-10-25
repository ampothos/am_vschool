import React from "react" 
import Food from "./Food"
import { GutContext } from "./gutContext"

export default function FoodList(props) {
    const con = React.useContext(GutContext)
    const rating = props.rating
    
    //uses props to determine which view this list is (1, 2, 3), classname and list Header

    //map a food component list to be displayed in this particular list section
    const foods = con.foodList.map(food => {
        if(food.rating == props.rating) {
            return(
                <Food 
                    food = {food}/>
            )
        }
    })
  
    return (
        <div className = {props.className}>
            <div className="list-header">{props.header}</div>
            {foods}
        </div>
    )
}