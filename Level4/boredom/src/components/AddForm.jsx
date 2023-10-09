import React from "react"
import { BoredContext, BoredContextProvider } from "./boredContext"


export default function AddForm(props) {
    const con = React.useContext(BoredContext)

    //determines if button or adding  form 
    const [isAdding, setIsAdding] = React.useState(false)
    function toggleAdd() {
        setIsAdding(prev => !prev)
    }

    // populate the state object with the current list item
    const [itemToLog, setItemToLog] = React.useState(
        {key : con.activity.key,
        item : con.activity,
        description : "",
        imgUrl : ""})
    
    // update any value in the itemToLog object 
    function updateItem(e) {
        e.preventDefault()
        let item = e.target
        
        setItemToLog(prev => {
            return ({...prev,
                    [item.name] : item.value})
        })
        
    }

    return (
        <>
        {isAdding ? 
        <form name="addForm" 
        className="addForm"
        onSubmit={addToLog}
         >
            <textarea name="description" 
                        onChange={updateItem} className="description" placeholder="Describe your experience" value={itemToLog.description}/>
            <input type="text" 
                    name="imgUrl" 
                    placeholder="Image URL"
                    onChange={updateItem}
                    value={itemToLog.imgUrl}/>
            <button>Submit</button>
        </form> : 
        <button onClick={toggleAdd} className="add-to-log">I've Tried This!</button>}
        </>
    )
}