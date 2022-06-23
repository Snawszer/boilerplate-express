let express = require('express');
let app = express();

console.log("Hello world");

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});






























 module.exports = app;
