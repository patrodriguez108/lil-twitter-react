import React, { Component } from 'react';

class Tweet extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tweetContent: props.content,
			nameOfUser: props.username,
			handleName: props.handle,
			avatarSrc: props.avatar_url,
			createdAt: props.created_at
		}
	}

	render() {

		return (
	    <li className="tweet">
	      <img className="avatar" src={ this.state.avatarSrc } alt="" />
	      <div className="tweet-content">
	        <p>
	          <span className="full-name">{ this.state.nameOfUser }</span>
	          <span className="username">{ this.state.handleName }</span>
	          <span className="timestamp">- { this.state.createdAt }</span>
	        </p>
	        <p>{ this.state.tweetContent }</p>
	      </div>
	    </li>
		)
	}
}

export default Tweet;