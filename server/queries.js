var mysql = require('mysql');
var connection = require('../database/index.js')


// connection.query(Schema, function (err, reults, fields) {
//   if (err) {
//     console.error('Schema did not load', err);
//   } else {
//     console.log('Schema loaded!')
//   }
// });


// may need to refactor name select depending on data stream
module.exports = {

  // QUERY DOES NOT WORK YET, BUT IS CLOSE!
  selectUserData: function (query, callback) {
    console.log('INSIDE SELECT USER DATA', query);
    connection.query(
      `SELECT * FROM entries
      WHERE users_id = ${query.id}`
      , function(err, results) {
        if (err) {
          console.log('error in selectUserData', err);
        } else {
          console.log('Data mined successfully!');
          callback(null, results);
        }
    })
    // connection.query(
    // `SELECT entries.* FROM entries, users WHERE
    // entries.users_id IN
    // (SELECT id FROM users WHERE username = ${query.username}
    // )`, function (err, results, fields) {
    //   if (err) {
    //     callback(err, null);
    //   } else {
    //     callback(null, results);
    //   }
    // });
  },

  getUserId: function(query, callback) {
    connection.query(
      `SELECT id FROM users
       WHERE username = '${query}'`
      , function(err, results) {
        if (err) {
          console.log('it broke', err);
        } else {
          callback(results);
        }
      })
  },

  // may need to refactor variables depending on data stream
  // insertUserData: function (data, callback) {
  //   connection.query(
  //   `INSERT INTO entries (sleepHrs, minsExercise, mood, users_ID) VALUES
  //   (${data.mind}, ${data.body}, ${data.soul}, ${data.name})
  //   `, function (err, results, fields) {
  //     if (err) {
  //       callback(err, null);
  //     } else {
  //       callback(null, results);
  //     }
  //   });
  // },

  insertUserData: function (data, callback) {
    console.log('INSIDE INSERT', data);
    connection.query(
    `INSERT INTO entries (users_ID, mindSleep, mindRead, bodyExercise, bodyWater, soulMood, soulYoga) VALUES
    (${data.id}, ${data.mind.input1}, ${data.mind.input2}, ${data.body.input1}, ${data.body.input2}, ${data.soul.input1}, ${data.soul.input2})
    `, function (err, results, fields) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  returnEntries: function (callback) {
    connection.query('select * from entries', function (err, results) {
      if (err) {
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
      var mindAvg = ( (dbData[i].mindSleep + dbData[i].mindRead) / 2 );
      var bodyAvg = ( (dbData[i].bodyExercise + dbData[i].bodyWater) / 2 );
      var soulAvg = ( (dbData[i].soulMood + dbData[i].soulYoga) / 2 );

      graphObj[0].data.push(mindAvg);
      graphObj[1].data.push(bodyAvg);
      graphObj[2].data.push(soulAvg);
      graphObj[3].data.push( (mindAvg + bodyAvg + soulAvg) / 3 );
    }
    return graphObj;
  }
};
