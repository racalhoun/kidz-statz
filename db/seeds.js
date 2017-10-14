require("dotenv").config();
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise

const { User, Children, Stat } = require('./schema')

const sullTball = new Stat({
    sport:{
        name:'T-Ball',
        teamName:'Tigers',
        location:'Settingdown Village',
        rating:'A Natural'
    },
    position:{
        one: 'Batting'
    },
    datePlayed:{},
    description: 'Working on the fundamentals. If he picks them up as quick as he has everything else, we might have a pro on our hands!' 
})

const liamBaseball = new Stat({
    sport:{
        name:'Baseball',
        teamName: 'Coal Mountain White Raiders',
        loacation:'Coal Mountain Park',
        rating:'Great!',
    },
    position:{
        one: 'Batter',
        two: 'Left-Center'
    },
    datePlayed:{},
    description: 'Great Weather. The White Raiders had a tough start against the Purple Raiders but a 4th inning flyer from Liam Calhoun sealed the Purple Raiders fate.'  
})

const Sullivan = new Children({
    name: 'Sullivan Calhoun',
    age: 5,
    height:"3.11'",
    weight: "47", 
    stats:[]
})

const Liam = new Children({
    name: 'Liam Calhoun',
    age: 8,
    height: "4.2'",
    weight: "49.7",
    stats:[liamBaseball]
})

const Mom = new User({
  userName: 'dbaby',
  password: 'livin&lovin',
  name: 'Donna Calhoun',
  address: '5380 Bucknell Trace, Cumming, GA 30028',
  children:[Liam, Sullivan] 
})






User.remove({})
.then(() => Mom.save())
.then(() => console.log('Successful Save'))
.then(() => mongoose.connection.close())

.then(() => Liam.save())
.then(() => console.log('Successful Save'))
.then(() => mongoose.connection.close())

.then(() => Sullivan.save())
.then(() => console.log('Successful Save'))
.then(() => mongoose.connection.close())

.then(() => liamBaseball.save())
.then(() => console.log('Successful Save'))
.then(() => mongoose.connection.close())

.then(() => sullTball.save())
.then(() => console.log('Successful Save'))
.then(() => mongoose.connection.close())