var express = require('express');
var bodyParser = require('body-parser');
var queries = require('./queries.js');

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
  // res.json({
  //   Success: true
  // });
  // var data = JSON.parse(res.data);

  // *** NEED TO CHECK IF DATA.USERNAME WORKS FOR GET REQUEST

  // perform database query to select all data for user using helper function
  // that is same as POST listener function

  // var data = JSON.parse(res.data);
  // *** NEED TO CHECK IF DATA.USERNAME WORKS FOR GET REQUEST
  queries.selectUserData(req.query, function (err, results) { // JEE COMMENTD OUT TO GET SERVER TO RUN
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
  // console.log('REQ BODY', req.body);
  var testObj = {
    username: req.body.name,
    mind: req.body.mind,
    body: req.body.body,
    soul: req.body.soul
  }

  queries.getUserId(testObj.username, function(data) {
    console.log('data', data[0].id);
    testObj.id = data[0].id;
    queries.insertUserData(testObj, function(err, results) {
      if (err) {
        console.error('User data cannot be inserted into table');
      } else {
        res.json({
          Success: true
        });
      }
    })
  });
  res.status(201)
  // res.json({
  //   Success: true
  // });
  // var data = JSON.parse(res.data);

  // perform database query to insert user using helper function
  console.log('TEST OBJECT', testObj);
  // queries.insertUserData(testObj, function (err, results) {
    // if (err) {
      // console.error('User data cannot be inserted into table', err);
    // }

    // on success: perform database query to select all data for user using
    // helper function that is same as GET listener function
    // res.json({
      // Success: true
    // });
    // on success: send data to graph creator or client to display
    // queries.selectUserData(req.body, function (err, results) {
    //   if (err) {
    //     console.error('User data not selected')
    //   }
    //   // on success: send data to graph creator or client to display
    //   res.json({
    //     Success: true,
    //     Data: results
    //     // **Need to test results
    //   });
    // });
  // });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
})
