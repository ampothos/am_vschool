import React from "react" 
import { GutContext } from "./gutContext"
import FoodForm from "./FoodForm"

export default function Food(props) {
   const con = React.useContext(GutContext)
   const {_id} = props.food
   const [editToggle, setEditToggle] = React.useState(false)

   //pass Id to context func for delete button functionality 
   function deleteFood() {
      con.deleteOne(_id)
   }

   function toggle() {
      setEditToggle(prev => !prev)
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
               <button className="form-button"
                        onClick={deleteFood}>Delete</button>
            </div>

            <div className="button-container">
               {!editToggle ? 
                  <button className="form-button"
                           onClick={toggle}>Edit

                  </button> 
                  : 
                  <>
                     <FoodForm
                        {...props}
                        buttonVal = "Submit Edit"
                        submit = {con.editOne}
                        toggle = {toggle}/>
                     <button className="form-button"
                           onClick={toggle}>Cancel</button>
                  </>}
            </div>
        </div>
     )
}