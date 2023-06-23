import React from "react" 
import Pet from "./Pet"

export default function Friend(props) {
    let pets = ""
    if (props.pets) {
        pets = props.pets.map(pet => {
            return (<Pet
                        name = {pet.name}
                        breed = {pet.breed}
            />)
        })
    }
    return (
        <div className="friend">
            <h2 className="friend-name">{props.name}</h2>
            <div className="friend-age">{props.age}</div>
            <div className="friend-pets">{pets}</div>
        </div>
    )
}