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

  // When the DOM is ready, create the chart.
  componentDidMount () {
      // Extend Highcharts with modules
      if (this.props.modules) {
          this.props.modules.forEach(function (module) {
              module(Highcharts);
          });
      }
      // Set container which the chart should render to.
      this.chart = new Highcharts[this.props.type || "Chart"](
          'container',
          options
      );

      // Figure out how to set theme into chart. May not work here.
      // this.chart.setOptions(theme);
  }

  //Destroy chart before unmount.
  componentWillUnmount () {
      this.chart.destroy();
  }

  componentWillReceiveProps(props) {
    if (props.state.entries.length > 0) {
      this.attributes = JSON.stringify(props.state.entries);
    }
  }

  render() {
      return React.createElement('div', { id: 'container' });
  }
//   render() {
//     return (
//       <div id="container">
//         GRAPHS HERE
//         <br/>
//         {this.attributes}
//       </div>
//     )
//   }
}

export default Graph;
