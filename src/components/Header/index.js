import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <header className="App-header">
            <h1 className="App-title"> TV Series List </h1>
          </header>
        );
    }
}

export default Header;
