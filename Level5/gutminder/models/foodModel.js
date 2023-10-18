const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    rating : {
        type : String,
        required : true
    },
    comments : {
        type : String
    }
})

module.exports = mongoose.model("Food", foodSchema) 