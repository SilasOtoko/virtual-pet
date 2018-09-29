import React, { Component } from 'react';

class Timer extends Component {
	constructor() {
		super();

		this.handleAgeTimer = this.handleAgeTimer.bind(this);
	}

	handleAgeTimer() {
		
	}

	render() {
		return (
			<div>
				<p>{this.handleAgeTimer}</p>
			</div>
		)
	}
}

export default Timer;