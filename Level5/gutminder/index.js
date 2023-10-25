const express = require("express")
const app = express()

const mongoose = require("mongoose")
const morgan = require("morgan")
const credentials = require("./credentials")

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(`mongodb+srv://${credentials}@cluster0.p6ou1ef.mongodb.net/store`)
  .then(()=> console.log("Connected to MongoDB"))
  .catch(err => console.error(err));

app.use("/foods", require("./routes/foods"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg : err.message})
})

app.listen(9000, () => {
    console.log("Server is running on port 9000.")
})