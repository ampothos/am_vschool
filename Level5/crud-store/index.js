const express = require("express")
const mongoose = require('mongoose')
const app = express() 
const morgan = require("morgan")

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb+srv://ampalmato:EiWINrDsJ231cRw0@cluster0.p6ou1ef.mongodb.net/store')
  .then(()=> console.log("Connected to MongoDB"))
  .catch(err => console.error(err));

app.use("/inventory", require('./routes/inventory'))

//error handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg : err.message});
})

app.listen(9000, () => {
    console.log("Server is running on port 9000");
 }) 