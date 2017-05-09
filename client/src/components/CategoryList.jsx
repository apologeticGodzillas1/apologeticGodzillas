import React from 'react';
import $ from 'jquery';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <form className="get-data-form">
            <div className="form-group">
              <label htmlFor="nameInput">Username</label>
              <input type="text" className="form-control" id="nameInput" placeholder="Your name / ID" value={this.props.state.username} onChange={this.props.handleChangeUsername}></input>
            </div>
          </form>
          <button type="submit" className="btn btn-primary" onClick={this.props.getInfoClick}>Get Info</button>
        </div>
        <div>
          <form className="new-form">
            <div className="form-group">
              <label htmlFor="nameInput">Name</label>
              <input type="text" className="form-control" id="nameInput" placeholder="Your name / ID" value={this.props.state.name} onChange={this.props.handleChangeName}></input>
            </div>

            <div className="form-group">
              <label htmlFor="mindInput">Mind</label>
              <input type="text" className="form-control" id="mindInput" placeholder="Hours Slept (0-10)" value={this.props.state.mind} onChange={this.props.handleChangeMind}></input>
            </div>

            <div className="form-group">
              <label htmlFor="bodyInput">Body</label>
              <input type="text" className="form-control" id="bodyInput" placeholder="Exercise in 10 min (0-10)" value={this.props.state.body} onChange={this.props.handleChangeBody}></input>
            </div>

            <div className="form-group">
              <label htmlFor="soulInput">Soul</label>
              <input type="text" className="form-control" id="soulInput" placeholder="Mood Scale (0-10)" value={this.props.state.soul} onChange={this.props.handleChangeSoul}></input>
            </div>

          </form>
          <button type="submit" className="btn btn-primary" onClick={this.props.handleClick}>Submit Info</button>

        </div>   
      </div>
    )
  }
}

export default CategoryList;
