const express = require("express")
const foodRouter = express.Router()

const FoodModel = require('../models/foodModel')

foodRouter.get("/", (req, res, next) => {
    FoodModel.find() 
        .then((foods) => {
            res.send(foods)
        })
        .catch((err) => {
            res.status(500)
            return next(err)
        })
})

foodRouter.post("/", (req, res, next) => {
    const newItem = new FoodModel(req.body)
    newItem.save()
        .then((savedItem) => {
            res.status(201).send(savedItem)
        })
        .catch(err => {
            res.status(500)
            return next(err)
        })
})

foodRouter.delete("/:foodId", (req, res, next) => {
    FoodModel.findOneAndDelete({_id : req.params.foodId})
        .then(deletedItem => {
            res.status(201).send(`Successfully deleted item : ${deletedItem.name}`)
        })
        .catch(err => {
            res.status(500)
            return next(err)
        })
})

foodRouter.put("/:foodId", (req, res, next) => {
    FoodModel.findOneAndUpdate({_id : req.params.foodId}, req.body)
        .then(updatedItem => {
            res.status(201).send(`Successfully updated item : ${updatedItem.name}`)
        })
        .catch(err => {
            res.send(500)
            return next(err)
        })
})

module.exports = foodRouter