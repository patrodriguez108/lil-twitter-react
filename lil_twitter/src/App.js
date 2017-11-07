import React, { Component } from 'react';
import SearchBox from './SearchBox'
import Composition from './Composition'
import Hashtags from './Hashtags'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBox />
        <Composition />
        <Hashtags />
      </div>
    )
  }
}

export default App;
