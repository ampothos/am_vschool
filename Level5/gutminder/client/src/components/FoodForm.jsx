import React from "react" 
import { GutContext } from "./gutContext"

export default function FoodForm(props) {
    
    // template to easily clear or reset the foodInput state
    const foodInputTemplate = {name : props.food.name ||"", category: props.food.category || "", rating: props.food.rating || 3, comments: props.food.comments || ""}
    // food to be added or edited - starts with a clear template setting
    const [foodInput, setFoodInput] = React.useState(foodInputTemplate)

    // handles any change in the foodInput state anywhere
    function handleChange(e) {
        const {name, value} = e.target
        setFoodInput(prev => ({...prev, [name] : value}))
    }

     // handles form submission for foodForm anywhere, ADD 1  
     function handleSubmit(e) {
        e.preventDefault()
        const newFood = foodInput
        props.submit(newFood, props.food._id)
        setFoodInput(foodInputTemplate)
        {props.toggle ? 
            props.toggle() : 
            setFoodInput(foodInputTemplate)}
    } 

    const con = React.useContext(GutContext)

    // form to be used for home or editing
    return (
        <form className="form"
            onSubmit = {handleSubmit}>
            <input
                type = "text"
                className= "name"
                name = "name"
                value = {foodInput.name}
                onChange = {handleChange}
                placeholder = "Food Name"
                required/>
            <input 
                type = "text"
                className = "category"
                name = "category"
                value = {foodInput.category}
                onChange = {handleChange}
                placeholder = "Category"
                required/>
            <div className="rating-container">
                <label 
                    className="rating-label"
                    htmlFor ="rating">
                        1 - 3
                    </label>
                <input 
                    type = "range"
                    min = "1"
                    max = "3"
                    className="rating-range"
                    value = {foodInput.rating}
                    onChange = {handleChange}
                    name = "rating"
                    placeholder = "1(bad) to 3(great)"
                    required/>
            </div>
            <textarea
                name = "comments"
                className = "comments"
                value = {foodInput.comments}
                onChange = {handleChange}
                placeholder="Write any comments or observations here"></textarea>
            <button className="form-button">{props.buttonVal}</button>
        </form>
    )
}