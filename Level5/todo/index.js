const express = require('express')
const app = express() 
const {v4 : uuidv4} = require('uuid')
const router = express.Router()
const morgan = require("morgan")

const todos = [{
    "name": "The name",
    "description": "The description of the todo",
    "imageUrl": "http://www.myimage....",
    "completed": false,
    "_id": "23k4lh23h2",
},
{
    "name": "The name",
    "description": "The description of the todo",
    "imageUrl": "http://www.myimage....",
    "completed": false,
    "_id": "23k4lh23h2",
},
{
    "name": "The name",
    "description": "The description of the todo",
    "imageUrl": "http://www.myimage....",
    "completed": false,
    "_id": "23k4lh23h2",
}
]

app.use(express.json())
app.use(morgan('dev')) //logs requests to the console 

app.route("/")
    .get((req, res) => {
        res.send(todos)
    })
    .post((req, res) => {
        req.body._id = uuidv4()
        todos.push(req.body)
        res.send(`${req.body.name} was added to the list.`)
    })
    .put((req, res) => {
        const todoId = req.body._id
        const todoIndex = todos.findIndex(todo => todo._id === todoId)
        const updatedTodo = Object.assign(todos[todoIndex], req.body)
        res.send(updatedTodo)
    }) 
    .delete((req, res) => {
        const todoId = req.body._id
        const todoIndex = todos.findIndex(todo => todo._id === todoId)
        todos.splice(todoIndex, 1)
        res.send(`${req.body.name} deleted.`)
    })

app.listen(8000, () => {
    console.log("Server is running on port 8000")
    }) 