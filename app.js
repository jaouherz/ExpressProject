var express = require('express');
const mongoose= require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI).then(()=>{
  console.log('MongoDB Connected!');
}).catch(err=>{console.log( err)});
var app = express();

const port = process.env.PORT || 3000;
app.listen(port, function () {console.log('Server running on port ' + port);})
module.exports = app;
