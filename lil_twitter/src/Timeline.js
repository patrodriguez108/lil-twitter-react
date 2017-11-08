import React, { Component } from 'react';
import Tweet from './Tweet'
var data = require('./recent_tweets.json')

class Timeline extends Component {

	constructor(props) {
		super(props);

		this.state = {
			tweetContent: undefined,
			nameOfUser: undefined,
			handleName: undefined,
			avatarSrc: undefined,
			createdAt: undefined
		}
	}

	componentDidMount() {
		for (var i = 0; i < data.length; i++) {
			console.log(data[i]);
			this.setState({
				tweetContent: data[i].content,
				nameOfUser: data[i].username,
				handleName: data[i].handle,
				avatarSrc: data[i].avatar_url,
				createdAt: data[i].created_at
			})
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