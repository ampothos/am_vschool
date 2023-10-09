import React from "react"
import Movie from "./components/Movie"
import AddMovieForm from "./components/AddMovieForm"
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'

export default function App() {
    const [movies, setMovies] = React.useState([])

    function getMovies() {
        axios.get("/movies")
            .then(res => setMovies(res.data))
            .catch(err => console.log(err))
    }
    
    function addMovie(newMovie) {
        axios.post("/movies", newMovie)
            .then(res => {
                setMovies(prev => [...prev, res.data])
                getMovies()
            })
            .catch(err => console.log(err))
    }

    function deleteMovie(_id) {
        axios.delete(`/movies/${_id}`)
            .then(res => {
                setMovies(prev => prev.filter(movie => movie._id !== _id))
            })
            .catch(err => console.log(err))
    }

    function editMovie(updates, movieId) {
        axios.put(`/movies/${movieId}`, updates)
            .then(res => {
                setMovies(prev => 
                    prev.map(movie => movie._id !== movieId ? movie : res.data)
                )
            })
            .catch(err => console.log(err))
    }

    React.useEffect(() => {
        getMovies()
    }, [])

    return(
        <div>
            <div className="moviecontainer">
            <AddMovieForm
                submit = {addMovie}
                buttonText = "Add Movie"/>
                {movies.map(movie => <Movie 
                                    {...movie} 
                                    deleteMovie = {deleteMovie}
                                    editMovie = {editMovie}
                                    key={uuidv4()}/>)}
            </div>
        </div>
    )
}
