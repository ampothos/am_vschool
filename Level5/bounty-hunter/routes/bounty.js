const express = require("express")
const bountyRouter = express.Router()
const BountyModel = require('../models/bounty')

bountyRouter.route("/")
    .get((req, res, next) => {
        BountyModel.find() 
            .then(bounties => {
                res.send(bounties)
            })
            .catch(err => {
                res.status(500)
                return next(err)
            })
    })
    .post((req, res, next) => {
        const newBounty = new BountyModel(req.body)
        newBounty.save() 
            .then(savedBounty => {
                res.status(201).send(savedBounty)
            })
            .catch(err => {
                res.status(500)
                return next(err)
            })
    })

bountyRouter.route("/:bountyId")
    .get((req, res, next) => {
        const bountyId = req.params.bountyId
        BountyModel.findById(bountyId)
            .then(foundBounty => {
                res.send(foundBounty)
            })
            .catch(err => {
                res.status(500)
                return next(err)
            })
        })
    .delete((req, res, next) => {
        const bountyId = req.params.bountyId
        BountyModel.findOneAndDelete({_id : bountyId})
            .then(deletedBounty => {
                res.status(201).send(`Successfully deleted bounty for ${deletedBounty.firstName} ${deletedBounty.lastName}`)
            })
            .catch(err => {
                res.status(500)
                return next(err)
            })
    })
    .put((req, res, next) => {
        const bountyId = req.params.bountyId
        BountyModel.findOneAndUpdate({_id : bountyId}, req.body)
            .then(updatedBounty => {
                res.status(201).send(`Successfully updated bounty for ${updatedBounty.firstName} ${updatedBounty.lastName}`)
            })
            .catch(err => {
                res.send(500)
                return next(err)
            })
    })

module.exports = bountyRouter