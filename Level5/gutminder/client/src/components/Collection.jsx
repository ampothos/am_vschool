import React from "react" 
import FoodList from "./FoodList"
import {GutContext, GutContextProvider} from "./gutContext"

export default function Collection() {
    const con = React.useContext(GutContext)

    //display 3 lists, 1 of each category, corresponding info passed as props
    return(
        <div className="collection">
            <FoodList
            header = "Rating 1 (Ugh)"
            className = "list one"
            rating = {1}/>
            <FoodList
            className = "list two"
            header = "Rating 2 (Meh)"
            rating = {2}/>
            <FoodList
            header = "Rating 3 (Wow!)"
            className = "list three"
            rating = {3}/>
        </div>
    )
}