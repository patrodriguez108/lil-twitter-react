import React, { Component } from 'react';

class Tweet extends Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {

		return (
	    <li className="tweet">
	      <img className="avatar" src={ this.props.avatarSrc } alt="" />
	      <div className="tweet-content">
	        <p>
	          <span className="full-name">{ this.props.nameOfUser }</span>
	          <span className="username">{ this.props.handleName }</span>
	          <span className="timestamp">- 6m</span>
	        </p>
	        <p>{ this.props.tweetContent }</p>
	      </div>
	    </li>
		)
	}
}

export default Tweet;