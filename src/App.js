import React, { Component } from 'react';
import './App.scss';
import Header from './Header/Header'
import CallToAction from './CallToAction/CallToAction';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
