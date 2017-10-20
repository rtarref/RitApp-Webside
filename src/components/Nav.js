import React, { Component } from 'react';
import { Link } from 'react-router';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import '../App.css';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor   : 'rgba(0, 0, 0, 0.75)'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    color                 : '#333',
    padding               : '40px'
  }
};

class Nav extends Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  login(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    login(username, password);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <Link className="navbar-brand" to="/">
              <img src="images/ritapp.png" alt="logo-ritapp"/>
            </Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                {
                  ( isLoggedIn() ) ? <Link to="/surveillance">Surveillance System</Link> :  ''
                }
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                {
                  (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => this.openModal()}>Log In</button> )
                }
              </li>
            </ul>
          </div>
        </nav>

        <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles}>
          <form onSubmit={this.login.bind(this)} className="ritapp-form">
            <img src="images/ritapp.png" alt="ritapp-logo"/>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input className="form-control" type="text" ref="username"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className="form-control" type="password" ref="password"/>
            </div>
            <div className="actions">
              <button type="submit" className="btn btn-success">Login</button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Nav;
