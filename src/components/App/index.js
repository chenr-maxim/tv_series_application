import React, { Component } from 'react';
import { Route , withRouter} from 'react-router-dom';
import Main from '../Main';
import './App.css';
import 'whatwg-fetch';

class App extends Component {

constructor(props) {
	super(props);

	this.redirectToHome = this.redirectToHome.bind(this);
}

redirectToHome() {
	this.props.history.push('/app');
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> TV Series List </h1>
        </header>
        <div>
        	<button onClick={this.redirectToHome.bind(this)}> Redirect to Home </button>
        </div>
        <Main />
      </div>
    );
  }
}

export default App;
