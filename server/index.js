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
  // console.log('INSIDE GET', req.query)
  var entryObj = {
    username: req.query.username || req.query.name
  }
  queries.getUserId(entryObj.username, function(data) {

    // entryObj.id = 1
    // COMMENTED OUT FOR dbToGraph TESTING. CORRECT ID WAS NOT COMING UP
    if (data.length > 0) {
      entryObj.id = data[0].id;

      queries.selectUserData(entryObj, function (err, results) {
        if (err) {
          console.error('User data not selected', err)
        } else {
          console.log('RESULTS...', results);
          res.json({
            Success: true,
            Data: queries.dbToGraph(results)
          });
        }
      })
    } else {
      console.log('User not found');
    }
  });

});

app.post('/users/post', function (req, res) {
  // console.log('REQ BODY', req.body);
  var entryObj = {
    username: req.body.name,
    mindInput1: req.body.mindInput1,
    mindInput2: req.body.mindInput2,
    mindInput3: req.body.mindInput3,
    bodyInput1: req.body.bodyInput1,
    bodyInput2: req.body.bodyInput2,
    bodyInput3: req.body.bodyInput3,
    soulInput1: req.body.soulInput1,
    soulInput2: req.body.soulInput2,
    soulInput3: req.body.soulInput3
  }

  queries.getUserId(entryObj.username, function(data) {
    // console.log('data', data[0].id);
    entryObj.id = data[0].id;
    console.log('ENTRY DATA OBJ POST', entryObj)
    queries.insertUserData(entryObj, function(err, results) {
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
});

app.listen(process.env.PORT || 3000, function() { // Added for Heroku deployment
  console.log('listening on port 3000!');
})
