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
              handleChangeMind={this.props.handleChangeMind}
              handleChangeBody={this.props.handleChangeBody}
              handleChangeSoul={this.props.handleChangeSoul}
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
