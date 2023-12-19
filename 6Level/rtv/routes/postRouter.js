const express = require('express')
const postRouter = express.Router()
const Post = require('../models/Post')

postRouter.get("/", (req, res, next) => {
    Post.find((err, posts) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})

postRouter.post("/", (req, res, next) => {
    req.body.user = req.auth._id
    const newPost = new Post(req.body)
    newPost.save((err, post) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(post)
    })
})

postRouter.delete("/:postId", (req, res, next) => {
    Post.findOneAndDelete({
        _id : req.params.postId, user : req.auth._id},
        (err, deletedPost) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted post : ${deletedPost.title}`)
        }
    )
})

postRouter.put("/:postId", (req, res, next) => {
    Post.findOneAndUpdate({_id : req.params.postId}, req.body, {new : true}, (err, updatedPost) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedPost)
    })
})

//get by user Id
postRouter.get("/user", (req, res, next) => {
    Post.find({user : req.auth._id}, (err, posts) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(posts)
    })
})

postRouter.put('/upVote/:postId', (req, res, next) => {
    Post.findOneAndUpdate(
        { _id: req.params.postId },
        {
            $addToSet: { likedUsers: req.auth._id },
            $pull: { dislikedUsers: req.auth._id }
        },
        { new: true },
        (err, updatedPost) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedPost)
        }
    )
})

postRouter.put('/downVote/:postId', (req, res, next) => {
    Post.findOneAndUpdate(
        { _id: req.params.postId },
        {
            $addToSet: { dislikedUsers: req.auth.__id },
            $pull: { likedUsers: req.auth._id }
        },
        { new: true },
        (err, updatedPost) => {
            if (err) {
                 res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedPost)
        }
    )
})


module.exports = postRouter