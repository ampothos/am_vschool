import React from "react"
import employees from "./employees"
import {useNavigate, Link} from "react-router-dom"

export default function Team(props) {
    const nav = useNavigate()

    const team = employees.map(employee => {
        return (
            <div key={employee._id}>
                <Link to={`/team/${employee._id}`} >{employee.name}</Link>
                <h4 className="plumber-job">{employee.job}</h4>
            </div>
            
        )
    })

    return(
        <div className="team">
            {team}
        </div>
    )
}