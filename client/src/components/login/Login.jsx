import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="jumbotron text-center">
        <h3 className="mb-3">Login to Student Larder</h3>
        <br/>
        <div className="container">
          <button className="btn btn-google btn-social" type="button">
            <i className="fab fa-google pr-1" />
            <span>Login with Google</span>
          </button>
          <br/>
          <button className="btn btn-facebook btn-social" type="button">
            <i className="fab fa-facebook-f pr-1" />
            <span>Login with Facebook</span>
          </button>
          <br/>
          <button className="btn btn-github btn-social" type="button">
            <i className="fab fa-github pr-1" />
            <span>Login with GitHub</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Login;