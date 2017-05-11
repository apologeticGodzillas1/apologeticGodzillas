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
              <input type="text" className="form-control" id="mindInput1" placeholder="Hours Slept (0-10)" value={this.props.state.mind.input1} onChange={this.props.handleChangeMind}></input>
              <input type="text" className="form-control" id="mindInput2" placeholder="Reading in 10 min (0-10)" value={this.props.state.input2} onChange={this.props.handleChangeMind}></input>
            </div>

            <div className="form-group">
              <label htmlFor="bodyInput">Body</label>
              <input type="text" className="form-control" id="bodyInput1" placeholder="Exercise in 10 min (0-10)" value={this.props.state.body.input1} onChange={this.props.handleChangeBody}></input>
              <input type="text" className="form-control" id="bodyInput2" placeholder="Cups of water (0-10)" value={this.props.state.body.input2} onChange={this.props.handleChangeBody}></input>
            </div>

            <div className="form-group">
              <label htmlFor="soulInput">Soul</label>
              <input type="text" className="form-control" id="soulInput1" placeholder="Mood Scale (0-10)" value={this.props.state.soul.input1} onChange={this.props.handleChangeSoul}></input>
              <input type="text" className="form-control" id="soulInput2" placeholder="Yoga/Meditation in 5 min (0-10)" value={this.props.state.soul.input2} onChange={this.props.handleChangeSoul}></input>
            </div>

          </form>
          <button type="submit" className="btn btn-primary" onClick={this.props.handleClick}>Submit Info</button>

        </div>
      </div>
    )
  }
}

export default CategoryList;
