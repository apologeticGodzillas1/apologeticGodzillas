import React from 'react';

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

  render() {
    return (
      <div>
        GRAPHS HERE
        <br/>
        {this.attributes}
      </div>
    )
  }
}

export default Graph;
