const mongoose = require('mongoose')
const moment = require('moment')

const statSchema = mongoose.Schema({
    sport:{
        name:String,
        teamName: String,
        location: String,
        playerRating: String
        
    },
    position:{
        one: String,
        required: true,
        two: String,
        required: false
    },
    datePlayed:{
        type:String,
        default: Date.now
    },
    description:{
        type:String,
        default:'Overall Game Summary'
    }
})

const childrenSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    height: String,
    weight: String,
    stats:[statSchema]
})

const userSchema = mongoose.Schema({
    userName: String,
    password: String,
    firstName: String,
    lastName: String,
    address: String,
    
})


    const User = mongoose.model('User', userSchema)
    const Children = mongoose.model('Children', childrenSchema)
    const Stat = mongoose.model('Stats', statSchema)
    module.exports = {
        User, Children, Stat
    }