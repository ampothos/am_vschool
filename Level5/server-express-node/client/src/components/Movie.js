import React from "react" 
import AddMovieForm from "./AddMovieForm"

export default function Movie(props) {
    const {title, genre, _id} = props
    const [editToggle, setEditToggle] = React.useState(false)

    function toggle() {
        setEditToggle(prev => !prev)
    }

    return (
        <div className="movie-container">
            <div className="title">Title : {title}</div>
            <div className="genre">Genre : {genre}</div>
            <button 
            className="delete-btn"
            onClick={() => props.deleteMovie(_id)}>Delete</button>
                
            {!editToggle ?
                <button
                    className="edit-btn"
                    onClick={toggle}>Edit</button>
                : 
                <>
                    <AddMovieForm
                        title={title}
                        genre={genre}
                        buttonText = "Submit Edit"
                        _id = {_id}
                        submit={props.editMovie}
                    />
                    <button
                        onClick={toggle}>Close</button>
                </>}
        </div> 
    )
}