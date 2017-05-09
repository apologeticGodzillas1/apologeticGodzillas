import React from 'react';
import $ from 'jquery';

class CategoryList extends React.Component {
  constructor(props) {
    super (props);
    this.state = { 
      username: '',
      name: '',
      mind: '',
      body: '',
      soul: ''
    };
  }

  add (state) {  // CREATE
    console.log(`${state.name} was added`);
    console.log(`${state.mind} was added`);
    console.log(`${state.body} was added`);
    console.log(`${state.soul} was added`);
    // var stateParameters = {parameters: state};
    // console.log(stateParameters)
    var context = this;
    $.ajax({
      url: '/users/post',
      type: 'POST',
      data: state
    })
    .done(function (res) {
      console.log('input added');
      // context.get();
    })
    .fail(function(err) {
      console.log('Error adding input');
      throw err;
    })
  };

  get (state) { // READ
    var context = this;
    console.log('getting info!')
    $.ajax({
      url: '/users/get',
      type: 'GET',
      data: state
    })
    .done(function(data) {
      console.log('Print data to screen...');
      context.setState({
        items: data
      })
      console.log(data)
    })
    .fail(function(err) {
      console.log('err', err);
    })
  };

  handleChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleChangeMind(e) {
    this.setState({
      mind: e.target.value
    });
  }

  handleChangeBody(e) {
    this.setState({
      body: e.target.value
    });
  }
  
  handleChangeSoul(e) {
    this.setState({
      soul: e.target.value
    });
  }

  handleClick(query) {
    this.add(this.state);
    this.setState({
      name: '',
      mind: '',
      body: '',
      soul: ''
    })
  }

  handleChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  getInfoClick (e) {
    this.get(this.state);
  }

  render() {
    return (
      <div>
        <div>
          <form className="get-data-form">
            
            <div className="form-group">
              <label htmlFor="nameInput">Username</label>
              <input type="text" className="form-control" id="nameInput" placeholder="Your name / ID" value={this.state.username} onChange={this.handleChangeUsername.bind(this)}></input>
            </div>

          </form>
          <button type="submit" className="btn btn-primary" onClick={this.getInfoClick.bind(this)}>Get Info</button>
        </div>
        <div>
          <form className="new-form">
            
            <div className="form-group">
              <label htmlFor="nameInput">Name</label>
              <input type="text" className="form-control" id="nameInput" placeholder="Your name / ID" value={this.state.name} onChange={this.handleChangeName.bind(this)}></input>
            </div>

            <div className="form-group">
              <label htmlFor="mindInput">Mind</label>
              <input type="text" className="form-control" id="mindInput" placeholder="Hours Slept (0-10)" value={this.state.mind} onChange={this.handleChangeMind.bind(this)}></input>
            </div>

            <div className="form-group">
              <label htmlFor="bodyInput">Body</label>
              <input type="text" className="form-control" id="bodyInput" placeholder="Exercise in 10 min (0-10)" value={this.state.body} onChange={this.handleChangeBody.bind(this)}></input>
            </div>

            <div className="form-group">
              <label htmlFor="soulInput">Soul</label>
              <input type="text" className="form-control" id="soulInput" placeholder="Mood Scale (0-10)" value={this.state.soul} onChange={this.handleChangeSoul.bind(this)}></input>
            </div>

          </form>
          <button type="submit" className="btn btn-primary" onClick={this.handleClick.bind(this)}>Submit Info</button>

        </div>   
      </div>
    )
  }
}

export default CategoryList;
