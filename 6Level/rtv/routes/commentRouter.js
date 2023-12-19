const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/Comment')

commentRouter.post('/:postId', (req, res, next) => {
    req.body.post = req.params.postId
    const newComment = new Comment(req.body)

    newComment.save((err, savedComment) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})

commentRouter.get("/", (req, res, next) => {
    Comment.find((err, comments) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

commentRouter.get('/:postId', (req, res, next) => {
    Comment.find({post : req.params.postId}, (err, comments) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    }) 
})



module.exports = commentRouter