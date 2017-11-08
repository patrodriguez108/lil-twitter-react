import React, { Component } from 'react';
import Tweet from './Tweet'
var data = require('./recent_tweets.json')

class Timeline extends Component {

	constructor(props) {
		super(props);

		this.state = {
			tweets: []

		}

	}

	componentDidMount() {
			this.setState({
				tweets: data
			})
	}

	render() {
		const recentTweets = this.state.tweets;
		const listItems = recentTweets.map(function(tweet) {
			return (<Tweet />)
		})
		return (

			<section id="tweets-container">
				<h3>Tweets</h3>
				<ul>
					{listItems}
	      </ul>
			</section>
		)
	}
}

export default Timeline;