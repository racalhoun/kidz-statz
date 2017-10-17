require("dotenv").config();
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise
const moment = require('moment')
const { User, Children, Stat } = require('./schema')

const sullTball = new Stat({
    sport:{
        name:'T-Ball',
        teamName:'Tigers',
        location:'Settingdown Village',
        playerRating:'A Natural'
    },
    position:{
        one: 'Batting'
    },
    datePlayed:'2017-01-10',
    description: 'Working on the fundamentals. If he picks them up as quick as he has everything else, we might have a pro on our hands!' 
})

const liamBaseball = new Stat({
    sport:{
        name:'Baseball',
        teamName: 'Coal Mountain White Raiders',
        location:'Coal Mountain Park',
        playerRating:'Great!',
    },
    position:{
        one: 'Batter',
        two: 'Left-Center'
    },
    datePlayed: '2017-01-10',
    description: 'Great Weather. The White Raiders had a tough start against the Purple Raiders but a 4th inning flyer from Liam Calhoun sealed the Purple Raiders fate.'  
})

const Sullivan = new Children({
    firstName: 'Sullivan',
    lastName: 'Calhoun',
    age: 5,
    height:"3.11'",
    weight: "47", 
    stats:[sullTball]
})

const Liam = new Children({
    firstName: 'Liam',
    lastName: 'Calhoun',
    age: 8,
    height: "4.2'",
    weight: "49.7",
    stats:[liamBaseball]
})

const Mom = new User({
  userName: 'dbaby',
  password: 'livin&lovin',
  firstName: 'Donna',
  lastName: 'Calhoun',
  address: '5380 Bucknell Trace, Cumming, GA 30028'
  
})
const Dad = new User({
    userName: 'dadad',
    password: 'heademupandmoveemout',
    firstName: 'Robert',
    lastName: 'Calhoun',
     address: '5380 Bucknell Trace, Cumming, GA 30028'
   
})






User.remove({})
.then(() => Mom.save())
.then(() => console.log('Successful Save'))


.then(() => Dad.save())
.then(() => console.log('Successful Save'))

Children.remove({})
.then(() => Liam.save())
.then(() => console.log('Successful Save'))


.then(() => Sullivan.save())
.then(() => console.log('Successful Save'))



.then(() => mongoose.connection.close())