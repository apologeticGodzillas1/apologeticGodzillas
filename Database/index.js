var mysql = require('mysql');

// COMMENT OR UNCOMMENT THIS FOR LOCAL DATABASE WORK
  var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'valence'
  })

  mysqlConnection.connect();

  module.exports = mysqlConnection;

// COMMENT OR UNCOMMENT THIS FOR HEROKU DATABASE WORK
<<<<<<< HEAD
  var  db_config = {
    host: 'us-cdbr-iron-east-03.cleardb.net',
    user: 'b75a79c2ce8507',
    password: 'eda7fc5e',
    database: 'heroku_fb9a736d7c6266e'
  }

  var connection;

  function handleDisconnect() {
    connection = mysql.createConnection(db_config); // Recreate the connection, since

    setInterval(function () {
      connection.query('SELECT 1');
    }, 5000);                                                  // the old one cannot be reused.

    connection.connect(function(err) {              // The server is either down
      if(err) {                                     // or restarting (takes a while sometimes).
        console.log('error when connecting to db:', err);
        setTimeout(handleDisconnect, 2000);         // We introduce a delay before attempting to reconnect,
      }                                             // to avoid a hot loop, and to allow our node script to
    });                                             // process asynchronous requests in the meantime.
                                                    // If you're also serving http, display a 503 error.
    connection.on('error', function(err) {
      console.log('db error', err);
      if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
        handleDisconnect();                         // lost due to either server restart, or a
      } else {                                      // connnection idle timeout (the wait_timeout
        throw err;                                  // server variable configures this)
      }
    });
  }

  handleDisconnect();
=======
  // var  db_config = {
  //   host: 'us-cdbr-iron-east-03.cleardb.net',
  //   user: 'b75a79c2ce8507',
  //   password: 'eda7fc5e',
  //   database: 'heroku_fb9a736d7c6266e'
  // }
  //
  // var connection;
  //
  // function handleDisconnect() {
  //   connection = mysql.createConnection(db_config); // Recreate the connection, since
  //
  //   setInterval(function () {
  //     console.log('KEEP IT ALIVE############################');
  //     connection.query('SELECT 1');
  //   }, 5000);                                                  // the old one cannot be reused.
  //
  //   connection.connect(function(err) {              // The server is either down
  //     if(err) {                                     // or restarting (takes a while sometimes).
  //       console.log('INSIDE CONNECTION . CONNECT!!!!!!!!!!!!!!!!!!')
  //       console.log('error when connecting to db:', err);
  //       setTimeout(handleDisconnect, 2000);         // We introduce a delay before attempting to reconnect,
  //     }                                             // to avoid a hot loop, and to allow our node script to
  //   });                                             // process asynchronous requests in the meantime.
  //                                                   // If you're also serving http, display a 503 error.
  //   connection.on('error', function(err) {
  //     console.log('INSIDE CONNECTION . ON!!!!!!!!!!!!!!!!!!')
  //     console.log('db error', err);
  //     if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
  //       console.log('GOING TO RECONNECT*******************')
  //       handleDisconnect();                         // lost due to either server restart, or a
  //     } else {                                      // connnection idle timeout (the wait_timeout
  //       console.log('ABOUT TO THROW AN ERROR %%%%%%%%%%%%%%%%%%%%%')
  //       throw err;                                  // server variable configures this)
  //     }
  //   });
  // }
  //
  // handleDisconnect();
>>>>>>> Creates a testing platform for databases, but it is not working yet



  // module.exports = mysqlConnection;
  // module.exports.handleDisconnect = handleDisconnect();
  // module.exports = connection;
