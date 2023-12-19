const express = require('express') 
const authRouter = express.Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')

authRouter.post("/signup", (req, res, next) => {
    User.findOne({ username : req.body.username.toLowerCase()}, (err, user) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        if(user){
            res.status(403)
            return next(new Error("That username is already taken"))
        }
        const newUser = new User(req.body)
        //this is where the hook happens before save
        newUser.save((err, savedUser) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            //payload and secret 
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
            return res.status(201).send({token, user : savedUser.withoutPassword()})
        })
    })
})


authRouter.post("/login", (req, res, next) => {
    User.findOne({username : req.body.username.toLowerCase()}, (err, user) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        if (!user) {
            res.status(403)
            return next((new Error("Username or password is incorrect.")))
        }
        // if(req.body.password !== user.password) {
        //     console.log(req.body)
        //     res.status(403)
        //     return next(new Error("Password incorrect."))
        // }
        user.checkPassword(req.body.password, (err, isMatch) => {
            if(err) {
                res.status(403)
                return next(new Error("Username or password is incorrect."))
            }
            if(!isMatch) {
                res.status(403)
                return next(new Error("Username or password is incorrect."))
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(200).send({token, user : user.withoutPassword()})
        })

        
    })
})


module.exports = authRouter