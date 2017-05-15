import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Dashboard from './Dashboard.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      entries: [],
      username: '',
      mindInput1: '',
      mindInput2: '',
      mindInput3: '',
      bodyInput1: '',
      bodyInput2: '',
      bodyInput3: '',
      soulInput1: '',
      soulInput2: '',
      soulInput3: '',
      userNotFound: false
    };
  }

  add () {  // CREATE
    console.log(`${this.state.name} was added`);
    console.log(`${this.state.mindInput1} was added`);
    console.log(`${this.state.mindInput2} was added`);
    console.log(`${this.state.mindInput3} was added`);
    console.log(`${this.state.bodyInput1} was added`);
    console.log(`${this.state.bodyInput2} was added`);
    console.log(`${this.state.bodyInput3} was added`);
    console.log(`${this.state.soulInput1} was added`);
    console.log(`${this.state.soulInput2} was added`);
    console.log(`${this.state.soulInput3} was added`);
    var context = this;
    $.ajax({
      url: '/users/post',
      type: 'POST',
      data: context.state
    })
    .done(function (res) {
      console.log('Input successfully added for user');
      context.get();
    })
    .fail(function(err) {
      console.log('Error adding input for user');
      throw err;
    })
  };

  get () { // READ
    var context = this;
    $.ajax({
      url: '/users/get',
      type: 'GET',
      data: context.state
    })
    .done(function(data) {
      if (data.Fail) {
        console.log('User not found')
        context.setState({
          userNotFound: true
        })
      } else {
        if (context.state.userNotFound === true) {``
          context.setState({
            userNotFound: false
          })
        }
        console.log('Getting user info!')
        context.setState({
          entries: data.Data
        })
        $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
      }
    })
    .fail(function(err) {
      console.log('There was an error in the GET', err);
    })
  };

  handleChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleChangeMind1(e) {
    this.setState({
      mindInput1: e.target.value
    });
  }
  handleChangeMind2(e) {
    this.setState({
      mindInput2: e.target.value
    });
  }
  handleChangeMind3(e) {
    this.setState({
      mindInput3: e.target.value
    });
  }

  handleChangeBody1(e) {
    this.setState({
      bodyInput1: e.target.value
    });
  }
  handleChangeBody2(e) {
    this.setState({
      bodyInput2: e.target.value
    });
  }
  handleChangeBody3(e) {
    this.setState({
      bodyInput3: e.target.value
    });
  }

  handleChangeSoul1(e) {
    this.setState({
      soulInput1: e.target.value
    });
  }
  handleChangeSoul2(e) {
    this.setState({
      soulInput2: e.target.value
    });
  }
  handleChangeSoul3(e) {
    this.setState({
      soulInput3: e.target.value
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
      <div>
      <div className="container-fluid full-page-1">
        <Login
          handleChangeName={this.handleChangeName.bind(this)}
          handleChangeUsername={this.handleChangeUsername.bind(this)}
          getInfoClick={this.getInfoClick.bind(this)}
          state={this.state}
        />
      </div>
      <div className="container-fluid full-page-2">
        <Dashboard
          add={this.add.bind(this)}
          get={this.get.bind(this)}
          handleChangeName={this.handleChangeName.bind(this)}
          handleChangeMind1={this.handleChangeMind1.bind(this)}
          handleChangeMind2={this.handleChangeMind2.bind(this)}
          handleChangeMind3={this.handleChangeMind3.bind(this)}
          handleChangeBody1={this.handleChangeBody1.bind(this)}
          handleChangeBody2={this.handleChangeBody2.bind(this)}
          handleChangeBody3={this.handleChangeBody3.bind(this)}
          handleChangeSoul1={this.handleChangeSoul1.bind(this)}
          handleChangeSoul2={this.handleChangeSoul2.bind(this)}
          handleChangeSoul3={this.handleChangeSoul3.bind(this)}
          handleClick={this.handleClick.bind(this)}
          handleChangeUsername={this.handleChangeUsername.bind(this)}
          getInfoClick={this.getInfoClick.bind(this)}
          state={this.state}
        />
      </div>  
      </div>
    )
  }
}

export default App;