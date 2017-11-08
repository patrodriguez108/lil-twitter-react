import React, { Component } from 'react';
import Tweet from './Tweet'
var data = require('./recent_tweets.json')

class Timeline extends Component {

	constructor(props) {
		super(props);

		this.state = {

		}

		this.tweets = [];
	}

	componentDidMount() {
		for (var i = 0; i < data.length; i++) {
			this.tweets.push(new Tweet(data[i]))
		}
	}

	render() {
		return (
			<section id="tweets-container">
				<h3>Tweets</h3>
				<ul>
		      <Tweet tweetContent={this.state.tweetContent} nameOfUser={this.state.nameOfUser} handleName={this.state.handleName} avatarSrc={this.state.avatarSrc} createdAt={this.state.createdAt} />
		      <Tweet tweetContent={this.state.tweetContent} nameOfUser={this.state.nameOfUser} handleName={this.state.handleName} avatarSrc={this.state.avatarSrc} createdAt={this.state.createdAt} />
		      <Tweet tweetContent={this.state.tweetContent} nameOfUser={this.state.nameOfUser} handleName={this.state.handleName} avatarSrc={this.state.avatarSrc} createdAt={this.state.createdAt} />

	      </ul>
			</section>
		)
	}
}

export default Timeline;