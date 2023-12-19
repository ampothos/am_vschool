const express = require('express')
const app = express() 
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require('express-jwt')


app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(`mongodb+srv://${process.env.CREDENTIALS}@cluster0.p6ou1ef.mongodb.net/rtv`)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error(err))

//routes
app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressjwt({secret : process.env.SECRET, algorithms : ['HS256']}))
app.use('/api/posts', require('./routes/postRouter.js'))
app.use('/api/comments', require('./routes/commentRouter.js'))
//end routes

//error handling
app.use((err, req, res, next) => {
    if(err.name === "UnauthorizedError") {
        res.status(err.status)
        return;
    }
    res.send({errMsg : err.message})
})

app.listen(9000, () => {
    console.log(`Server is running on local port 9000.`)
})