import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
	constructor(props) {
		super(props);
		this.state = { greeting: 'Hello' };
	}

	frenchify() {
		this.setState({ greeting: 'Bonjour' });
	}

	removeGreeting() {
		this.props.removeGreeting(this.props.name);
	}

	render() {
		return (
			<div className="HelloWorld">
				{this.state.greeting} {this.props.name}!
				<br />
				<button className="frenchify" onClick={this.frenchify.bind(this)}>
					Frenchify!
				</button>
				<br />
				<button className="remove" onClick={this.removeGreeting.bind(this)}>
					Remove Me!
				</button>
			</div>
		);
	}
}

export default HelloWorld;
