import React from "react" 
import { GutContext } from "./gutContext"

export default function FoodForm(props) {
    const con = React.useContext(GutContext)

    // form to be used for home or editing
    return (
        <form className="form"
            onSubmit = {con.handleSubmit}>
            <input
                type = "text"
                className= "name"
                name = "name"
                value = {con.foodInput.name}
                onChange = {con.handleChange}
                placeholder = "Food Name"
                required/>
            <input 
                type = "text"
                className = "category"
                name = "category"
                value = {con.foodInput.category}
                onChange = {con.handleChange}
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
                    value = {con.foodInput.rating}
                    onChange = {con.handleChange}
                    name = "rating"
                    placeholder = "1(bad) to 3(great)"
                    required/>
            </div>
            <textarea
                name = "comments"
                className = "comments"
                value = {con.foodInput.comments}
                onChange = {con.handleChange}
                placeholder="Write any comments or observations here"></textarea>
            <button className="submit">{props.buttonVal}</button>
        </form>
    )
}