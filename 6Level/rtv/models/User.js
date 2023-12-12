const mongoose = require('mongoose') 
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        lowercase : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    memberSince : {
        type : Date,
        default : Date.now()
    },
    isAdmin : {
        type : Boolean,
        default : false
    }
})

//pre-save hook to encrypt user passwords on signup 
//hook = function fired on inbetween or a moment of time 
//this happens pre-save before saved on db to make sure pw is encrypted on save
userSchema.pre("save", function(next){
    const user = this
    if(!user.isModified("password")) return next()
    bcrypt.hash(user.password, 10)
}
)

module.exports = mongoose.model('User', userSchema)