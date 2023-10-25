import React from 'react'
import Footer from "./Footer"
import axios from "axios"

const GutContext = React.createContext()

function GutContextProvider(props) {
    // all foods in the database 
    const [foodList, setFoods] = React.useState([])
    
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

    function editOne(newInfo, foodId) {
        axios.put(`/foods/${foodId}`, newInfo)
            .then(res => {
                console.log(`Successfully edited ${res.data.name}`)
                getAllFoods()
            })
            .catch(err => console.log(err))
    }
    
    return(
        <GutContext.Provider
            value = {{foodList,
                getAllFoods,
                addFood,
                deleteOne,
                editOne}}>
            
            {props.children}

            
        </GutContext.Provider>
    )
}

export {GutContext, GutContextProvider}