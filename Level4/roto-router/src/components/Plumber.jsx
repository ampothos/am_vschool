import React from "react"
import {useParams} from "react-router-dom"
import employees from "./employees"

export default function Plumber(props) {
    const {plumberId} = useParams()
    const plumber = employees.find(employee => employee._id == plumberId)
    console.log(plumber)
    return (
        <div className="plumber">
            <h4 className="plumber-name">{plumber.name}</h4>
            <div className="plumber-job">{plumber.job}</div>
            <img className="plumber-img" src={plumber.img}/>
        </div>
    )
}