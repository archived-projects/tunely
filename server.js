//require express so we can start using it.
var express = require('express');
//create an express app.
var app = express();
app.use(express.static('public'));


app.get('/', function(req, res){
  res.sendFile('views/index.html' , { root : __dirname});
})

// listen on port 3000
app.listen(3000, function() {
  console.log('Server running on http://localhost:3000');
});
