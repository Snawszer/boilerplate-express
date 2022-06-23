let express = require('express');
let app = express();

console.log("Hello world");

app.use("/public",express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
    res.json({"message": "Hello json"});
});

app.get('/json', function(req, res) {
    res.json({"message": "Hello json"});
});




























 module.exports = app;
