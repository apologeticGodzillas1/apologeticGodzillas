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

    entryObj.id = 1
    // COMMENTED OUT FOR dbToGraph TESTING. CORRECT ID WAS NOT COMING UP
    // entryObj.id = data[0].id;

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
  });

});

app.post('/users/post', function (req, res) {
  // console.log('REQ BODY', req.body);
  var entryObj = {
    username: req.body.name,
    mind: req.body.mind,
    body: req.body.body,
    soul: req.body.soul
  }

  queries.getUserId(entryObj.username, function(data) {
    // console.log('data', data[0].id);
    entryObj.id = data[0].id;
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

app.listen(3000, function() {
  console.log('listening on port 3000!');
})
