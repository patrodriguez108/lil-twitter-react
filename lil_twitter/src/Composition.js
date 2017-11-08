import React, { Component } from 'react';

class Composition extends Component {

	render() {
		return (
			<section id="tweet-box">
		    <p id="tweet-box-title">Compose New Tweet</p>
		    <form id="tweet-form">
		      <textarea id="new-tweet" cols="30" rows="5" maxLength="140" name="tweet"></textarea>
		      <input type="submit" value="Tweet" />
		    </form>
	    </section>
    )
	}
}

export default Composition;