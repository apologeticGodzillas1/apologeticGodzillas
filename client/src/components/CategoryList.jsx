import React from 'react';
import $ from 'jquery';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <div className="mind card custom-card">
          <div className="card-block">
          <p className="lead">mind</p>
          <form>
            <div className="form-group row col-12">
              <input type="text" className="form-control form-control-sm" id="mindInput1" placeholder="Hours Slept (0-10)" value={this.props.state.mindInput1} onChange={this.props.handleChangeMind1}/>
            </div>
            <div className="form-group row col-12">
              <input type="text" className="form-control form-control-sm" id="mindInput2" placeholder="Reading in 10 min (0-10)" value={this.props.state.mindInput2} onChange={this.props.handleChangeMind2}/>
            </div>
            <div className="form-group row col-12">
              <input type="text" className="form-control form-control-sm" id="mindInput3" placeholder="Learning a Skill (0-10)" value={this.props.state.mindInput3} onChange={this.props.handleChangeMind3}/>
            </div>
          </form>
          </div>
        </div>

        <div className="body card custom-card">
          <div className="card-block">
          <p className="lead">body</p>
          <form>
            <div className="form-group row col-12">
              <input type="text" className="form-control form-control-sm" id="bodyInput1" placeholder="Exercise in 10 min (0-10)" value={this.props.state.bodyInput1} onChange={this.props.handleChangeBody1}/>
            </div>
            <div className="form-group row col-12">
              <input type="text" className="form-control form-control-sm" id="bodyInput2" placeholder="Cups of Water (0-10)" value={this.props.state.bodyInput2} onChange={this.props.handleChangeBody2}/>
            </div>
            <div className="form-group row col-12">
              <input type="text" className="form-control form-control-sm" id="bodyInput3" placeholder="Servings of Fruits and Veggies (0-10)" value={this.props.state.bodyInput3} onChange={this.props.handleChangeBody3}/>
            </div>
          </form>
          </div>
        </div>

        <div className="soul card custom-card">
          <div className="card-block">
          <p className="lead">soul</p>
          <form>
            <div className="form-group row col-12">
              <input type="text" className="form-control form-control-sm" id="soulInput1" placeholder="Mood Scale (0-10)" value={this.props.state.soulInput1} onChange={this.props.handleChangeSoul1}/>
            </div>
            <div className="form-group row col-12">
              <input type="text" className="form-control form-control-sm" id="soulInput2" placeholder="Yoga/Meditation in 5 min (0-10)" value={this.props.state.soulInput2} onChange={this.props.handleChangeSoul2}/>
            </div>
            <div className="form-group row col-12">
              <input type="text" className="form-control form-control-sm" id="soulInput3" placeholder="# of Positive Social Interations (0-10)" value={this.props.state.soulInput3} onChange={this.props.handleChangeSoul3}/>
            </div>
          </form>
          <button type="submit" className="btn btn-secondary" onClick={this.props.handleClick}>Submit Info</button>
          </div>
        </div>

      </div>
    )
  }
}

export default CategoryList;
