import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <div className="container vertical-center">
          <div>
          <h1 className="display-1 hero">Valence.</h1>
          <p className="text-muted hero-secondary">(va·lence)</p>
          
          <div className="row">
            <div className="col-4">
              <p className="text-muted definition">
              the intrinsic "good"-ness (positive valence) or 
              bad"-ness (negative valence) of an event, object, 
              or situation.
              </p>
              <h4>Take charge of your life.</h4>
            </div>
          
            <div className="col">
              <label className="login" htmlFor="nameInput">Enter your name:</label>
              <div className="input-group login">
              <input type="text" className="form-control form-control-sm col-4" id="nameInput" placeholder="Your name" value={this.props.state.username} onChange={this.props.handleChangeUsername}></input>
              <span><button type="submit" className="btn btn-outline-success btn-sm" onClick={this.props.getInfoClick}>Go!</button></span>
              </div>
              <p className="login">{this.props.state.userNotFound === true ? 'User not found. Try again.' : ''}</p>
            </div>
          </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Login;