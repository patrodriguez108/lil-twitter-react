import React, { Component } from 'react';
import SearchBox from './SearchBox'
import Composition from './Composition'
import Hashtags from './Hashtags'
import Timeline from './Timeline'
import './App.css';
// import $ from 'jquery';
// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
// import axios from 'axios'



// $(document).ready(function() {
//   $.ajax({
//     method: 'GET',
//     url: 'http://localhost:3000/tweets/recent'
//   }).done(function(response) {
//     console.log(response)
//   })
//   axios.get('/tweets/recent')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// })

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
