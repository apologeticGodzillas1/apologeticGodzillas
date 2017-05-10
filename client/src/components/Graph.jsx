import React from 'react';
import $ from 'jquery';

// Load Highcharts
var Highcharts = require('highcharts');

// Load a module
require('highcharts/modules/funnel')(Highcharts);

var options = require('../graphGen/highCharts1.jsx');
var theme = require('../graphGen/highChartsTheme.jsx');


class Graph extends React.Component {
  constructor(props) {
    super (props);
    this.attributes;
  }

  componentWillReceiveProps(props) {
    if (props.state.entries.length > 0) {
      this.attributes = JSON.stringify(props.state.entries);
    }
  }

  //Create the div which the chart will be rendered to.
  render() {
    return (
      <div>
        GRAPHS HERE
        <br/>
        {this.attributes}
      </div>
    )
  }

  // render() {
  //   return (
  //     <div id="container">
  //       GRAPHS HERE
  //       <br />
  //       <script type="text/javascript" src="../graphGen/highCharts1.js"></script>
  //       <script type="text/javascript" src="../graphGen/highChartsTheme.js"></script>
  //
  //     </div>
  //   )
  // }
}

export default Graph;
