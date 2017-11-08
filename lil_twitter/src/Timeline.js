import React, { Component } from 'react';
import Tweet from './Tweet'

class Timeline extends Component {

	render() {
		return (
			<section id="tweets-container">
				<h3>Tweets</h3>
				<ul>
		      <Tweet />
		      <Tweet />
		      <Tweet />
		      <Tweet />
		      <Tweet />
		      <Tweet />
		      <Tweet />
		      <Tweet />
		      <Tweet />
		      <Tweet />
	      </ul>
			</section>
		)
	}
}

export default Timeline;