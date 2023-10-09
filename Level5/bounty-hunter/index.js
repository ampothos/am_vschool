const express = require("express")
const morgan = require("morgan")
const mongoose = require('mongoose')
const app = express()

app.use("/", express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb+srv://ampalmato:EiWINrDsJ231cRw0@cluster0.p6ou1ef.mongodb.net/bounties')
  .then(()=> console.log("Connected to MongoDB"))
  .catch(err => console.error(err));

app.use("/bounties", require("./routes/bounty.js"))

app.listen(9000, () => {
    console.log("Server is running on port 9000")
 }) 