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
              <label htmlFor="mindInput1">Mind</label>
              <input type="text" className="form-control" id="mindInput1" placeholder="Hours Slept (0-10)" value={this.props.state.mindInput1} onChange={this.props.handleChangeMind1}></input>
              <input type="text" className="form-control" id="mindInput2" placeholder="Reading in 10 min (0-10)" value={this.props.state.mindInput2} onChange={this.props.handleChangeMind2}></input>
              <input type="text" className="form-control" id="mindInput3" placeholder="Learning a Skill (0-10)" value={this.props.state.mindInput3} onChange={this.props.handleChangeMind3}></input>
            </div>

            <div className="form-group">
              <label htmlFor="bodyInput">Body</label>
              <input type="text" className="form-control" id="bodyInput1" placeholder="Exercise in 10 min (0-10)" value={this.props.state.bodyInput1} onChange={this.props.handleChangeBody1}></input>
              <input type="text" className="form-control" id="bodyInput2" placeholder="Cups of Water (0-10)" value={this.props.state.bodyInput2} onChange={this.props.handleChangeBody2}></input>
              <input type="text" className="form-control" id="bodyInput3" placeholder="Servings of Fruits and Veggies (0-10)" value={this.props.state.bodyInput3} onChange={this.props.handleChangeBody3}></input>
            </div>

            <div className="form-group">
              <label htmlFor="soulInput">Soul</label>
              <input type="text" className="form-control" id="soulInput1" placeholder="Mood Scale (0-10)" value={this.props.state.soulInput1} onChange={this.props.handleChangeSoul1}></input>
              <input type="text" className="form-control" id="soulInput2" placeholder="Yoga/Meditation in 5 min (0-10)" value={this.props.state.soulInput2} onChange={this.props.handleChangeSoul2}></input>
              <input type="text" className="form-control" id="soulInput3" placeholder="# of Positive Social Interations (0-10)" value={this.props.state.soulInput3} onChange={this.props.handleChangeSoul3}></input>
            </div>

          </form>
          <button type="submit" className="btn btn-primary" onClick={this.props.handleClick}>Submit Info</button>

        </div>
      </div>
    )
  }
}

export default CategoryList;
