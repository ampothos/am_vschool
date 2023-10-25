import React from 'react'
import Footer from "./Footer"
import axios from "axios"

const GutContext = React.createContext()

function GutContextProvider(props) {
    // template to easily clear or reset the foodInput state
    const foodInputTemplate = {name : "", category: "", rating: 3, comments: ""}

    // all foods in the database 
    const [foodList, setFoods] = React.useState([])
    // food to be added or edited - starts with a clear template setting
    const [foodInput, setFoodInput] = React.useState(foodInputTemplate)
    
    // sets the foodList to all foods in db 
    function getAllFoods() {
        axios.get("/foods")
            .then(res => setFoods(res.data))
            .catch(err => console.log(err))
    }

    // initial db get 
    React.useEffect(() => {
        getAllFoods()
    }, [])

    // uses foodInput to add 1 to db - then causes reload by changing state with getAllFoods(), foodInput is reset with template on reload
    function addFood(newFood) {
        console.log(newFood)
        axios.post("/foods", newFood)
            .then(res => {
                console.log(`Added ${res.data.name} to the database`)
                getAllFoods()
            })
            .catch(err => {
                console.log(err)
            })
    }

    // delete 1 with id, reload with getAllFoods
    function deleteOne(foodId) {
        axios.delete(`/foods/${foodId}`)
            .then(res => {
                console.log(`Successfully deleted ${res.data.name}`)
                getAllFoods()
            })
            .catch(err => console.log(err))
    }

    // handles any change in the foodInput state anywhere
    function handleChange(e) {
        const {name, value} = e.target
        setFoodInput(prev => ({...prev, [name] : value}))
    }

    // handles form submission for foodForm anywhere, ADD 1  
    function handleSubmit(e) {
        e.preventDefault()
        const newFood = foodInput
        setFoodInput(foodInputTemplate)
        addFood(newFood)
    } 


    return(
        <GutContext.Provider
            value = {{foodList,
                foodInput,
                handleChange,
                handleSubmit,
                deleteOne}}>
            
            {props.children}

            
        </GutContext.Provider>
    )
}

export {GutContext, GutContextProvider}