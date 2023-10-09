const express = require("express")

const app = express() 
// movies 

app.use("/", express.json())

//Routes
app.use("/movies", require("./routes/movieRouter.js"))

app.listen(9000, () => {
    console.log("Server is running on port 9000")
 }) 
