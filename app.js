var express = require('express');
const mongoose= require('mongoose');
const userRouter = require('./routes/users');
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI).then(()=>{
  console.log('MongoDB Connected!');
}).catch(err=>{console.log( err)});
var app = express()


app.use(express.json());
app.use("user", userRouter)

const port = process.env.PORT || 3000;
app.listen(port, function () {console.log('Server running on port ' + port);})
module.exports = app;
