import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import Login from '../login/Login';

class NavBar extends Component {
  constructor () {
    super();
    this.state = {
      loginModalIsOpen: false
    };
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container d-flex justify-content-between">
          <Link to="/" className="navbar-brand">Student Larder</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/search" className="nav-link">Search</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/top-recipes" className="nav-link">Top Recipes</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              <button className="btn btn-default my-2 my-sm-0" onClick={() => this.setState({ loginModalIsOpen: true })}>Sign In</button>
              &nbsp;&nbsp;
              <a href="https://www.github.com/09millarda" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-light my-2 my-sm-0">View On GitHub</button></a>
            </div>
          </div>
        </div>
        <Modal
          isOpen={this.state.loginModalIsOpen}
          contentLabel="Login Modal"
          ariaHideApp={false}
          onRequestClose={this.closeModal.bind(this)}>
          <Login closeLoginModal={this.closeModal.bind(this)} />
        </Modal> 
      </nav>
    );
  }

  closeModal = () => {
    this.setState({ loginModalIsOpen: false });
  }
}

export default NavBar;