const express = require("express") 
const app = express()
const dino = require("./dinosaurs")

app.use(express.json())

const thing = {thing : "thing"}


app.use((req, res, next) => dino(req, res, next))

app.get("/", (req, res, next) => {
    
    res.send(req.body)
})

app.listen(9000, () => {
    console.log("Server is running on port 9000")
 }) 