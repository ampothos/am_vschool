const express = require("express")
const fruitRouter = express.Router()
const {v4 : uuidv4} = require("uuid")

const fruit = [{type : "apple",
                brand : "apple company",
                price : 1.4},
                {type : "banana",
                brand : "chiquita",
                price : 1},
                {type : "orange",
                brand : "florida",
                price : 2}]

fruitRouter.route("/") 
    .get( )