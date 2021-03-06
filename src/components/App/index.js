import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from '../Main';
import Header from '../Header';
import './App.css';
import 'whatwg-fetch';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
