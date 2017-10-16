//require express so we can start using it.
var express = require('express');
//create an express app.
var app = express();
var bodyParser = require('body-parser');

// serve the public directory as a static file directory
app.use(express.static('public'));

// add the body-parser middleware to the server
app.use(bodyParser.urlencoded({ extended: true }));


//require the models directory in server.js
var db = require('./models');
var controllers = require('./controllers');

//HTML endpoints
app.get('/', function(req, res){
  res.sendFile('views/index.html' , { root : __dirname});
})
//JSON api endpoints
app.get('/api', controllers.api.index);
app.get('/api/albums', controllers.albums.index)
app.post('/api/albums', controllers.albums.create)


// listen on port 3000
app.listen(3000, function() {
  console.log('Server running on http://localhost:3000');
});
