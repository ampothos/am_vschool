import React from "react"
import './App.css'
import NameList from "./NameList"

export default function App() {
  const [name, setName] = React.useState("")
  const [nameList, setNameList] = React.useState([])

  function handleSubmit(event) {
    event.preventDefault() 

  }

  function handleChange(event) {
    
    const name = event.target.value
    setName(name)
   
  }

  function handleSubmit(event) {
     event.preventDefault()
     setNameList(prev => {
      return ([
        ...prev,
        name
      ])
     })
     setName("")
  }

  return (
      <div className="app">
          <form className="form"
                onSubmit={handleSubmit} >
            <input 
              type="text"
              placeholder="Name Here"
              value = {name}
              onChange = {handleChange}
            />
            <button>Add to List</button>
          </form>
          <div>
            <h1>{name}</h1>
          </div>
          <NameList
            names = {nameList}
            />
      </div>
  )
}


