import React, { Component } from 'react';
import SingleHashtag from './SingleHashtag'

	class Hashtags extends Component {

		render() {
			return (
			  <section id="trends-container">
			    <h3>Trends</h3>
			    <ul>
			      <SingleHashtag />
			      <SingleHashtag />
			      <SingleHashtag />
			      <SingleHashtag />
			      <SingleHashtag />
			      <SingleHashtag />
			      <SingleHashtag />
			      <SingleHashtag />
			      <SingleHashtag />
			      <SingleHashtag />
			    </ul>
			  </section>
			)
		}
	}

export default Hashtags;