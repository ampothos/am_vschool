import React from "react" 
import { GutContext } from "./gutContext"

export default function Food(props) {
   const con = React.useContext(GutContext)

   //pass Id to context func for delete button functionality 
   function deleteFood() {
      con.deleteOne(props.food._id)
   }
   //BELOW : if no comment, resolves to "No comment" 
   //ease of input
   const food = props.food
     return(
        <div className="food-container">
            <div className="food-name">{food.name}</div>
            <div className="food-category">{food.category}</div>
            <div className="food-rating">{food.rating}</div>
            <div className="food-comments">{food.comments ? food.comments : "No comment"}</div>

            <div className="button-container">
               <button className="delete"
                        onClick={deleteFood}>Delete</button>
            </div>
        </div>
     )
}