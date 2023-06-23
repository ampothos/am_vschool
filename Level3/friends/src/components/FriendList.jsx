import React from "react" 
import data from "./data"
import Friend from "./Friend"

export default function FriendList() {
    console.log(data)
    let friends = data.map(person => {
        return (<Friend 
                    name = {person.name}
                    age = {person.age}
                    pets = {person.pets}
                />
    )})
    return (
        <div className="friendlist">
            {friends}
        </div>
    )
}