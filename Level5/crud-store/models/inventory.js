const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    name : {type : String,
            required : true},
    category : {
        type : String,
        required : true,
        default : "Uncategorized"
    },
    price : {
        type : Number,
        required : true
    },
    ingredients : [{type : String}],
    inStock : {
        type : Boolean,
        required : true
    }
})

module.exports = mongoose.model("Inventory", inventorySchema)