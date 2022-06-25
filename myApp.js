var bodyParser = require('body-parser');
let express = require('express');
let app = express();
require('dotenv').config();


console.log("Hello world");

app.use("/public",express.static(__dirname + '/public'));

app.use(function(req, res, next) {
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);
    next();
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.get('/name/', function(req, res){
    var firstName = req.query.first;
    var lastName = req.query.last;
    res.json
    ({
        name: `${firstName} ${lastName}`
    });
});

app.post('/name', function(req, res){
var firstName = req.body.first;
var lastName = req.body.last;
res.json({name: `${firstName} ${lastName}`});
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
