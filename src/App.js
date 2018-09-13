import Level from './components/Level'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">

        {/* HEADER de React */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Otis Ascenceur</h1>
        </header>

        {/* Appel de la class Level */}
        <Level/>

      </div>
    );
  }
}

export default App;
