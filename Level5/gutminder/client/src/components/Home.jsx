import React from "react"
import FoodForm from "./FoodForm"

export default function Home() {

    // simple home - only the add food form 
    return(
        <div className="home">
            <h2>Home</h2>
            <FoodForm
                buttonVal = "Submit"/>
        </div>
        
    )
}