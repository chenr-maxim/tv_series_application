import React, { Component } from 'react';
import Main from '../Main';
import Profile from '../Profile';
import './App.css';
import 'whatwg-fetch';

class App extends Component {

constructor(props) {
  super(props);
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> TV Series List</h1>
        </header>
        <Main />
        <Profile />
      </div>
    );
  }
}

export default App;
