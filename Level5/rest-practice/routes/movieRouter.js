const express = require("express")
const movieRouter = express.Router() //constructor 
const uuid = require("uuid")

const movies = [{_id: uuid.v4(), title: "Die hard", genre: "christmas"},
                {_id: uuid.v4(), title: "star wars", genre: "space"},
                {_id: uuid.v4(), title: "Lion King", genre: "lion"}]

// movieRouter.get("/", (req, res) => {
//     res.send(movies)
// })

// movieRouter.post("/", (req, res) => {
//     req.body._id = uuid.v4()
//     movies.push(req.body)
//     res.send(`Successfully added ${req.body.title} to the list.`)
// })

movieRouter.route("/")
    .get((req, res) => {
        res.send(movies)
    })
    .post((req, res) => {
        req.body._id = uuid.v4()
        movies.push(req.body)
        res.send(`Successfully added ${req.body.title} to the list.`)
    })

movieRouter.get("/:movieId", (req, res) => {
    console.log(req.params.movieId)
    const movieId = req.params.movieId

    const foundMovie = movies.find(movie => movie._id === movieId)

    res.send(foundMovie)
})

movieRouter.get("/search/genre", (req, res) => {
    const genreQuery = req.query.genre
    console.log(genreQuery)
    const foundMovie = movies.find(movie => movie.genre === genreQuery)
    console.log(foundMovie)
    res.send(foundMovie)
})
module.exports = movieRouter