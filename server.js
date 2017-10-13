//require express so we can start using it.
var express = require('express');
//create an express app. 
var app = express();


app.get('/', function(req, res){
  res.json({greeting: "hello!"})
})

// listen on port 3000
app.listen(3000, function() {
  console.log('Server running on http://localhost:3000');
});
