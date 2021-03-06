var express = require ('express');
var app =express();
var port =process.env.PORT || 8000;
var morgan=require('morgan');
var mongoose= require('mongoose');
var bodyParser=require('body-parser');
var router=  express.Router();
var appRoutes = require('./app/Routes/inventory-api')(router);
var appRoutes3 = require('./app/Routes/user-api')(router);
var path      =require('path'); 
//var passport  =require('passport');
//var social    =require('./app/passport/passport')(app,passport); 

app.use(morgan('dev'));
app.use(bodyParser.json()); // for parsing   application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname+'/public'));
app.use('/inventory-api',appRoutes); 
app.use('/user-api',appRoutes3);

mongoose.connect('mongodb://localhost:27017/G-Mart-DataBase',function(err){
  if(err){
     console.log('cannot connect to database'+ err);
   }
   else console.log('successfully connect to database');
 });

app.get ('*', (req,res) => {
res.sendFile(path.join(__dirname+'/public/app/views/practic.html'));
});



app.listen(port,function(){
console.log("Running the server on port"+ port);
});