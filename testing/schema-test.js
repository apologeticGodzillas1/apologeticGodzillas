/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */

var mysql = require('mysql');
var request = require('request');
var expect = require('chai').expect;

// var connection = require('../Database/index.js');
// var queries = require('../server/queries.js');


describe('Database Schema', function () {
  var connection;

  beforeEach(function(done) {
    var mysqlConnection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'valence'
    })
    mysqlConnection.connect();

    var tablename = 'entries';

    mysqlConnection.query('truncate ' + tablename, done);
  });

  afterEach(function() {
    mysqlConnection.end();
  });

  var entryObjTest = {
    name: 'testMan',
    mindInput1: 1,
    mindInput2: 2,
    mindInput3: 3,
    bodyInput1: 4,
    bodyInput2: 5,
    bodyInput3: 6,
    soulInput1: 7,
    soulInput2: 8,
    soulInput3: 9
  }

  it('Should insert posted messages to the DB', function(done) {
    request({
      method: "POST",
      url: 'http://127.0.0.1:3000/users/post',
      json: entryObjTest
    }, function () {
      var queryString = 'SELECT * FROM entries'
      var queryArgs = [];
      mysqlConnection.query(queryString, function(err, results) {
        if (err) {
          console.error(err)
        }
        expect(results.length).to.equal(1);
        expect(results[0].text).to.equal('testMan')
        expect(results[1].text).to.equal('1')
        expect(results[4].text).to.equal('4')
        expect(results[7].text).to.equal('7')

        done();
      });
    });
  });
});
