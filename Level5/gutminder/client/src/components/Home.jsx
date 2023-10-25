import React from "react"
import FoodForm from "./FoodForm"
import { GutContext } from "./gutContext"

export default function Home() {
    const con = React.useContext(GutContext)
    
    //empty food form to pass into form as props
    const food = {name : "", category : "", rating : 3, comments : ""}
    // simple home - only the add food form 
    return(
        <div className="home">
            <h2>Home</h2>
            <FoodForm
                buttonVal = "Submit"
                submit = {con.addFood}
                food = {food}/>
        </div>
        
    )
}