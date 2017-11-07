import React, { Component } from 'react';
import SearchBox from './SearchBox'
import Composition from './Composition'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBox />
        <Composition />
      </div>
    )
  }
}

export default App;
