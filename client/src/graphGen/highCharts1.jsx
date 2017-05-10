// choose data
// var seed = require('../../../Database/seed/seed1.js');
// import $ from 'jquery';
// var Highcharts = require('highcharts');

// $(function() {

  // var myChart =
  // Highcharts.chart('container', {

module.exports = {

      title: {
          text: 'Mood Index'
      },

      subtitle: {
          text: 'Source: Valence'
      },

      yAxis: {
          title: {
              text: 'Index'
          }
      },

      xAxis: {
          title: {
              text: 'Day'
          }
      },

      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
      },

      plotOptions: {
          series: {
              pointStart: 0
          }
      },

      // series: [{
      //   name: 'mind',
      //   data: [0,6,10,4,6,2,7,7,10,1,7,1,9,1,9,5,7,4,1,10,7]
      // }, {
      //   name: 'body',
      //   data: [0,2,1,3,4,8,3,10,9,9,3,2,2,7,5,2,5,1,8,10,1]
      // }, {
      //   name: 'soul',
      //   data: [0,4,10,5,5,1,5,6,7,8,7,5,7,3,10,2,9,5,9,6,8]
      // }]

  };

// })
