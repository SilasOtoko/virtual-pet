import React, { Component } from 'react';
import '../App.css';
import Pet from './Pet';

class VirtualScreen extends Component {
	constructor() {
		super();

	}

	render () {
		const { pet } = this.props;
		return (
			<div className="virtual-screen">
				<Pet currentUser={ this.props.currentUser } pet={pet}/>
			</div>
		)
	}
}

export default VirtualScreen;