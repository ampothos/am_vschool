import './App.css'
import React from "react"
import BadgeForm from './components/BadgeForm'
import BadgeList from './components/BadgeLIst'
import ColorBlock from './components/ColorBlock'

function App() {
  const [badgeObjects, setBadgeObjects] = React.useState([{
    firstname : "ned",
    lastname : "joseph",
    email : "ned@joseph.tyler", 
    birthplace : "nowhere", 
    phone : "666-666-6666", 
    favoriteFood : "dreams",
    about : "some stuff"
  }])
  
  const [formData, setFormData] = React.useState({
    firstname : "",
    lastname : "",
    email : "", 
    birthplace : "", 
    phone : "", 
    favoriteFood : "",
    about : ""
  }) 

  const [contact, setContact] = React.useState({
    name : "john",
    address : {
      street : "123",
      stuff : "456"
    }
  })
  console.log(contact)

  setContact(prev => ({
    ...prev,
    address: {
      ...prev.address,
      street: "moar"
    }
  }))
  console.log(contact)
  return (
    <div>
      <BadgeForm
        setBadges = {setBadgeObjects}
        formData = {formData}
        setFormData = {setFormData}
        />

      <BadgeList
        badges = {badgeObjects}
        />
      
    </div>
    
  )
}
export default App
