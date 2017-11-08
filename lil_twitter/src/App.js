import React, { Component } from 'react';
import SearchBox from './SearchBox'
import Composition from './Composition'
import Hashtags from './Hashtags'
import Timeline from './Timeline'
import './App.css';
var $ = window.jQuery

$(document).ready(function() {
  $.ajax({
    url: '/tweets/recent'
  }).done(function(response) {
    console.log(response)
  })
})

class App extends Component {
  render() {
    return (
      <div>
        <SearchBox />
        <section className="container">
          <Composition />
          <Hashtags />
          <Timeline />
        </section>
      </div>
    )
  }
}

export default App;
