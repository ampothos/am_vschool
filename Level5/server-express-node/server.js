const express = require("express")
const mongoose = require('mongoose')
const app = express() 
const morgan = require("morgan")

app.use(express.json())
app.use(morgan('dev'))

//connect to DB (localhost : [default mongoport]/[db name])

mongoose.connect('mongodb+srv://ampalmato:EiWINrDsJ231cRw0@cluster0.p6ou1ef.mongodb.net/movies')
  .then(()=> console.log("Connected to MongoDB"))
  .catch(err => console.error(err));



//Routes
app.use("/movies", require("./routes/movieRouter.js"));


//Error handling with app.use
//4 args, additional err flags specifically for errors
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg : err.message});
})

app.listen(9000, () => {
    console.log("Server is running on port 9000");
 }) 
