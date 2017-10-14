const mongoose = require('mongoose')

const statSchema = mongoose.Schema({
    sport:{
        name:String,
        teamName: String,
        location: String,
        rating: String
        
    },
    position:{
        one: String,
        required: true,
        two: String,
        required: false
    },
    datePlayed:{
        type:Date,
        default: Date.now
    },
    description:{
        type:String,
        default:'Overall Game Summary'
    }
})

const childrenSchema = mongoose.Schema({
    name: String,
    age: Number,
    height: String,
    weight: String,
    stats:[statSchema]
})

const userSchema = mongoose.Schema({
    userName: String,
    password: String,
    name: String,
    address: String,
    children:[childrenSchema]
})


    const User = mongoose.model('User', userSchema)
    const Children = mongoose.model('Children', childrenSchema)
    const Stat = mongoose.model('Stats', statSchema)
    module.exports = {
        User, Children, Stat
    }