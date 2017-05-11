import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Dashboard from './components/Dashboard.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      entries: [],
      username: '',
      name: '',
      mind: '',
      body: '',
      soul: ''
    };
  }

  add () {  // CREATE
    console.log(`${this.state.name} was added`);
    console.log(`${this.state.mind} was added`);
    console.log(`${this.state.body} was added`);
    console.log(`${this.state.soul} was added`);
    var context = this;
    $.ajax({
      url: '/users/post',
      type: 'POST',
      data: context.state
    })
    .done(function (res) {
      console.log('input added');
      context.get();
    })
    .fail(function(err) {
      console.log('Error adding input');
      throw err;
    })
  };

  get () { // READ
    var context = this;
    console.log('getting info!', context.state)
    $.ajax({
      url: '/users/get',
      type: 'GET',
      data: context.state
    })
    .done(function(data) {
      // console.log('Print data to screen...', data);
      context.setState({
        entries: data.Data
      })
      module.exports = this.state;
      // console.log(context.state.entries);
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
    this.add();
    // this.setState({
    //   name: '',
    //   mind: '',
    //   body: '',
    //   soul: ''
    // })
  }

  handleChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  getInfoClick () {
    this.get();
  }

  render() {
    return(
      <div className="container-fluid">
        <Dashboard
          add={this.add.bind(this)}
          get={this.get.bind(this)}
          handleChangeName={this.handleChangeName.bind(this)}
          handleChangeMind={this.handleChangeMind.bind(this)}
          handleChangeBody={this.handleChangeBody.bind(this)}
          handleChangeSoul={this.handleChangeSoul.bind(this)}
          handleClick={this.handleClick.bind(this)}
          handleChangeUsername={this.handleChangeUsername.bind(this)}
          getInfoClick={this.getInfoClick.bind(this)}
          state={this.state}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
