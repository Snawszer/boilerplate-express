let express = require('express');
let app = express();
require('dotenv').config();

console.log("Hello world");

app.use("/public",express.static(__dirname + '/public'));

app.use(function(req, res, next) {
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);
    next();
});

app.get('/now', function(req, res, next){
    time = new Date().toString()    + ' ' + req.time;
    next();
    },
    function(req,res){
    res.json({time: req.time});
   
});

app.get('/:word/echo', function(req, res){
    var word = req.params.word;
    res.json({echo: word});
});


app.get('/', function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
    
});

app.get('/json', function(req, res) {
    if(process.env.MESSAGE_STYLE=== uppercase){
        res.json({"message": "HELLO JSON"});
    } else res.json({"message": "Hello json"});
    
});




























 module.exports = app;
