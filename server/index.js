var express = require('express');
var bodyParser = require('body-parser');
// var queries = require('./queries.js');

var app = express();


// middleware that accepts only url Encoded files down server
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./'))
app.use(express.static(__dirname + '/../client/dist'));

// "Parses the text as JSON and exposes the resulting object on req.body.""
// **Might be unncessary
app.use(bodyParser.json());


app.get('/users/get', function (req, res) {
  res.status(200);
  res.json({
    Success: true
  });
  // var data = JSON.parse(res.data);

  // *** NEED TO CHECK IF DATA.USERNAME WORKS FOR GET REQUEST

  // perform database query to select all data for user using helper function
  // that is same as POST listener function

  var data = JSON.parse(res.data);
  // *** NEED TO CHECK IF DATA.USERNAME WORKS FOR GET REQUEST
  queries.selectUserData(req.body.username, function (err, results) { // JEE COMMENTD OUT TO GET SERVER TO RUN
    if (err) {
      console.error('User data not selected')
    }
    // on success: send data to graph creator or client to display
    res.json({
      Success: true,
      Data: results
      // **Need to test results
    });
  });

});

app.post('/users/post', function (req, res) {
  res.status(201)
  res.json({
    Success: true
  });
  // var data = JSON.parse(res.data);

  // perform database query to insert user using helper function
  queries.insertUserData(req.body, function (err, results) {
    if (err) {
      console.error('User data cannot be inserted into table');
    }
    // on success: perform database query to select all data for user using
    // helper function that is same as GET listener function
    res.json({
      Success: true
    });
    // on success: send data to graph creator or client to display
    queries.selectUserData(req.body, function (err, results) {
      if (err) {
        console.error('User data not selected')
      }
      // on success: send data to graph creator or client to display
      res.json({
        Success: true,
        Data: results
        // **Need to test results
      });
    });
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
})
