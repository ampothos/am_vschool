import React from "react" 
import AddBountyForm from "./AddBountyForm"

export default function Bounty(props){
    const {_id} = props
    const [editToggle, setEditToggle] = React.useState(false)

    function toggle() {
        setEditToggle(prev => !prev)
    }
    console.log(props)
    return(
        <div className="bounty">
            <h2 className="name">{props.firstName} {props.lastName}</h2>
            <div className="living">{props.living ? "Alive" : "Dead"}</div>
            <div className="amount">
                <span className="bounty-labels">Bounty : </span>
                ${props.bounty}
            </div>
            <div className="type">
                <span className="bounty-labels">Type : </span>
                {props.type}
            </div>
            <button className="delete-btn"
                    onClick = {() => props.deleteBounty(_id)}>Delete</button>
            {!editToggle ? 
                <button className="edit-btn"
                        onClick={toggle}>
                            Edit
                </button>
                : 
                <>
                    <AddBountyForm
                        {...props}
                        buttonText = "Submit Edit"
                        submit = {props.editBounty}
                    />
                    <button 
                        onClick = {toggle}>Close</button>
                </>}
        </div>
    )
}