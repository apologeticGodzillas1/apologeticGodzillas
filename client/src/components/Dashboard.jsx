import React from 'react';
import CategoryList from './CategoryList.jsx';
import Graph from './Graph.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.state;
  }

  render() {
    return (
      <div>
        <div className="row">
            <div className="col-sm-4">
            <CategoryList
              add={this.props.add}
              get={this.props.get}
              handleChangeName={this.props.handleChangeName}
              handleChangeMind1={this.props.handleChangeMind1}
              handleChangeMind2={this.props.handleChangeMind2}
              handleChangeBody1={this.props.handleChangeBody1}
              handleChangeBody2={this.props.handleChangeBody2}
              handleChangeSoul1={this.props.handleChangeSoul1}
              handleChangeSoul2={this.props.handleChangeSoul2}
              handleClick={this.props.handleClick}
              handleChangeUsername={this.props.handleChangeUsername}
              getInfoClick={this.props.getInfoClick}
              state={this.props.state}
            />
          </div>

          <div className="col-sm-8">
            <Graph
              state={this.props.state}
            />
          </div>

        </div>
      </div>
    )
  }
}

export default Dashboard;
