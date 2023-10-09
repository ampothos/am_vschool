const express = require("express")
const inventoryRouter = express.Router() //constructor 
//this is the returned movieSchema Model
const InventoryModel = require('../models/inventory')

inventoryRouter.get("/", (req, res, next) => {
    InventoryModel.find()
        .then((movies) => {
            res.send(movies)
        })
        .catch((err) => {
            res.status(500)
            return next(err)
         })
})

inventoryRouter.post("/", (req, res, next) => {
    const newItem = new InventoryModel(req.body)
    newItem.save()
        .then((savedItem) => {
            res.status(201).send(savedItem)
        })
        .catch(err => {
            res.status(500)
            return next(err)
        })
})

inventoryRouter.delete("/:itemId", (req, res, next) => {
    InventoryModel.findOneAndDelete({_id : req.params.itemId})
        .then(deletedItem => {
            res.status(201).send(`Successfully deleted item: ${deletedItem.name}`)
        })
        .catch(err => {
            res.status(500)
            return next(err)
        })
})

inventoryRouter.put("/:itemId", (req, res, next) => {
    InventoryModel.findOneAndUpdate({_id : req.params.itemId}, req.body)
        .then(updatedItem => {
            res.status(201).send(`Successfully updated item: ${updatedItem.name}`)
        })
        .catch(err => {
            res.send(500) 
            return next(err)
        })
})
module.exports = inventoryRouter