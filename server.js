require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UsersController = require('./routes/UsersController')
const ChildController = require('./routes/ChildController')
const StatsController = require('./routes/StatsController')

mongoose.Promise = global.Promise;

const app = express();

mongoose.connect(process.env.MONGODB_URI,{useMongoClient: true}); //mongodb://localhost/idea-board
const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('MongoDB Connected Successfully');    
}); 
// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ', err);
}); 

app.use(express.static(`${__dirname}/client/build`))
app.use(bodyParser.json())

app.use('/api/users', UsersController)
app.use('/api/children', ChildController)
app.use('/api/children/:childId/stats', StatsController)


app.get('/', (req,res) => {
  res.send('Hello world!')
  res.sendFile(`${__dirname}/client/build/index.html`)
})


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})