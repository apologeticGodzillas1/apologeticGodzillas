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
    this.currentUser;
  }

  // When the DOM is ready, create the chart.
  componentDidMount () {
      // Extend Highcharts with modules
      if (this.props.modules) {
          this.props.modules.forEach(function (module) {
              module(Highcharts);
          });
      }
      console.log(options);
      this.chart = new Highcharts[this.props.type || "Chart"](
          'container',
          options
      );
  }

  //Destroy chart before unmount.
  componentWillUnmount () {
      this.chart.destroy();
  }

  componentWillReceiveProps(props) {
    // Extend Highcharts with modules
    if (props.state.entries.length > 0) {
      if (this.props.modules) {
          this.props.modules.forEach(function (module) {
              module(Highcharts);
          });
      }
      options.series = props.state.entries;
      console.log(options);
      
      // Set container which the chart should render to.
      this.chart = new Highcharts[this.props.type || "Chart"](
          'container',
          options
      );
      this.currentUser = props.state.username;
    }
    props.state.entries = [];
  }

  render() {
      return (
        <div>
        <h6 className="text-right text-muted" id="username">Welcome {this.currentUser}!</h6>
        <div id="container">
        </div>
        </div>
      )
      // return React.createElement('div', { id: 'container' });
  }
}

export default Graph;
