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
    soul: [0]
  };

  options = options || 10;

  for ( var i = 1; i <= duration; i++ ) {
    var randInt = Math.floor((Math.random() * 10));
    if ( randInt + options >= 10 ) {
      data.mind.push(Math.ceil(Math.random() * 10));
      data.body.push(Math.ceil(Math.random() * 10));
      data.soul.push(Math.ceil(Math.random() * 10));
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
  }]

  return JSON.stringify(series);
}
