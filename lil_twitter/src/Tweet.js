import React, { Component } from 'react';

class Tweet extends Component {

	render() {

		return (
	    <li className="tweet">
	      <img className="avatar" src="https://pbs.twimg.com/profile_images/2858734172/db7da718fd369eba6184973631d7d84a_bigger.jpeg" alt="" />
	      <div className="tweet-content">
	        <p>
	          <span className="full-name">Sam Samskies</span>
	          <span className="username">@SamSamskies</span>
	          <span className="timestamp">- 6m</span>
	        </p>
	        <p>My latest contribution to the advancement of the human race. I present to you ver 0.0.1 of http://mileyroids.com/  #Mileyroids #miley haha :)</p>
	      </div>
	    </li>
		)
	}
}

export default Tweet;