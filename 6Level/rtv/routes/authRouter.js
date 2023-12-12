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
            const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
            return res.status(201).send({token, user : savedUser})
        })
    })
})

// authRouter.post("/signup", (req, res, next) => {
//     User.findOne({username : req.body.username.toLowerCase()}).exec()
//         .then((user) => {
//             res.status(403)
//             return next(new Error("That username is already taken."))
//         })
//         .catch((err) => {
//             res.status(500)
//             return next(err)
//         })

//         const newUser = new User(req.body)
//         newUser.save()
//             .then((savedUser) => {
//                 const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
//                 return res.status(201).send({token, user : savedUser})
//             })
//             .catch((err) => {
//                 res.status(500)
//                 return next(err)
//             })
        
//         })

authRouter.post("/login", (req, res, next) => {
    User.findOne({username : req.body.username.toLowerCase()}, (err, user) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        if (!user) {
            res.status(403)
            return next((new Error("Username incorrect.")))
        }
        if(req.body.password !== user.password) {
            console.log(req.body)
            res.status(403)
            return next(new Error("Password incorrect."))
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET)
        return res.status(200).send({token, user})
    })
})


// authRouter.post("/login", (req, res, next) => {
//     User.findOne({username : req.body.username.toLowerCase()})
//         .then((user) => {
//             if (user.username !== req.body.username.toLowerCase()) {
//                 res.status(403)
//                 return next(new Error("Username or Password are incorrect."))
//             }
//             if (user.password !== req.body.password) {
//                 res.status(403)
//                 return next(new Error("Username or Password are incorrect."))
//             }
//             const token = jwt.sign(user.toObject(), process.env.SECRET)
//             return res.status(200).send({token, user})
//         })
//         .catch((err) => {
//             res.status(500)
//             return next(err)
//         })
// })

module.exports = authRouter