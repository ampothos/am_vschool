import React from "react"
import { Context } from "../context"
import axios from "axios"

export default function EditForm(props) {
    const context = React.useContext(Context)
    const {title, imgUrl, description, _id} = props.value
    const [post, setPost] = React.useState({title,
                                            imgUrl,
                                            description})
    
    function trackEdit(event) {
        const {name, value} = event.target
        setPost(prev => {
            return ({...prev,
                    [name] : value})
        })
    }                                     
    async function editPost(e){
        e.preventDefault()
        await axios.put(`${context.url}/${_id}`, post)
                .then(res => console.log(res))
                .catch(err => console.log(err))
            setPost({title: "", imgUrl: "", description: ""})
            props.toggleEdit()
            window.location.reload()
    }
    return (
        <div className="form-container">
            <form className="edit-form" 
                    name="edit-form">
                <input className="title" 
                        name="title" 
                        type="text"
                        placeholder="Title"
                        onChange={trackEdit}
                        value={post.title}
                        required
                        />
                <input className="url"
                        name="url"
                        type="text"
                        placeholder="URL"
                        onChange={trackEdit}
                        value={post.imgUrl}
                        required/>
                <input className="description"
                        name="description"
                        type="text"
                        placeholder="Description"
                        onChange={trackEdit}
                        value={post.description}
                        required/>
                <button className="submit"
                        name="submit"
                        onClick={editPost}>
                            Submit
                </button>
            </form>
        </div>
    )
}