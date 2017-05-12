// creates random data
// input 1: days. number of consistent data points
// input 3: options.
// options - null - provides consistent data
// options - Number (between 0-10) - ranomly chooses if data exists. 10 means most data is missing

// output: [DAY, MIND, BODY, SOUL, ]


var randDataGen = function(duration, options) {
  data = {
    mind: [0],
    body: [0],
    soul: [0],
    average: [0]
  };

  options = options || 10;

  for ( var i = 1; i < duration; i++ ) {
    var randInt = Math.floor((Math.random() * 10));
    if ( randInt + options >= 10 ) {
      data.mind.push(Math.ceil(Math.random() * 10));
      data.body.push(Math.ceil(Math.random() * 10));
      data.soul.push(Math.ceil(Math.random() * 10));
      data.average.push( (data.mind[i] + data.body[i] + data.soul[i]) / 3 )
    } else {
      data.mind.push(null);
      data.body.push(null);
      data.soul.push(null);
    }
  }
  // return data;
  var series = [{
    name: 'mind',
    data: data.mind
  }, {
    name: 'body',
    data: data.body
  }, {
    name: 'soul',
    data: data.soul
  }, {
    name: 'average',
    data: data.average,
    rgba: '#FF0000',
    type: 'area',
    fillOpacity: 0.3
  }];

  return JSON.stringify(series);
}


//*********************************************************************

// the following function creates mySQL queries that can be copied
// and pasted IN FULL and creates random data into the entries table
// Note: this includes dropping database, etc. So make sure you only
// copy and paste what you need.

// OPTIONS PARAMETER NOT NEEDED FOR FUNCTION. It creates random days with
// null data (user did not input anything for this day)

//*********************************************************************

// ALSO: this works best if you go to EloquentJS's sandbox to run the
// function. The console output can be copied and pasted directly into
// the terminal!

// http://eloquentjavascript.net/code/

//*********************************************************************


var randInsertDataGen = function(username, duration, options) {
  data = {
    mind1: [0],
    mind2: [0],
    mind3: [0],
    body1: [0],
    body2: [0],
    body3: [0],
    soul1: [0],
    soul2: [0],
    soul3: [0],
  };

  options = options || 10;

  for ( var i = 1; i < duration; i++ ) {
    var randInt = Math.floor((Math.random() * 10));
    if ( randInt + options >= 10 ) {
      data.mind1.push(Math.ceil(Math.random() * 10));
      data.mind2.push(Math.ceil(Math.random() * 10));
      data.mind3.push(Math.ceil(Math.random() * 10));
      data.body1.push(Math.ceil(Math.random() * 10));
      data.body2.push(Math.ceil(Math.random() * 10));
      data.body3.push(Math.ceil(Math.random() * 10));
      data.soul1.push(Math.ceil(Math.random() * 10));
      data.soul2.push(Math.ceil(Math.random() * 10));
      data.soul3.push(Math.ceil(Math.random() * 10));
    } else {
      data.mind1.push(null);
      data.mind2.push(null);
      data.mind3.push(null);
      data.body1.push(null);
      data.body2.push(null);
      data.body3.push(null);
      data.soul1.push(null);
      data.soul2.push(null);
      data.soul3.push(null);
    }
  }

  // return data;
  console.log(
    `drop database if exists valence;\n

    create database valence;\n

    use valence;\n

    create table if not exists users (
      id int(4) primary key auto_increment,
      username varchar(15) unique
    );\n

    create table if not exists entries (
      id int(5) primary key auto_increment,
      users_id int(2),
      mind1 int(2),
      mind2 int(2),
      mind3 int(2),
      body1 int(2),
      body2 int(2),
      body3 int(2),
      soul1 int(2),
      soul2 int(2),
      soul3 int(2)
    );\n

    insert into users (username) values ('${username}');
    `)

  for ( var i = 0; i < duration; i++ ) {
    console.log(
      `INSERT INTO entries
      (users_id, mind1, mind2, mind3, body1, body2, body3, soul1, soul2, soul3) VALUES ((select id from users where username = '${username}'), ${data.mind1[i]}, ${data.mind2[i]}, ${data.mind3[i]}, ${data.body1[i]}, ${data.body2[i]}, ${data.body3[i]}, ${data.soul1[i]}, ${data.soul2[i]}, ${data.soul3[i]});\n`
    )
  }
};
