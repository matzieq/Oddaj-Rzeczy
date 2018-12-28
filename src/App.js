import React, { Component } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Stats from './Components/Stats/Stats';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Stats />
      </div>
    );
  }
}

export default App;
