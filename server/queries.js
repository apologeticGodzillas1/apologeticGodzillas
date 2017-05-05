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
    connection.query(
    `SELECT entries.* FROM entries, users WHERE
    entries.users_id IN
    (SELECT id FROM users WHERE username = ${query.username}
    )`, function (err, results, fields) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  // may need to refactor variables depending on data stream
  insertUserData: function (data, callback) {
    connection.query(
    `INSERT INTO entries (sleepHrs, minsExercise, mood, users_ID) VALUES
    (${data.mind}, ${data.body}, ${data.soul}, ${data.name})
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
  }
};
