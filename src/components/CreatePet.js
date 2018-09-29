import React, { Component } from 'react';
import firebase, { database } from '../firebase';
import moment from 'moment';

class CreatePet extends Component {
	constructor() {
		super();

		this.state = {
			birthTime: null,
			user: null
		}

		this.petRef = database.ref('pets');
		this.createPet = this.createPet.bind(this);
	}

	createPet(event) {
		event.preventDefault();

		const birthTime = Date.now();

		this.petRef.push({
			birthTime: birthTime,
			user: this.props.currentUser.uid
		});
	}

	render() {
		return(
			<div>
				<form>
					<button onClick={this.createPet}>
						Create Pet
					</button>
				</form>
			</div>
		)
	}
}

export default CreatePet;