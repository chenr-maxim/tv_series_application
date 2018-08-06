import React, { Component } from 'react';
import Main from '../Main';
import { createHashHistory } from 'history'
import { Redirect } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

const history = createHashHistory();

class Header extends React.Component {
    constructor(props) {
      super(props);

      this.redirectToProfile = this.redirectToProfile.bind(this);
    }

    redirectToProfile(e) {
      history.push('/profile');
    }

    render() {
        return (
          <header className="App-header">
            <h1 className="App-title"> TV Series List </h1>
            <button onClick={this.redirectToProfile}> View Profile </button>
          </header>
        );
    }
}

export default Header;
