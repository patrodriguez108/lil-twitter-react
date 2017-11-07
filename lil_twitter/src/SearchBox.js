import React, { Component } from 'react';

class SearchBox extends Component {

	render() {
		return (
			<header id="top-nav">
        <div id="brand">Lil' Twitter API</div>
		    <form id="search-form">
		      <input id="search" type="text" name="query" />
		    </form>
      </header>
		)
	}
}

export default SearchBox;