var mysql = require('mysql');
var connection = require('../Database/index.js') // Added case sensitivity for Heroku deployment

module.exports = {

  selectUserData: function (query, callback) {
    connection.query(
      `SELECT * FROM entries
      WHERE users_id = ${query.id}`
      , function(err, results) {
        if (err) {
          console.log('queries.js: selectUserData function failed', err);
        } else {
          console.log('Data mined successfully!');
          callback(null, results);
        }
    })
  },

  getUserId: function(query, callback) {
    connection.query(
      `SELECT id FROM users
       WHERE username = '${query}'`
      , function(err, results) {
        if (err) {
          console.log('queries.js: getUserId function failed', err);
        } else {
          callback(null, results);
        }
      })
  },

  insertUserData: function (data, callback) {
    connection.query(
    `INSERT INTO entries (users_ID, mind1, mind2, mind3, body1, body2, body3, soul1, soul2, soul3) VALUES
    (${data.id}, ${data.mindInput1}, ${data.mindInput2}, ${data.mindInput3}, ${data.bodyInput1}, ${data.bodyInput2}, ${data.bodyInput3}, ${data.soulInput1}, ${data.soulInput2}, ${data.soulInput3})
    `, function (err, results, fields) {
      if (err) {
        console.log('queries.js: insertUserData function failed', err);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  returnEntries: function (callback) {
    connection.query('select * from entries', function (err, results) {
      if (err) {
        console.log('queries.js: returnEntries function failed', err);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  dbToGraph: function (dbData) {
    var graphObj = [{
      name: 'mind',
      data: [0]
    }, {
      name: 'body',
      data: [0]
    }, {
      name: 'soul',
      data: [0]
    }, {
      name: 'average',
      data: [0],
      rgba: '#FF0000',
      type: 'area',
      fillOpacity: 0.3
    }];

    for ( var i = 0; i < dbData.length; i++ ) {
      var mindAvg = ( (dbData[i].mind1 + dbData[i].mind2 + dbData[i].mind3) / 3 );
      var bodyAvg = ( (dbData[i].body1 + dbData[i].body2 + dbData[i].body3) / 3 );
      var soulAvg = ( (dbData[i].soul3 + dbData[i].soul3 + dbData[i].soul3) / 3 );

      graphObj[0].data.push(mindAvg);
      graphObj[1].data.push(bodyAvg);
      graphObj[2].data.push(soulAvg);
      graphObj[3].data.push( (mindAvg + bodyAvg + soulAvg) / 3 );
    }
    return graphObj;
  }
};
