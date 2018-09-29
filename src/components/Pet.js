import React, { Component } from 'react';

class Pet extends Component {
	constructor(props) {
		super(props);

		this.state = {
			age: null,
			hatched: false
		}

		this.calculateAge = this.calculateAge.bind(this);
		this.handleHatching = this.handleHatching.bind(this);
	}

	componentDidMount() {
		let age = this.calculateAge(this.props.pet.birthTime);
		this.setState({
			age: age
		});
		this.handleHatching();
	}

	calculateAge(birthTime) {
		let calculatedAge = Math.floor((Date.now() - birthTime) / 1000 / 3600, 1);
		return calculatedAge;
	}

	handleHatching() {
		if(this.state.age >= 1) {
			console.log('hatched');
			this.setState({
				hatched: true
			});
		}
	}

	render() {
		const birthTime = this.props.pet.birthTime;
		return (
			<div className="pet">
				{this.props.pet && (
					<div>
						{(this.state.hatched == false) && (
							<div className="pet-egg"></div>
						)}
						{(this.state.hatched === true) && (
							<div className="pet-first-stage"></div>
						)}
						<p>Age: {this.state.age} Hour(s)</p>
					</div>
				)}
			</div>
		)
	}
}

export default Pet;