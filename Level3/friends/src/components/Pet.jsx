import React from "react" 

export default function Pet(props) {
    return (
        <div className="pet">
            <h3 className="pet-name">{props.name}</h3>
            <h4 className="pet-breed">{props.breed}</h4>
        </div>
    )
}