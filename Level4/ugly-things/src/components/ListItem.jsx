import React from "react" 
import { Context } from "../context"
import axios from "axios"
import EditForm from "./EditForm"

export default function ListItem(props) {
    const con = React.useContext(Context)
    const [isEditing, setIsEditing] = React.useState(false)
    const {title, description, imgUrl, _id} = props.value

    async function deletePost() {
        await axios.delete(`${con.url}/${_id}`).then(res => {
            window.location.reload()
        })
        .catch(err => console.log(err))
    }

    function toggleEdit(){
        setIsEditing(prev => !prev)
        
    }

    return (
        <div className="listitem-container">
            <li className="listitem">
                <div className="title">{title}</div>
                <div className="description">{description}</div>
                <img className="image" src={imgUrl}></img>
            </li>
            {isEditing && <EditForm
                            value = {props.value}
                            toggleEdit = {toggleEdit}/>}
            <button onClick={toggleEdit} className="edit">Edit</button>
            <button onClick={deletePost} className="delete">Delete</button>
        </div>
    )
}