const express = require("express")
const movieRouter = express.Router() //constructor 
//this is the returned movieSchema Model
const MovieModel = require('../models/movie')


//node convention is errors first 
movieRouter.get("/", (req, res, next) => {
    MovieModel.find()
        .then((movies) => {
            res.send(movies)
        })
        .catch((err) => {
            res.status(500)
            return next(err)
         })
})

// movieRouter.post("/", (req, res, next) => {
//     const newMovie = new Movie(req.body)
//     newMovie.save((err, savedMovie) => {
//         if(err) {
//             res.status(500)
//             return next(err)
//         }
//         return res.status(201).send(savedMovie)
//     })
// })



movieRouter.get("/:movieId", (req, res, next) => {
    console.log(req.params.movieId)
    const movieId = req.params.movieId

    const foundMovie = movies.find(movie => movie._id === movieId)
    if(!foundMovie) {
        res.status(500)
        const error = new Error("The item was not found")
        //continues to the next app.use which logs the error 
        return next(error)
    }
    res.send(foundMovie)
})

movieRouter.delete("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const newMovieList = movies.filter(movie => movie._id != movieId)
    movies = newMovieList
    res.send(`${movieId} was removed`)
})

movieRouter.put("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const newMovie = Object.assign(movies[movieIndex], req.body)
    res.send(newMovie)
})

// not for the gui 

movieRouter.get("/search/genre", (req, res) => {
    const genreQuery = req.query.genre
    if (!genreQuery) {
        const error = new Error("You must provide a genre.")
        return next(error)
    }
    console.log(genreQuery)
    const foundMovie = movies.find(movie => movie.genre === genreQuery)
    console.log(foundMovie)
    res.send(foundMovie)
})





module.exports = movieRouter